import React from 'react';
import ContactForm1 from './data.jsx'

//import ContactForm from './Contact/ContactForm'
const ContactForm = () => {

    const [callContact, setCallContact] = React.useState(false);


    const openForm = () => {
        setCallContact(true);
    }

    return (
        <>
            {callContact &&
                <ContactForm1/>
            }

            <img src="/images/breadcrumb.jpg" className="compressed-image2" alt="" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className="colorAbout"> Contact Us</h5>

            <h5 className="colorAbout" style={{ fontSize: '2vw', fontWeight: '200' }}>Home > Contact Us</h5>
        </div>

            <div className='col-md-12 m-4'>
                <span className="para" style={{ textAlign: "justify" }}>
                    We look forward to the opportunity to assist you with any of your fire protection & safety needs. As your fire protection & safety contractor, we will collaborate and work with you to find solutions to your specific applications. Please feel free to contact us about your residential, industrial or commercial fire protection & safety needs. We will provide a no-obligation consultation, survey or solution.
                </span>
            </div>



            <div className="row no-gutters m-5">
                <div className="col-lg-4 single-info-col align p-3">
                    <div
                        className="single-info wow fadeInRight"
                        data-wow-duration="1s"
                        style={{
                            visibility: "visible",
                            animationDuration: "1s",
                            animationName: "fadeInRight"
                        }}
                    > <div style={{ color: 'black' }}>
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <span className="tooltip">Address</span>
                                    <span><i class="fa far fa-home"></i></span>


                                </li>


                            </ul>
                            <div style={{ float: 'right', padding: '2vh' }}>
                                <p>04, Panchashil Apartment, Sector 1,</p><p> CBD Belapur,
                                    Navi Mumbai,</p><p> Maharashtra 400614</p>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 single-info-col p-3">
                    <div
                        className="single-info wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".2s"
                        style={{
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.2s",
                            animationName: "fadeInRight"
                        }}
                    >
                        <div style={{ color: 'black' }}>
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <span className="tooltip">Call</span>
                                    <span><i class="fa fas fa-phone"></i></span>


                                </li>


                            </ul>
                            <div style={{ float: 'right', padding: '2vh' }}>
                                <p>Call Now

                                    </p>
                                <p>
                                 
                                    +91 85915 26640
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 single-info-col p-3">
                    <div
                        className="single-info wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".4s"
                        style={{
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.4s",
                            animationName: "fadeInRight"
                        }}
                    >
                        <div style={{ color: 'black' }}>
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <span className="tooltip">Mail us</span>
                                    <span><i class="fa far fa-envelope"></i></span>


                                </li>
                               

                            </ul>
                            <div style={{ float: 'right', padding:'2vh' }}>
                                <p>Mail Us</p>
                                <p>
                                    shieldonindia@gmail.com <br />
                                    info@shieldonindia.com
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='col-12 row p-3'>
                <div className='col-md-6 row p-4'>
                    <div className='col-12'>
                        <h1 className='color'>KEEP IN TOUCH</h1> <br /> <hr className="line" /><br />
                        
                      
                    </div>

                    <div class="col-md-6">
                        <div class="form-element">
                            <input type="text" placeholder="Name" name="name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-element">
                            <input type="text" placeholder="Email" name="name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-element">
                            <input type="text" placeholder="Company" name="name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-element">
                            <input type="text" placeholder="Phone" name="name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-element">
                            <input type="text" placeholder="Location" name="name" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-element">
                            <textarea placeholder="Description" name="name" cols='65' rows="5" />
                        </div>
                    </div>

                    <div className="container">
                        <button className="btn btn-primary">SUBMIT</button>
                    </div>
                    <div className="container">
                        <button className="btn btn-primary" onClick={()=>openForm() }>Open Form</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.9498959013!2d74.66027078853226!3d19.110466280604875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698549667702!5m2!1sen!2sin"
                        className='mt-4' style={{ border: "0" }} width="600" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )

}
export default ContactForm;