import React from 'react';
import './Contact.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../../../src/Components/Header/Header';
import Footer from '../../../src/Components/layout/Footer';


const Contact = () => {
    return (
        <>
        <Header/>
            {/* .........Content Section....... */}

            <div className='container' style={{ display: "flex",justifyContent:"space-between", flexWrap: "wrap", flexWrap: "wrap", margin: "auto", marginTop: "30px", gap: '20px' }}>


                <div>
                    <p style={{
                        fontFamily: "Inter",
                        fontSize: "25.23px",
                        fontWeight: "400",
                        lineHeight: "37.85px",
                        textAlign: "left",

                    }}>Get Started</p>

                    <p style={{
                        fontFamily: " Inter",
                        fontSize: "60.63px",
                        fontWeight: "700",
                    }}>Get in touch with us.</p>
                    <p style={{
                        fontFamily: " Inter",
                        fontSize: "60.63px",
                        fontWeight: "700",
                    }}>We're here to assist you.</p>

                </div>

                <div className='iconBox' style={{
                    width:"40px",
                    paddingTop:"10px",
                    paddingBottom:"10px",
                }}>

                <TwitterIcon style={{ color: 'gray',height:"60px",width:"40px" }} />
                <LinkedInIcon style={{ color: 'gray',height:"60px",width:"40px" }} />
                <FacebookIcon style={{ color: 'gray',height:"60px",width:"40px" }} />
                </div>
            </div>


            {/* ...........Input Field....... */}

            <div className='container' style={{ marginTop: "40px", marginBottom: "50px" }}>

                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
                    <input className='inpSection' placeholder='Enter Name' type="text" name="" id="" />
                    <input className='inpSection' placeholder='Enter Name' type="text" name="" id="" />
                    <input className='inpSection' placeholder='Enter Name' type="text" name="" id="" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "20px", marginTop: "20px" }}>
                    <textarea placeholder='Write a Message' name="" id=""></textarea>
                </div>

                <div style={{ marginLeft: "40px", marginTop: "30px" }}>
                    <button style={{ height: "60px", width: "200px", borderRadius: "50px", outline: "none", background: "red", color: "white", border: "none" }}>Leave Your Message <ArrowForwardIcon /></button>
                </div>
            </div>

<Footer/>
        </>
    )
}
export default Contact