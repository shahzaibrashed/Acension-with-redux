import './Login.css';
import Logo from '../../assest/Image/FFF_Ascension_LO 1.png'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className="body-background">

                <div className='d-flex justify-content-center '>
                    <img style={{ marginTop: "5%" }} src={Logo} alt="" />
                </div>

                <div style={{
                    width: "350px", margin: "auto", marginTop: "10px", borderRadius: "10px",
                    background: " rgba(43, 60, 88, 1)",
                    padding: "20px"
                }}>

                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                        <p style={{
                            fontSize: "16px", marginTop: "10px", color: "gray",
                        }} className='poppins-thin'>Welcome to <span style={{
                            color: "rgba(255, 255, 255, 1)",
                        }}>Ascension</span></p>
                        <p style={{ fontSize: "12px", marginTop: "10px", color: "gray" }} className='poppins-thin'>No Account? <br /> Sing Up</p>
                    </div>

                    <h3 className='poppins-thin' style={{ fontSize: "30px", color: "rgba(255, 255, 255, 1)" }}>Sign in</h3>

                    <div className='poppins-thin '>
                        <label style={{ fontSize: "12px", marginTop: "10px", color: "gray", }}>Enter your username or email address</label>
                        <input style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your username or email address' name="" id="" />
                    </div>
                    <div className='poppins-thin '>
                        <label style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>Enter your Password</label>
                        <input style={{ width: "100%", padding: "10px", borderRadius: "10px", outline: "none", border: "none", marginTop: "5px" }} type="email" placeholder='Enter your Password' name="" id="" />
                    </div>
                    <p style={{ marginTop: "5px", marginLeft: "186px", fontSize: "15px", color: "gray" }}>Forget Password ?</p>
                    <div className='d-flex justify-content-center'>
                        <button style={{
                            height: "40px",
                            textAlign: "center",
                            width: "240px",
                            borderRadius: "0px 40px 40px 40px",
                            color: "rgba(255, 255, 255, 1)",
                            border: "none",
                            background: " rgba(227, 6, 19, 1)",
                            marginBottom: "40px"
                        }}> <Link style={{textDecoration:"none",   color: "rgba(255, 255, 255, 1)",}} to="/SignUp">Sign Up</Link> </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login