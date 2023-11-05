
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import About from './About';
import Product from './Product';
import Services from './Services';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(true);
    const [section, setSection] = useState('HOME'); // Default section is 'home'
    const [productName, setProductName] = useState('helmet');



    //useEffect(() => {
    //    // Initialize the carousel when the component mounts
    //    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
    //        interval: 2000, // Set the interval for automatic sliding (in milliseconds)
    //        wrap: true, // Enable carousel wrap (circular sliding)
    //    });
    //}, []);


    const setStates = (product) => {
        setProductName(product);
        setSection('PRODUCTS');
    }

    return (
        <>
           
                <div className="custom-footer-bg">
                <div className="centered-content p-2">
                    <div className="color3">
                        <marquee width="800" behavior="alternate">
                    <a href="tel:8888401513"> <i className="fa fa-phone"></i> 8888401513 /</a>
                    <a href="tel:7588489516"> 7588489516 | </a>
                            <a href="mailto:fierosafety@gmail.com">
                            <i className="fa fa-envelope"></i> fierosafety@gmail.com </a>
                     </marquee>
                    </div>
                </div>
            </div>
            <div className="custom-footer-bg1 mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/finalfs.png" alt="" className="compressed-image" />  
                <div className="color4">
                    FIERO SAFETY SERVICES PVT.LTD.
                    <div className="color5">
                        We keep you safe...!!!
                    </div>
                   
                </div>
                <img src="/2.png" alt="" className="responsive-image" style={{ marginLeft: '15vh' }} />
                
                <img src="/4.png" alt="" className="responsive-image" style={{ marginLeft: '5vh' }} />
              
                <div style={{ position: 'absolute', top: 70, right: 20 }}>
                    <ul className="wrapper">
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><i class="fa fa-brands fa-facebook"></i></span>


                        </li>
                        <li className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><i class="fa fa-brands fa-twitter"></i></span>
                        </li>
                        <li className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><i class="fa fa-brands fa-instagram"></i></span>
                        </li>
                        <li className="icon github">
                            <span className="tooltip">Github</span>
                            <span><i class="fa fa-brands fa-github"></i></span>
                        </li>
                        <li className="icon youtube">
                            <span className="tooltip">Youtube</span>
                            <span><i class="fa fa-brands fa-youtube"></i></span>

                        </li>

                    </ul></div>

            </div>

            <div className="custom-footer-bg2">
                <ul className="nav" >
                    {/*<li className="`nav-item dropdown ${section === 'HOME' ? 'active-tab' : ''}`}>">*/}
                        <li className={`nav-item dropdown ${section === 'HOME' ? 'active-tab' : ''}`}>

                        <a className="nav-link active" style={{ color: section === 'HOME' ? '#CC0335' : 'white', marginRight: '40px' }} onClick={() => setSection('HOME')} aria-current="page" href="#">HOME</a>
                       
                    </li>
                    <li className="nav-item dropdown active">
                        <a className="nav-link custom-text-color" style={{ color: section === 'ABOUT' ? '#CC0335' : 'white', marginRight: '40px' }} onClick={() => setSection('ABOUT')}>ABOUT US</a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active" href="#" style={{ color: section === 'PRODUCTS' ? '#CC0335' : 'white', marginRight: '40px' }}>PRODUCTS <i class="fa fa-solid fa-caret-down"></i></a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#" onClick={() => setStates('helmet')}>Fire Helmet</a></li>
                                <li><a href="#" onClick={() => setStates('fire_extingusher')}>Fire Extingusher</a></li>
                                <li><a href="#" onClick={() => setStates('fire_alarm')}>Fire Alarm</a></li>
                                <li><a href="#" onClick={() => setStates('fire_spinkler')}>Sprinkler System</a></li>
                                <li><a href="#" onClick={() => setStates('fire_suppression')}>Suppression System</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" aria-disabled="true" style={{ color: section === 'SERVICES' ? '#CC0335' : 'white', marginRight: '40px' }} onClick={() => setSection('SERVICES')}>SERVICES</a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: section === 'CERTIFICATION' ? '#CC0335' : 'white', marginRight: '40px' }} onClick={() => setSection('CERTIFICATION')}>CERTIFICATION</a>
                        
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" onClick={() => setSection('CONTACT')} style={{ color: section === 'CONTACT' ? '#CC0335' : 'white', marginRight: '40px' }}>CONTACT US</a>
                        
                    </li>
                    <li className="nav-item dropdown">
                      {/*  <a className="nav-link" href="/images/Fierosafety Business Details.pdf" style={{ color: section === 'BROCHURE' ? '#CC0335' : 'white', marginRight: '40px' }} onClick={() => setSection('BROCHURE')}>BROCHURE</a>*/}
                        <a className="nav-link" href="/images/Fierosafety Business Details.pdf" style={{ color: section === 'BROCHURE' ? '#CC0335' : 'white', marginRight: '40px' }} onClick={() => setSection('BROCHURE')} target="_blank" rel="noopener noreferrer">
                            BROUCHURE
                        </a>
                       
                    </li>
                </ul>
            </div>

            <div> <a
                href="https://api.whatsapp.com/send?phone=9356548301"
                className="whatsapp-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-whatsapp"></i>
            </a></div>




            
              
              
                {section === "HOME" &&
                        <>

                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/images/slider3.jpg" class="d-block w-100" alt="" />
                                <div class="carousel-caption d-none d-md-block">
                                <h5 className="colorAbout" style={{ fontSize: '2.5vw', color: '#A70417' }} >Welcome to Fiero Safety Sevices Pvt.Ltd.</h5>

                                <h5 className="colorAbout" style={{ fontSize: '2vw', fontWeight: '200' }}>Fire Extinguishers</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/slider1.jpg" class="d-block w-100" alt="" />
                                <div class="carousel-caption d-none d-md-block">
                                <h5 className="colorAbout" style={{ fontSize: '2.5vw', color: '#A70417' }}>Welcome to Fiero Safety Sevices Pvt.Ltd.</h5>

                                <h5 className="colorAbout" style={{ fontSize: '2vw', fontWeight: '200' }}>Fire and safety Equipments</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/slider2.jpg" class="d-block w-100" alt="" />
                                <div class="carousel-caption d-none d-md-block">
                                <h5 className="colorAbout" style={{ fontSize: '2.5vw', color: '#A70417' }}>Welcome to Fiero Safety Sevices Pvt.Ltd.</h5>
                                <h5 className="colorAbout" style={{ fontSize: '2vw', fontWeight: '200' }}>Fire protective system</h5>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                        



                    <div className="col-12 row p-4">
                        <div className="col-7 row ">
                                <h2 className='color1' style={{ marginBottom: '0px' }}>WE ARE FIERO SAFETY PVT.LTD.</h2> 
                                <hr className="custom-hr" style={{ backgroundColor: 'red'} } />
                                <p className="color2" >SHIELDON Fire & Safety Pvt. Ltd. is a fire protection company that delivers quality fire protection systems and safety solutions under one roof. We protect lives and property while providing an exceptional value to our customers. we strive to become a full-service, world class fire protection organization.
                                We have experience with the commercial, industrial or residential marketplaces. At SHIELDON Fire & Safety Pvt. Ltd., we provide a host of fire protection services and fire safety consultancy for all types of buildings to provide your needs as a full service fire protection company.</p>
                            </div>
                            <div className="col-5" style={{ marginLeft:'3vh' }}>
                            <img src="/brochure front page new.jpg" alt="" className="compressed-image1" />
                        </div>
                        </div>

                </>}

            {section === "CONTACT" &&
                <ContactForm />}

            {section === "ABOUT" &&
                <About />}

            {section === "PRODUCTS" &&
                <Product
                    productName={productName}
                />}
            {section === "SERVICES" &&
                <Services/>}




      


                    <div className="custom-footer-bg3" >
                <div className="custom-footer p-3">
                    <div className="contact-info">
                        <h5>Contact Info</h5>
                        <hr className="custom-hr" />
                        <p style={{ marginTop: '25px' }}>
                                    
                                    <i className="fa fas fa-home" style={{ marginRight: '10px' }}></i>
                                    
                                    Vidya Vasant Park, Front of Vasantrao Naik B.Ed. College, Kalamba, Kolhapur - 416007

                        </p>
                                <p>
                                    
                                    <i className="fa fa-phone" style={{ marginRight: '10px' }}></i>
                                    7588489516/8888401513
                        </p>
                        <p style={{ marginBottom: '25px' }}>
                                    <i className="fa fa-envelope" style={{ marginRight: '10px' }}></i>
                                    fierosafety@gmail.com
                        </p>
                    </div>
                    <div className="contact-info">
                        <h5>Useful Links</h5>
                        <hr className="custom-hr" />
                        <p><i class="fa fa-solid fa-caret-right"></i> Home<i class="fa fa-solid fa-caret-right" style={{ marginLeft:'24vh' }}></i> Certification</p>
                        <p><i class="fa fa-solid fa-caret-right"></i> About Us<i class="fa fa-solid fa-caret-right" style={{ marginLeft: '20vh' }}></i> Contact Us</p>
                        <p><i class="fa fa-solid fa-caret-right"></i> Products<i class="fa fa-solid fa-caret-right" style={{ marginLeft: '21vh' }}></i> Broucher</p>
                        <p><i class="fa fa-solid fa-caret-right"></i> Services</p>
                       

                    </div>

                    <div className="clearfix"></div>
                    <hr className="custom-hr" />


                    <div className="copyright-notice">
                        Copyright @2023 All Rights Reserved | By Software Development Cell, New Arts,Commerce and Science College,Ahmednagar

                    </div>
                    <div style={{ textAlign: 'center', color: 'black' }}>
                                <ul className="wrapper">
                                    <li className="icon facebook">
                                        <span className="tooltip">Facebook</span>
                                        <span><i class="fa fa-brands fa-facebook"></i></span>


                                    </li>
                                    <li className="icon twitter">
                                        <span className="tooltip">Twitter</span>
                                        <span><i class="fa fa-brands fa-twitter"></i></span>
                                    </li>
                                    <li className="icon instagram">
                                        <span className="tooltip">Instagram</span>
                                        <span><i class="fa fa-brands fa-instagram"></i></span>
                                    </li>
                                    <li className="icon github">
                                        <span className="tooltip">Github</span>
                                        <span><i class="fa fa-brands fa-github"></i></span>
                                    </li>
                                    <li className="icon youtube">
                                        <span className="tooltip">Youtube</span>
                                        <span><i class="fa fa-brands fa-youtube"></i></span>

                                    </li>

                                </ul>
                    </div>
                </div>
                    </div>
        
            
        </>
       
    );
}

export default Home;
