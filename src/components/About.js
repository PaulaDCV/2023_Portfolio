import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
    return (
        <VerticalTimeline>
            <h1 className={"text-left text-accent text-5xl"}>Timeline</h1>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentStyle = {{color: '#E6E6E6'}}
            >

                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement

                className=" vertical-timeline-element--education "
                date="September 2021 to June 2023"
                iconStyle={{background: '#fff', color: '#3ff'}}
                contentStyle = {{color: '#E6E6E6'}}>
                <h3 className="vertical-timeline-element-title">Data Science MSc</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Sussex, Brighton</h4>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
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
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                contentStyle = {{color: '#E6E6E6'}}
            >
                <h3 className="vertical-timeline-element-title">Foundation year in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Sussex</h4>
                <p></p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}