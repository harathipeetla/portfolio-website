import { Component } from "react";
import ResponsiveWithCSS from '../../images/ResponsiveWithCSS.png'
import Python from '../../images/Python.png'
import SQL from '../../images/Python.png'
import JS from '../../images/JS.png'
import NodeJS from '../../images/NodeJS.png'
import ReactJS from '../../images/ReactJS.png'



import './index.css'

const Certificates = [
    {
        id:1,
        image: ResponsiveWithCSS,
        title: "Build Your Own Responsive Website",
        skills: ['HTML','CSS', 'BootStrap'],

    },

    {
        id:2,
        image: Python,
        title: "Programming Foundations",
        skills: ['Python'],

    },

    {
        id:3,
        image: SQL,
        title: "Database with SQL",
        skills: ['SQL'],
    },

    {
        id:4,
        image: JS,
        title: "Dynamic Web Design",
        skills: ['JavaScript'],
    },
    {
        id:5,
        image: NodeJS,
        title: "NodeJS",
        skills: ['NodeJS'],
    },
    {
        id:6,
        image: ReactJS,
        title: "ReactJS",
        skills: ['ReactJS'],
    },
]


class About extends Component{

    state={
        cerificates: Certificates
    }
    render(){
        const {cerificates} = this.state
        return(
        <div className="bg-container">

            <h1>About Me</h1>
            <p className="about-me">
            I am confident in my ability to contribute effectively to your team and help the company achieve its goals.<br/> 
            I  trained as a MERN full stack developer at NxtWave disruptive technologies. I have hands-on experience in building responsive, dynamic,<br/>
             and Interactive websites using front-end technologies like HTML, CSS, JavaScript, and React JS. <br/> 
            I have good knowledge of backend technologies like Node. js and express.js. I built strong analytical and problem-solving skills by learning the programming language with Python. <br/> 
            I have good knowledge of databases with SQL. 
           <strong>Below are my Certificates 👇👇👇...</strong> 
            </p>
            <div className="about-container">
                
                {cerificates.map((item)=>(
                    <li key={item.id}>
                        <div>
                            <img src={item.image} alt={item.title}/>
                        </div>
                        <h1 className="title">{item.title}</h1>
                        <div>
                           <strong> Skills: {" "}</strong>
                            {item.skills.map((each, index) =>(
                               <span key={index}>{each} {" "}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </div>

        </div>
        )
    }
}

export default About