import React from 'react'
import Button from '../button/Button'
export default function Hero() {
    return (
        <div className="hero">

            <div className="container">

                <div className="left">

                    <h1 className="h1">
                        Hi, I'm <b>Julia&nbsp;Walker</b>.
                        <br />Web Developer
                    </h1>

                    <p className="h3">
                        Specialized in <abbr title="Accessibility">a11y</abbr>
                        and Core Web Vitals
                    </p>

                    <div className="btn-group">
                        <Button bgcolor="rgb(88, 88, 245)" color='white' title="About Me" />
                        <Button title="Contact Me" bgcolor='white' color='rgb(88, 88, 245)' border='1px solid rgb(88, 88, 245)' />
                    </div>

                </div>

                <div className="right">

                    <div className="pattern-bg"></div>
                    <div className="img-box">
                        <img src={require("../../assets/images/hero.png")} alt="Julia Walker" className="hero-img" />
                            <div className="shape shape-1"></div>
                            <div className="shape shape-2"></div>
                    </div>

                </div>

            </div>

        </div>
    )
}
