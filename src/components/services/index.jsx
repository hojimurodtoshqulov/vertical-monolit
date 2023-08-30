import React from 'react'
import Title from '../title';
import scss from "./services.module.scss";
// images //
import img1 from "../../assets/man-slice1.png";
import img2 from "../../assets/man-slice2.png";
import img3 from "../../assets/man-slice3.png";
import border from "../../assets/border.png"
// images //

const Services = ({ }) => {
    return (
        <>
            <div className="container">
                <div className={scss.services__head}>
                    <Title titleName={"Наши услуги"} />
                    <img src="" alt="" />
                </div>
                <div className={scss.services}>
                    <div className={scss.services__left}>
                        <div className={scss.img}>
                        <img src={img3} alt="vertical-monolit"  className={scss.image}/>
                        {/* <img src={border} className={scss.border} /> */}
                        </div>
                        <div className={scss.img}>
                        <img src={img2} alt="vertical-monolit" className={scss.image}/>
                        </div>
                        <div className={scss.img}>
                        <img src={img1} alt="vertical-monolit" className={scss.image}/>
                        </div>
                    </div>
                    <div className={scss.services__right}>
                        <div className={scss.services__right__blog}>
                            <h3>Lorem
                                ipsum sad</h3>
                            <p>Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded</p>
                        </div>
                        <hr />
                        <div className={scss.services__right__blog}>
                            <h3>Lorem
                                ipsum sad</h3>
                            <p>Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded</p>
                        </div>
                        <hr />
                        <div className={scss.services__right__blog}>
                            <h3>Lorem
                                ipsum sad</h3>
                            <p>Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded</p>
                        </div>
                        <hr />
                        <div className={scss.services__right__blog}>
                            <h3>Lorem
                                ipsum sad</h3>
                            <p>Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded</p>
                        </div>
                        <hr />
                        <div className={scss.services__right__blog}>
                            <h3>Lorem
                                ipsum sad</h3>
                            <p>Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded lorem ispum saded lorem ipsum
                                Lorem ipsum lorem ipsum saded</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services