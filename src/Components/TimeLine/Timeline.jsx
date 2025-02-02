import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-comp">
      <div className="timeline-cont">
        <div className="timeline-item">
          <div>
            <div className="dot"></div>
            <div className="timeline-date">2021 - 2024</div>
            <div className="timeline-content">
              <h1>Bachelor of Computer Applications {`(BCA)`}</h1>
              <div>Sharda University, Greater Noida</div>
              <span>CGPA - 9</span>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div>
            <div className="dot"></div>
            <div className="timeline-date">2020 - 2021</div>
            <div className="timeline-content">
              <h1>Class 12th - UP Board </h1>
              <div>H.A.V Inter College, Deoband</div>
              <span>Percentage - 69%</span>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div>
            <div className="dot"></div>
            <div className="timeline-date">2018 - 2019</div>
            <div className="timeline-content">
              <h1>Class 10th - UP Board</h1>
              <div>S K D H School, Sadharanpur</div>
              <span>Percentage - 80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
