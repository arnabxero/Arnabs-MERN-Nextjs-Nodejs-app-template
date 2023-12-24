import React from 'react';
import './404.css'; // Import the external CSS file

function Page404() {
    return (
        <>
            <section>

                <div className="ufo-container">
                    <div className="lifting-ray-container">
                        <div className="lifting-ray">
                        </div>
                        <div className="lifting-ray-overlay">
                        </div>
                    </div>
                    <div className="ufo">
                        <div className="ufo-glass">
                            <div className="alien">
                                <div className="alien-eye alien-eye-left">
                                </div>
                                <div className="alien-eye alien-eye-right">
                                </div>
                                <div className="alien-mouth">
                                </div>
                            </div>
                        </div>
                        <div className="ufo-bottom">
                        </div>
                        <div className="ufo-ring">
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                            <div className="ufo-ring-light">
                            </div>
                        </div>
                    </div>
                </div>

                <h1> 404 Page Not Found </h1>

                <div className="number number-left"> 4 </div>
                <div className="number number-right"> 4 </div>

                <div className="my-planet">
                    <div className="my-planet-rings my-planet-rings-back">
                    </div>
                    <div className="my-planet-ellipsis-container">
                        <div className="my-planet-counter-rotation-container">
                            <div className="my-planet-planet">
                                <div className="my-planet-face">
                                    <div className="my-planet-eye my-planet-eye-left">
                                    </div>
                                    <div className="my-planet-eye my-planet-eye-right">
                                    </div>
                                    <div className="my-planet-mouth">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-planet-rings my-planet-rings-front">
                    </div>
                </div>

            </section>

            <div className="signature">
                <div className="link">
                    <span className="brace">
                        Project By <a href='https://arnob.dev' target='_blank' className='bg-white text-black ml-1 px-2 rounded-md'>ArnabXero</a>
                    </span>
                    <span className="before">
                        <span className="before-text">
                            &nbsp;➟
                        </span>
                    </span>
                    <span className="my-name">
                        &nbsp;|&nbsp;GOTO
                    </span>
                    <span className="after">
                        <span className="after-text">
                            <span className="spin">&nbsp;➟</span>
                            <span>➟</span>
                        </span>
                    </span>
                    <span className="brace bg-white text-black ml-1 px-2 rounded-md">
                        <a href='./'>
                            HOME
                        </a>
                    </span>
                </div>
            </div >

            <div className="stars"></div>
            <div className="twinkling"></div>
        </>
    );
}

export default Page404;
