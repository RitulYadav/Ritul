import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <p className="text">atin</p>
        <span className="hello">Hello</span>
        <span className="">I'm <span className="introName">Ritul</span><br/>Website Developer</span>
        <p className="introPara">I am a skilled web designer ,expert in creating <br/> visually appealing and user friendly websites.</p>
      <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="" className="bg"/>
    </section>
  )
}
export default Intro