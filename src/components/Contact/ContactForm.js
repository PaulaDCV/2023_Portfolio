export default function ContactForm() {
    return (
            <section className="flex pl-16 pr-8 basis-2/3 flex-grow flex-col justify-center items-center text-accent body-font relative w-full  ">
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
            </section>
        );
}
