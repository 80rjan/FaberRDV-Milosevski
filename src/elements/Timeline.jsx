
import './Timeline.css'
import {useEffect, useRef, useState} from "react";

export default function Timeline() {
    const getHeight = useRef(null);
    const [gapSize, setGapSize] = useState(0);

    useEffect(() => {
        if (getHeight.current) {
            setGapSize(getHeight.current.getBoundingClientRect().height);
        }

    }, []);

    return (
        <section className="timeline">
            <h1>Some history</h1>
            <div>
                <div className="timelineTextWrapper" style={{
                    gap: `${gapSize * 1.2}px`,
                    textAlign: 'end',
                }}>
                    <div ref={getHeight}>
                        <h3>2000</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div>
                        <h3>2012</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div>
                        <h3>2020</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className='timelineLine' />
                <div className="timelineTextWrapper" style={{
                    gap: `${gapSize * 1.2}px 0`
                }}>
                    <div>
                        <h3>2004</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div>
                        <h3>2017</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}