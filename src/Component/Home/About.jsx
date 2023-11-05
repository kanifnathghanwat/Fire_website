import React from 'react';


//import ContactForm from './Contact/ContactForm'
const About = () => {


    return (
        <>  
            <img src="/images/about2.jpg" className="compressed-image2" alt="" />
            <div className="carousel-caption d-none d-md-block">
                <h5 className="colorAbout" style={{color:'red'} }> About Us</h5>

                <h5 className="colorAbout" style={{ fontSize: '2vw', fontWeight:'200',color:'red' }}>Home > About Us</h5>
                </div>
            
            <div className="col-md-12 row p-5">
                
                <div className="col-md-6">
                    <h1 className="color6">"SAFETY IS NOT JUST A PRIORITY, IT'S ONE OF OUR VALUES"</h1>
                  <br></br>
                    <p className="color2" >
                       
                        SHIELDON Fire & Safety Pvt. Ltd. is a fire protection company that delivers quality fire protection systems and safety solutions under one roof. We protect lives and property while providing an exceptional value to our customers. This is accomplished by the focus and delivery of the SHIELDON Fire & Safety Pvt. Ltd. values: Integrity , commitment, Professionalism , Quality, Safety.

                        Integrity
                        You can trust us to be people of integrity. We’ll do the right thing even if it hurts. We build trust by producing quality and excellence. No one worries that we won’t deliver the highest quality. We build trust by our commitment. Everyone knows that we will keep our word. We build trust through our professionalism. We build trust by our commitment to safety. After all, we’re dedicated to protecting lives and property.

                        Commitment
                        Commitment to the company, sticking out the tough times; to us, it means stepping up and being willing to give 120% whenever asked.



                        Professionalism
                        It is exemplified in the way we treat our customers and peers and conduct business... give what you expect to receive!

                        Quality
                        Quality drawings, quality solutions, quality ideas, the quality people we hire, and quality jobs we produce.

                        Safety
                        Our employees work in a safe and drug-free environment where they can go home at the end of the day the same way they came to work that morning. It’s a simple and straightforward value, but it’s very important to us. Safety is not just a priority, it's one of our values The reason is simple. Our work environment changes daily; VALUES do not. We respect safe work practices & strive to send our employees’ home every day better than they ar
                    </p>
                </div>
                <div className="col-md-6">
                    <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/about1.jpg" alt="" />
                </div>
            </div>
               
        </>
    )

}
export default About;