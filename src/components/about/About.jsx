import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { MdOutlineIncompleteCircle } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'


const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        <article className='about__card'>
                            <MdOutlineIncompleteCircle className='about__icon' />
                            <h5>Courses Completed</h5>
                            <small>5+ Completed</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        I'm a very ambitious Web developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                        If I need to define myself in one sentence that would be a student looking for a good job,
                        a sports fanatic and tech-obsessed!!!
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>



        </section>
    )
}

export default about