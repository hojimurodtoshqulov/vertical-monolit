import React from 'react'
import scss from "./perfect.module.scss";
// image
import Img from "../../assets/perfect.png";
// image

const Perfect = () => {
    return (
        <>
            <div className={scss.perfectWrapper}>
                <div className="container">
                    <div className={scss.perfect}>
                    <div className={scss.perfect__left}>
                            <h3>We love to make perfect   home</h3>
                            <p>The staff of the company "Bekzod holding" is equipped with specialists with relevant specialized education and extensive experience in the development of complex web projects and information systems. All the company's developers have completed the necessary training and received certificates confirming their competence and the level of qualification achieved.</p>
                    </div>
                    <div className={scss.perfect__right}>
                            <img src={Img} alt="Vertical-monolit" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfect