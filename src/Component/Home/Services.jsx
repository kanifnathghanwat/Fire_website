import React from 'react';


//import ContactForm from './Contact/ContactForm'
const Services = () => {


    return (
        <>
            <img src="/images/breadcrumb_bg.jpg" className="compressed-image2" alt="" />
            <div className="carousel-caption d-none d-md-block">
                <h5 className="colorAbout">Our Services</h5>

                <h5 className="colorAbout" style={{ fontSize: '2vw', fontWeight: '200' }}>Home > Services</h5>
            </div>

            <div className="col-md-12 row p-5">

                <div className="col-md-6">
                   
                    <p className="color2" >
                        <ul>
                            <li>Installation, Testing and Commissioning of Fire Detection, Protection and Suppression system.</li>
                            <li>Maintenance & AMC of Fire Detection, Protection and Suppression system.</li>
                            <li>Conducting survey of existing fire protection system and evaluate adequacy of the system in line with relevant India Standards and NFPA standards. In NFPA 25, routine fire protection system inspection/survey is essential for you to be confident that your system will function when it is needed.</li>
                            <li>Should you desire inspection, testing, maintenance or assessment services, a dedicated team member will be happy to discuss your needs, schedule a site visit if needed and respond to your request for quote.</li>
                            <li>Supply & refilling of Fire Extinguishers, FM200, CO2 flooding, Novec & Kitchen Suppression system.</li>
                            <li>Supply of Fire Fighting Equipments and Life Saving Appliances.</li>
                            <li>Conducting Fire Safety Training, Mock Drills and Preparing Emergency Plans for emergency preparedness.</li>
                            <li>Conducting Fire & Safety Audits and preparation of Standard Operating Procedures (SOPs).</li>
                            <li>Safety is not just a priority, it's a value. We believe in ensuring that every individual can go home at the end of the day the same way they came to work that morning.</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-6">
                    <img  src="/images/services.jpg" alt="" />
                </div>
            </div>

        </>
    )

}
export default Services;