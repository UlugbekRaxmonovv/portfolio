import React from 'react';
import './Into.css'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const Into = () => {
    return (
        <div className='into container'>
            <div className="i-lift">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>John </span>
                    <span>Frontend developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempora pariatur odit sequi autem fuga, blanditiis cupiditate ex inventore suscipit numquam expedita dolorem cum vitae cumque dolor quo. Iusto, ea?</span>
                   
                </div>
                    <div className="i-button">
                    <button>Hiro me</button>
                    </div>
                    <div className="i-icons">
                    <FaLinkedin />
                    <AiFillInstagram />
                    <FaGithub />


                    </div>
               
 
            </div>
            <div className="i-right">
                {/* <img src={rasm} alt="" /> */}
              <img  width={300} style={{marginTop:'20%'}} src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
        </div>
    );
}

export default Into;
