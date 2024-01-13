import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">Iam skilled Web developer in creating visually appealing and user-friendly websites.<br/>I have a strong understanding of design and keen eye for detail.I am proficient in HTML,CSS,<br/>and JavaScript.</span>
    <div className="skillBars">
   <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
        <div className="skillBarText">
          <h2>UI/UX Design</h2>
          <p></p>Passionate UI/UX Designer that enhance user satisfaction and engagement.
        </div>
      </div>
      <div className="skillBar">
        <img src={WebDesign} alt="" className="skillBarImg"/>
        <div className="skillBarText">
          <h2>Web Developer</h2>
          <p>Versatile Web developer proficient in crafting responsive and dynamic websites.</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={AppDesign} alt="" className="skillBarImg"/>
        <div className="skillBarText">
          <h2>App Design</h2>
          <p>Innovative app designer blending creativity to deliver user-friendly experineces.</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skill