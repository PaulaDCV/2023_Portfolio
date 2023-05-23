import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
    return (

<div className="py-10 w-full">
        <VerticalTimeline className="py-10" lineColor = {"#4f46e5"}>

            <VerticalTimelineElement

                className="  vertical-timeline-element--education "
                date="September 2021 to June 2023"
                iconStyle={{background: '#3a355b', color: '#3ff'}}
                contentStyle = {{color: '#E6E6E6'}}>
                <h3 className="vertical-timeline-element-title">Data Science MSc</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Sussex, Brighton</h4>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{background:"#3a355b", color: '#fff'}}
                contentStyle = {{color: '#E6E6E6'}}
            >
                <h3 className="vertical-timeline-element-title">BSc Computer Science and Artificial Intelligence</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Sussex</h4>
                <p>

                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{background: '#685fa4', color: '#fff'}}
                contentStyle = {{color: '#E6E6E6'}}
            >
                <h3 className="vertical-timeline-element-title">Foundation year in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Sussex</h4>
                <p></p>
            </VerticalTimelineElement>
        </VerticalTimeline>
</div>

    )
}