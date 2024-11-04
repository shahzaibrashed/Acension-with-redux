import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
  return (
    <div>
      <>

        <div>

          <footer
            className="text-center text-lg-start text-white"
            style={{
              background: "#2B3C58"
            }}
          >

            <div className="container p-4 pb-0">

              <section className="">

                <div className="row">

                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <p className=" mb-4 ts-3">
                      Top learning experience that create more talent in the world .
                    </p>

                  </div>

                  <hr className="w-100 clearfix d-md-none" />

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-secondary mb-4 ">Products</h6>
                    <p>
                      <a className="text-white text-decoration-none">Overview</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Feauters</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Solutions</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Totorial</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Pricing</a>
                    </p>

                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-secondary mb-4 ">Company</h6>
                    <p>
                      <a className="text-white text-decoration-none">About Us</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Carres</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Press</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">News</a>
                    </p>


                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-secondary mb-4 ">Social</h6>
                    <p>
                      <a className="text-white text-decoration-none">Twitter</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Github</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">LinkedIn</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Dribble</a>
                    </p>


                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-secondary mb-4 ">Legal</h6>
                    <p>
                      <a className="text-white text-decoration-none">Terms</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">privacy</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Cookies</a>
                    </p>
                    <p>
                      <a className=" text-decoration-none text-white">Contact</a>
                    </p>


                  </div>



                </div>

              </section>

            </div>


            <div
              style={{
                height: '50px', display: 'flex', justifyContent: "space-around", flexWrap: 'wrap', background: "rgba(43, 60, 88, 1)"
                }}
            >
              <div className='text-secondary '>@2024, All rights reserved</div>
              <div className='d-flex gap-3'>

                <div><TwitterIcon style={{ color: 'gray' }} /></div>
                <div><LinkedInIcon style={{ color: 'gray' }} /></div>
                <div><FacebookIcon style={{ color: 'gray' }} /></div>
                <div><GitHubIcon style={{ color: 'gray' }} /></div>
                <div><LanguageIcon style={{ color: 'gray' }} /></div>


              </div>
            </div>

          </footer>

        </div>

      </>

    </div>
  )
}

export default Footer