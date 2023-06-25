import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Conduct research on user behaviors, motivations, and preferences.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Develop a clear structure to organize and label content and features.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Create visual representations of the product's layout and user flow.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Develop the visual style, graphics, and overall look and feel of the product.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Test the design with users to identify areas of difficulty and evaluate design changes.</p>
                        </li>
                    </ul>
                </article>


                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Designed and developed responsive websites for clients across various industries.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Implemented frontend and backend functionality to create dynamic web experiences.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Created custom web applications tailored to specific client needs and requirements.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Developed and integrated e-commerce websites with payment gateways to facilitate online transactions.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Provided ongoing website maintenance and updates to ensure optimal performance and usability.</p>
                        </li>
                    </ul>
                </article>


                <article className='service'>
                    <div className="service__head">
                        <h3>Fullstack Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Custom web app development tailored to specific business requirements.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Fullstack web development using popular frameworks and libraries such as React, Vue.js, Node.js, Django, and Flask.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive web design for seamless user experience across devices.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Database design and optimization for smooth app performance.</p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>API development and integration for added functionality and improved user experience.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services