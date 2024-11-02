import './SignUp.css';
import Logo from '../../assest/Image/FFF_Ascension_LO 1.png'

const SignUp = () => {
    return (
        <>

            <div className="body-background">
                <div>
                    <img style={{ marginTop: "10px", marginLeft: "30px" }} src={Logo} alt="" />
                </div>


                <div className='mainbody' style={{
                    background: "rgba(43, 60, 88, 1)",
                    margin: "auto",
                    borderRadius: "10px",
                    padding: "20px",
                    marginTop:"20px",
                }}>

                    <div style={{ display: "flex", justifyContent: "space-between", }}>
                        <p style={{
                            fontSize: "16px", color: "gray",
                        }} className='poppins-thin'>Welcome to <span style={{
                            color: "rgba(255, 255, 255, 1)",
                        }}>Ascension</span></p>
                        <p style={{ fontSize: "10px", color: "gray" }} className='poppins-thin'>Already have an Account? <br /> Sing In</p>
                    </div>

                    <h3 className='poppins-thin' style={{ fontSize: "30px", color: "rgba(255, 255, 255, 1)" }}>Sign Up</h3>


                    <label style={{ fontSize: "12px", marginTop: "10px", color: "gray", }}>Enter your username or email address</label> <br />
                    <input style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your username or email address' name="" id="" />


                    <label style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>Enter your Password</label> <br />
                    <div style={{ display: "flex", justifyContent: "space-between",gap:'5px'  }}>
                        <select style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px", padding: "5px" }} type="email" name="" id="" >
                            <option value="Monday">Monday</option>
                            <option value="Monday">Monday</option>
                            <option value="Monday">Monday</option>

                        </select>
                        <select style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px", padding: "5px" }} type="email" name="" id="" >
                            <option value="Monday">Monday</option>
                            <option value="Monday">Monday</option>
                            <option value="Monday">Monday</option>

                        </select>

                    </div>

                    <label style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>Enter your Password</label> <br />
                    <input style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your Password' name="" id="" />


                    <label style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>Enter your Password</label> <br />
                    <input style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your Password' name="" id="" />


                    <label style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>Enter your Password</label> <br />
                    <input style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your Password' name="" id="" />


                    <label style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>Enter your Password</label> <br />
                    <input style={{ width: "100%", display: "flex", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your Password' name="" id="" />


                    <div className='d-flex justify-content-center'>
                        <button style={{
                            marginTop: "15px",
                            height: "40px",
                            textAlign: "center",
                            width: "240px",
                            borderRadius: "0px 40px 40px 40px",
                            color: "rgba(255, 255, 255, 1)",
                            border: "none",
                            background: " rgba(227, 6, 19, 1)",
                        }}>Sign Up</button>
                    </div>



                </div>


            </div>













        </>
    )
}
export default SignUp