import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div>
            <div className="header__socials">
                <a href="https://www.linkedin.com/in/jenish-r-b813a11bb/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/jenishr0" target="_blank"><BsGithub /></a>
                <a href="https://twitter.com/Jenish_R_74" target="_blank"><BsTwitter /></a>
            </div>
        </div >
    )
}

export default HeaderSocials