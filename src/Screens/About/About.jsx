import './About.css';
import PeopleImage from '../../assest/Image/people.jpg'
import RectangleImg from '../../assest/Image/rectengleImg.jpg'
import RectangleImg2 from '../../assest/Image/rectangleImg2.png'
import VectorOnePng from '../../assest/Image/Vector.png'
import VectorTwoPng from '../../assest/Image/Frame.png'
import VectorThreePng from '../../assest/Image/Vector2.png'
import VectorFourPng from '../../assest/Image/Frame2.png'
import Header from '../../../src/Components/Header/Header'
import Footer from '../../../src/Components/layout/Footer'
const About = () => {
  return (
   <>
<Header/>
{/* ........main Container...... */} 
<section>
<div className='back-people-Image' > 
  <img src={PeopleImage} width="100%"  alt="" />
</div>
</section>

{/* .........contant...... */}
<section>
  <div className='container'>
<p style={{
  fontFamily: "Poppin",
  fontSize: "70.33px",
  fontWeight:" 700",
  textAlign:'center'
}}>About Us</p>

<div style={{display:'flex',justifyContent:"center"}} >
<p style={{
  fontFamily: "Poppins",
  fontSize: "20.08px",
  fontWeight: "400",
  textAlign:"center"
}}>From preschool to pre-tertiary,   our students enjoy fun, <br /> interactive and relevant lessons and are empowered  <br />  to think beyond the confines of the classroom <br /> rom preschool </p>
</div>

<div style={{display:'flex',justifyContent:"center"}}>
<button style={{height:"50px",width:"160px",borderRadius:"20px", outline:"none",background: "rgba(227, 6, 19, 1)",color:"white", border:"none"}}>See more</button>
 </div>
  </div>
</section>

{/* ......Box Area...... */}
<section>
<div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",}}  className='container mt-5'>

<div style={{
  width:"500px",
  marginTop:"5px",
}}>
<p style={{
  fontFamily: "Poppins",
  fontSize: "30.13px",
  fontWeight: "600",
  textAlign: "left",
  color: "rgba(0, 0, 0, 1)",
}}>Lorem ipsum dolor sit amet   
<span style={{textDecoration:"underline red"}}>  consectetur  .</span> </p>

<p style={{
  fontFamily: "Lato",
  fontSize: "20.07px",
  fontWeight: "400",
  lineHeight: "30.08px",
  textAlign: "left",
  marginTop:"4px",
  color:" rgba(132, 131, 131, 1)",
}}>Lorem ipsum dolor sit amet consectetur. Pharetra in leo sem ipsum congue a quis neque ornare. Ullamcorper sem in ac id elementum odio aliquam quis condimentum. Diam elementum cras in blandit nibh massa mauris. Sodales.</p>

<button style={
  {float:"left",
    marginBottom:"15px"
  }
} className='boxButton'>View more</button>
</div>



<div className='shapMain'>
<img className='leftTopImage' src={VectorOnePng}alt="" />
<img className='RightTopImage' src={VectorTwoPng}alt="" />
<img className='RightBottomImage ' src={VectorThreePng}alt="" />
<img className='CenterImage' src={RectangleImg}  alt="" />
</div>
</div>
</section>


{/* ......Box Area two...... */}
<section style={{marginBottom:"50px"}}>
<div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",}}  className='container mt-5'>


<div className='shapMain'>
<img className='leftTopImage' src={VectorFourPng}alt="" />
<img className='RightTopImage' src={VectorTwoPng}alt="" />
<img className='RightBottomImage ' src={VectorThreePng}alt="" />
<img className='CenterImage' src={RectangleImg2}  alt="" />
</div>

<div style={{
  width:"500px",
  marginTop:"5px",
}}>
<p style={{
  fontFamily: "Poppins",
  fontSize: "30.13px",
  fontWeight: "600",
  textAlign: "right",
  color: "rgba(0, 0, 0, 1)",
}}>Lorem ipsum dolor sit amet consectetur. Te<span style={{textDecoration:"underline red"}}>llus arcu integer.</span> </p>
{/* <div style={{ float:"right", width:"50%", borderBottom:"3px solid red",}}></div> */}


<p style={{
  float:"left",
  fontFamily: "Lato",
  fontSize: "20.07px",
  fontWeight: "400",
  lineHeight: "30.08px",
  textAlign: "right",
  marginTop:"4px",
  color:" rgba(132, 131, 131, 1)",
}}>Lorem ipsum dolor sit amet consectetur. Pharetra in leo sem ipsum congue a quis neque ornare. Ullamcorper sem in ac id elementum odio aliquam quis condimentum. Diam elementum cras in blandit nibh massa mauris. Sodales.</p>

<button className='boxButton'>View more</button>
</div>


</div>
</section>
<Footer/>
   </>
  )
}

export default About