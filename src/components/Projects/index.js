import { Component } from "react";





import { IoLogoHtml5 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";


import './index.css'

const ProjectsList = [
    {
        icon: <IoLogoHtml5/>,
        title:"Responsive food website",
        project_link : 'https://resfoodwebsite.ccbp.tech/',
        description: ' fully responsive website that offers a comprehensive list of food items and detailed information about each item.'
    },
    {
        icon: <TbBrandJavascript/>,
        title:"Dynamic Todo List",
        project_link : 'https://todolistharathi.ccbp.tech/',
        description: ' A robust task tracking system with CRUD capabilities, crafted to simplify task management.'
    },

    {
        icon: <FaReact/>,
        title:"E-commerce App",
        project_link : 'https://harareactpronxt.ccbp.tech/',
        description: 'Implemented Nxt Trendz application, which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc...'
    },

]


const TechnologiesLearned =[
    {
        tech:'HTML',
        icon:<SiHtml5/>
    },

    {
        tech:'CSS',
        icon:<FaCss3Alt/>
    },
    {
        tech:'JavaScript',
        icon:<TbBrandJavascript/>
    },
    {
        tech:'SQL',
        icon:<FaDatabase/>
    },
    {
        tech:'Python',
        icon:<FaPython/>
    },
    {
        tech:'NodeJS',
        icon:<FaNodeJs/>
    },
    {
        tech:'ExpressJS',
        icon:<SiExpress/>
    },
    {
        tech:'ReactJS',
        icon:<FaReact/>
    },

]


class Projects extends Component{

    state = {
        projectsList : ProjectsList,
        TechnologyList: TechnologiesLearned
    }

    render(){
        const {projectsList,TechnologyList } = this.state
        return(
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="project-item-container">
                {projectsList.map((item)=>(
                    <li key={item.project_link}>
                        <div className="icon-container">
                            <h1 className="icon">{item.icon}</h1>
                        </div>
                        <div className="project-contnet">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <a href={item.project_link}>Project Link<FaExternalLinkSquareAlt/></a>
                        </div>
                    </li>
                ))}
            </div>
            <div className="technologies-learned">
                <h1>Technologies Learned</h1>
                <div className="technologies-contianer">
                    {TechnologyList.map((item, index)=>(
                        <li key={index} className="technologies-list">
                            
                            <p className={item.tech}>{item.icon}</p>
                            <h1>{item.tech}</h1>
                        </li>
                    ))}

                </div>

            </div>

        </div>
        )
    }
}

export default Projects