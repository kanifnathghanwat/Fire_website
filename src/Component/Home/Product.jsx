import React from 'react';


//import ContactForm from './Contact/ContactForm'
const Product= (props) => {


    return (
        <>

            {props.productName === 'helmet' &&
                <>
                <img src="/images/img6.jpeg" class="d-block w-100" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5 className="colorAbout">FIRE PROTECTION SYSTEM</h5>

                        <p>Some representative placeholder content for the first slide.</p>
                    </div>


                    <div className="col-md-12 row p-3">
                        <div className="col-md-6">
                        <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/safety-helmet.jpg" />
                        </div>
                        <div className="col-md-6">
                            <h1>FIRE PROTECTION SYSTEM</h1>
                            <h3>(DRY & WET RISER SYSTEM) INSTALLATION, COMMISSIONING & TESTING</h3>
                            <p style={{ textAlign: "justify" }} >
                                As part of services, SHIELDON Fire & Safety Pvt. Ltd. provide the installation of new & maintenance of existing fire protection systems such as Dry & Wet Riser System. Our staff of designers designs fire protection systems that are specific to your facility, that will detect and respond to fire conditions to ensure the safety of your occupants and reduce the damage to your facility. Providing you with peace of mind, knowing that your facilities, and the people who live, work and play in them are safe from the ravages of fire.
                            </p>
                        </div>
                    </div>
                </>
            }


            {props.productName === 'fire_extingusher' &&
                <>
                <img class="d-block w-100" src="/images/img1.jpg" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5 className="colorAbout">FIRE EXTINGUISHER</h5>

                        <p>Some representative placeholder content for the first slide.</p>
                    </div>


                    <div className="col-md-12 row p-3">
                        <div className="col-md-6">
                        <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/Fire-Extinguishers.jpg" />
                        </div>
                        <div className="col-md-6">
                        <h1>FIRE EXTINGUISHER</h1>
                            <h3>(DRY & WET RISER SYSTEM) INSTALLATION, COMMISSIONING & TESTING</h3>
                            <p style={{ textAlign: "justify" }} >
                            Portable fire extinguishers are the first line of defense against small fire in most buildings. Infact while sprinklers, alarms and other fire protection devices are only required in certain occupancies, portable fire extinguisher are required in every single business.

                            New Fire Extinguishers
                            Refill & Service of existing Fire Extinguishers
                                </p>
                        </div>
                    </div>
                </>
            }

            {props.productName === 'fire_alarm' &&
                <>
                    <img class="d-block w-100" src="/images/img5.jpg" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5 className="colorAbout">FIRE ALARM SYSTEM</h5>

                        <p>Some representative placeholder content for the first slide.</p>
                    </div>


                    <div className="col-md-12 row p-3">
                        <div className="col-md-6">
                            <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/img2.jpg" />
                        </div>
                        <div className="col-md-6">
                        <h1>FIRE ALARM SYSTEM</h1>
                            {/*<h3>(DRY & WET RISER SYSTEM) INSTALLATION, COMMISSIONING & TESTING</h3>*/}
                            <p style={{ textAlign: "justify" }} >
                            When it comes to your fire system, you must make sure it is always running properly. After all, lives and properties are at stakes. SHIELDON Fire & Safety Pvt. Ltd. can give you peace of mind by completely maintaining your system or providing parts or repair service.
                            </p>
                        </div>
                    </div>
                </>
            }

            {props.productName === 'fire_spinkler' &&
                <>
                    <img class="d-block w-100" src="/images/img3.jpg" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5 className="colorAbout">SPRINKLER SYSTEM</h5>

                        <p>Some representative placeholder content for the first slide.</p>
                    </div>


                    <div className="col-md-12 row p-3">
                        <div className="col-md-6">
                            <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/img3.jpg" />
                        </div>
                        <div className="col-md-6">
                        <h1>SPRINKLER SYSTEM</h1>
                            
                            <p style={{ textAlign: "justify" }} >
                            SHIELDON Fire & Safety Pvt. Ltd. designs, installs, repairs, service, inspect and upgrade any fire protection sprinkler system. Each business, products and environment is unique and we are committed to provide the quality service you can trust. TYPES OF FIRE SPRINKLER SYSTEMS WE INSTALL: A sprinkler system is designed to use water to put out a fire. There are three different types that we can install:

                            Wet pipe systems: Typical application, with water in the system's pipes ready to be activated by the opening of fire sprinkler heads due to heat.
                            Dry pipe systems: This system has air or nitrogen gas in the pipes and water is released into the pipes upon activation of the sprinkler heads after a slight delay. These systems are used in areas where water in pipes can freeze.
                            </p>
                        </div>
                    </div>
                </>
            }

            {props.productName === 'fire_suppression' &&
                <>
                    <img class="d-block w-100" src="/images/img4.jpg" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5 className="colorAbout">SUPPRESSION SYSTEM</h5>

                        <p>Some representative placeholder content for the first slide.</p>
                    </div>


                    <div className="col-md-12 row p-3">
                        <div className="col-md-6">
                            <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/img4.jpg" />
                        </div>
                        <div className="col-md-6">
                        <h1>SUPPRESSION SYSTEM</h1>
                            <p style={{ textAlign: "justify" }} >
                            Wet sprinkler systems are reliable, but certain situations call for options outside of water in the commercial and industrial marketplaces. SHIELDON Fire & Safety Pvt. Ltd. provides a full line of alternatives and expertise, including special hazard, dry chemical and various other fire suppression systems. Foam, CO2, and clean agent systems help maintain the integrity of your assets from manufacturing facilities to gas plants and refineries. We design and install all major manufacturer suppression systems and can service all installed systems.
                            </p>
                        </div>
                    </div>
                </>
            }
        </>
    )

}
export default Product;