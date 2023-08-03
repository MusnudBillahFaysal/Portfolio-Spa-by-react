import React from 'react';

function Skills() {
  return (
    <div className="containers">
      <div className="section-heading">
        <h1>
          <span>MY SKILLS</span>
        </h1>
      </div>

      <div className="content">
        <div className="skills-grid">
          <div className="skill-box html">
            <i className="fab fa-html5"></i>
            <h6>HTML</h6>
          </div>
          <div className="skill-box css">
            <i className="fab fa-css3-alt"></i>
            <h6>CSS</h6>
          </div>
          <div className="skill-box react">
            <i className="fab fa-react"></i>
            <h6>React JS</h6>
          </div>
          <div className="skill-box angular">
            <i className="fab fa-angular"></i>
            <h6>ANGULAR</h6>
          </div>
          <div className="skill-box ios">
            <i className="fab fa-apple"></i>
            <h6>IOS APP</h6>
          </div>
          <div className="skill-box app-dev">
            <i className="fas fa-mobile-alt"></i>
            <h6>APP DEV</h6>
          </div>
        </div>

        <div className="image">
          <img src="/images/skills.png" alt="Image" className="w-588 h-656" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
