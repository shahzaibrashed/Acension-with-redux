import './Shop.css';
import FlowerThree from '../../assest/Image/FlowerThree.png'
import FlowerTwo from '../../assest/Image/flowerTwo.png'
import FlowerOne from '../../assest/Image/flowerOne.png'
import ImgOne from '../../assest/Image/watchImg.png'
import ImgTwo from '../../assest/Image/Rectangle 26.png'
import ImgThree from '../../assest/Image/Rectangle 26 (1).png'
import ImgFour from '../../assest/Image/Rectangle 26 (2).png'
import ImgFive from '../../assest/Image/Rectangle 26 (3).png'
import ImgSix from '../../assest/Image/Rectangle 26 (4).png'
import ImgSeven from '../../assest/Image/Rectangle 26 (5).png'
import ImgEight from '../../assest/Image/Rectangle 26 (6).png'
import Header from '../../../src/Components/Header/Header'
import Footer from '../../../src/Components/layout/Footer'

import StarIcon from '@mui/icons-material/Star';
import SnoozeIcon from '@mui/icons-material/Snooze';
const Shop = () => {

 const  Cards = [
{
  Img : ImgOne,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},
{
  Img : ImgTwo ,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},
{
  Img : ImgThree ,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},
{
  Img : ImgFour ,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},{
  Img :ImgFive,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},{
  Img : ImgSix ,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},{
  Img : ImgSeven ,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},
{
  Img : ImgEight ,
  description :"Lorem ipsum dolor sit amet consectetur.",
  tittle :"watch",
  point:"4.20",
  ratio :"224.4",
  timer:"20 min"

},
 ]  
console.log(Cards.Img)

    return (
        <>
<Header/>

            <div style={{ background: "rgba(245, 237, 218, 1)" }}>

                {/* ........Section One...... */}
                <div className='container' style={{
                    display: "flex", justifyContent: "center", flexWrap: "wrap",
                }}>

                    <div style={{
                        width: "400px",
                        padding: "20px",
                        marginTop: "30px"
                    }}
                    >
                        <h2 className='poppins-thin'>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p className='poppins-thin' style={{
                            Color: "rgba(64, 64, 64, 1)", fontSize: "13px"
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className='flex-md-nowrap flex-wrap' style={{
                        display: "flex",
                        justifyContent: "space-around",
                        // flexWrap:"wrap",
                        alignItems: "center",
                        width: "45vw",
                        margin: "10px"
                    }}
                    >
                        <div style={{ margin: "5px", height: "270px", borderRadius: "20px" }}>
                            <img style={{ borderRadius: "20px" }} src={FlowerOne} height="100%" width="100%" alt="" />
                        </div>
                        <div style={{ margin: "5px", height: "230px", }}>
                            <img style={{ borderRadius: "20px" }} src={FlowerTwo} height="100%" width="100%" alt="" />
                        </div><div style={{ width: "170px", margin: "5px", height: "270px", borderRadius: "20px" }}>
                            <img style={{ borderRadius: "20px", objectFit: 'cover' }} src={FlowerThree} height="100%" width="100%" alt="" />
                        </div>




                    </div>

                </div>

   {/* ..........  Card Section.........            */}
<section>
  <div style={{ display:"flex", justifyContent : "space-around",flexWrap:"wrap"}} className="container py-5">
{Cards.map((e,i)=>{
return ( 
<div className="card">
<img style={{width:"190px",margin:"auto",marginTop:"3px"}}
            src={e.Img}
            className="card-img-top"
            alt="Laptop"
          />
 <div style={{fontSize:"20px",fontWeight:'500',margin:"10px"}}>{e.description}</div>
 <div style={{display:"flex",justifyContent:"space-between",margin:"10px",height:"20px"}}>
              <p className="small">
                  {e.tittle}
              </p>
              <p className="small text-danger">
                <p><StarIcon/>{e.point}</p>
              </p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",margin:"10px",height:"20px"}}>
              <p className="small">
                 {e.ratio}
              </p>
              <p className="small text-danger">
                <p><SnoozeIcon/> {e.timer}</p>
              </p>
            </div>
            <button style={{height:"40px",width:"200px",border:"2px solid red", background:"red",color:"white",borderRadius:"10px",textAlign:"center",margin:"auto",marginBottom:"10px",
            }}>Send</button>
</div>
)})} 




      </div>
  
</section>


            </div>
<Footer/>
        </>
    )
}
export default Shop