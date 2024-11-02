
import fabiconPic from'../../assest/Image/fabian-centeno-Snce5c3YjgI-unsplash 1.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AboutImage from '../../assest/Image/aboutPageImage.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PeopleImg1 from '../../assest/Image/girl1.png';
import PeopleImg2 from '../../assest/Image/girl2.png';
import Header from '../../../src/Components/Header/Header'
import Footer from '../../../src/Components/layout/Footer'
const About = () => {
  return (
    <>
    <Header/>
      {/* ........main Container...... */}
    
    <section>
        <div style={{width: "100%",
}}>
          <img src={AboutImage} height="100%" width="100%" alt="" />  
        </div>
    </section>
       
      {/* ........Cermonay Contant ...... */}
      <section>
        <div className='mt-4 text-center text-secondary'>
          <h2 className="poppins-thin" style={{ color: "blue", textAlign: 'center' }}>What is an <span style={{ color: "red" }}>Ascension Ceremony?</span></h2>
          <p className="poppins-thin">Lorem ipsum dolor sit amet consectetur. Metus etiam augue aliquet amet mattis quam <br /> arcu et enim. Lobortis sapien pharetra at consectetur nibh pellentesque arcu massa. <br /> Urna scelerisque mauris mattis lectus at massa duis. Sit turpis arcu dignissim orci diam.</p>
        </div>
      </section>

      {/* ........video Contant ...... */}

      <section>
        <div className='d-flex justify-content-evenly flex-wrap mt-5'>
        <div className='backgroundPic1' style={{
    margin:"10px",
            height: "180px",
            width: "270px",
            borderRadius: "14px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}>
           <img style={{borderRadius:"15px"}} src={PeopleImg1} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"120px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>
         
          <div className='backgroundPic1' style={{
    margin:"10px",
            height: "180px",
            width: "270px",
            borderRadius: "14px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}>
           <img style={{borderRadius:"15px"}} src={PeopleImg2} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"120px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>

          <div className='backgroundPic1' style={{
    margin:"10px",
            height: "180px",
            width: "270px",
            borderRadius: "14px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}>
           <img style={{borderRadius:"15px"}} src={PeopleImg1} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"120px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>

        </div>

      </section>


      {/* ......lorem Contant..... */}
      <section>
        <div style={{
          display:"flex",
          justifyContent:"center",
          flexWrap:"wrap",
          marginBottom:"80px",
          marginTop:'35px',
          gap:"5px",
        }}>
<div style={
{
 display:'flex',
 justifyContent:'center',
  width:"746px",
}
}> <img src={ fabiconPic} height= "100%"  width="100%" alt="" className='w-75' /></div>

<div style={
{
  
  width:"746px",
}
}>


<div  style={{marginTop:"50px",height:"30px"}}> <p className='poppins-thin' style={{
fontSize:" 16px",
fontWeight: "400",
lineHeight:" 27px",
textAlign:" left",
marginLeft:"8px",
color: "rgba(227, 6, 19, 1)",
}}>LOREM ISPUM DOLOR SIT AMET</p></div>



<div  style={{height:"60px",color:"rgba(54, 64, 91, 1)",marginLeft:"8px",}}><h3 className='poppins-thin' >Lorem ipsum dolor sit amet</h3></div>

<div className='text-secondary'> <p style={{marginLeft:"8px",}} className="poppins-thin">Lorem ipsum dolor sit amet consectetur. Metus etiam augue aliquet amet mattis quam  arcu et enim. Lobortis sapien pharetra at consectetur nibh pellentesque arcu massa. <br />sectetur adipisicing elit. Nisi iusto ipsum possimus dolor non ut, reiciendis iure consequuntur! A quam dignissimos laboriosam adipisicing elit. Nisi iusto ipsum possimus dolor non ut, reiciendis iure consequuntur! A quam dignissimos laboriosam eligendi optio! Quae nisi dolor sunt odio modi.</p></div>
<div style={{color:"rgba(54, 64, 91, 1)",marginLeft:"8px",}}><p className="poppins-thin" style={{
  color:"rgba(54, 64, 91, 1)",
fontSize: "20px",
fontWeight: "400",
lineHeight: "26px",
textAlign: "left",

}}><CheckCircleIcon className='text-success'/>  Follow our SAC process</p></div>
<div style={{ marginTop:"5px",marginLeft:"8px",}}>
  <button
  style={{
    color:"white",
    border:"1px solid rgba(227, 6, 19, 1)",
padding: '16px 32px 16px 32px',
gap: "10px",
borderRadius: "0px 30px 30px 30px",
opacity: "0px",
background: "rgba(227, 6, 19, 1)"


  }}>find out more</button>
</div>
</div>

</div>
       
      </section>

    <Footer/>
    </>
  )
}

export default About