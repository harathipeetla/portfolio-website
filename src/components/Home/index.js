import { Component } from "react";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import './index.css'

class Home extends Component{
    render(){
        return(
            <div className="home-container">

                <main className="container">
                    <p>Hello 👋 I'm</p>
                    <section className="animation">
                        <div className="first"><div>Harathi Peetla</div></div>
                        <div className="second"><div>MERN stack Trainee</div></div>
                    </section>
                </main>
                <About/>
                <Projects/>
                <Contact/>
                
            </div>
        )
    }
}

export default Home