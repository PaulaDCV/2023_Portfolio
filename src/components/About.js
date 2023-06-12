import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
    return (

<div className="my-10 w-full">
        <VerticalTimeline className="py-10" lineColor = {"#d2d2d2"}>

            <VerticalTimelineElement

                className="  vertical-timeline-element--education "
                date="September 2021 to June 2023"
                iconStyle={{background: '#3a355b', color: '#3ff'}}
                contentStyle = {{color: '#E6E6E6'}}>
                <h3 className="text-2xl vertical-timeline-element-title"> MSc Data Science</h3>
                <h4 className="text-xl vertical-timeline-element-subtitle">University of Sussex</h4>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="September 2018 - September 2021"
                iconStyle={{background:"#3a355b", color: '#fff'}}
                contentStyle = {{color: '#E6E6E6'}}
            >
                <h3 className="text-2xl vertical-timeline-element-title">BSc Computer Science and Artificial Intelligence</h3>
                <h4 className="text-xl vertical-timeline-element-subtitle">University of Sussex</h4>
                <p>

                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="September 2017 - June 2018"
                iconStyle={{background: '#685fa4', color: '#fff'}}
                contentStyle = {{color: '#E6E6E6'}}
            >
                <h3 className="text-2xl vertical-timeline-element-title">Foundation year in Computer Science</h3>
                <h4 className="text-xl vertical-timeline-element-subtitle">University of Sussex</h4>
                <p></p>
            </VerticalTimelineElement>
        </VerticalTimeline>
</div>

    )
}