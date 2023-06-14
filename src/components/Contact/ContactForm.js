import {useState} from "react";

export default function ContactForm() {
    const FORM_ENDPOINT = "https://public.herotofu.com/v1/adf5ea30-0abf-11ee-8025-97a9fb2f29da"
    const [status, setStatus] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Anything you need to inject dynamically
        const injectedData = {
            DYNAMIC_DATA_EXAMPLE: 0,
        };
        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                // It's likely a spam/bot request, so bypass it to validate via captcha
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement("input");
                        el.type = "hidden";
                        el.name = key;
                        el.value = injectedData[key];

                        e.target.appendChild(el);
                    });

                    e.target.submit();
                    throw new Error("Please finish the captcha challenge");
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .catch((err) => setStatus(err.toString()));
    };

    if (status) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">{status}</div>
            </>
        );
    }


    return (
        <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"

            className="flex pl-16 pr-8 basis-2/3 flex-grow flex-col justify-center items-center text-accent body-font relative w-full  ">
            <div className="flex-col flex items-center w-full max-w-md ">
                <label for="name" className="leading-7 text-sm text-accent-dark">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>

            <div className="flex-col flex items-center w-full max-w-md ">

                <label
                    for="email"
                    className="text-accent-dark leading-7 text-sm text-accent0"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                />

            </div>
            <div className="flex-col flex items-center w-full max-w-md ">

                <label
                    for="message"
                    className="text-accent-dark leading-7 text-sm text-accent"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>

            </div>
            <div className="p-2 max-w-md w-full">
                <button
                    className="flex mx-auto bg-button border-0 py-2 px-8 focus:outline-none hover:scale-105 hover:s
                        hadow-md hover:shadow-navbar rounded text-section">
                    Send
                </button>
            </div>

        </form>
    );
}
