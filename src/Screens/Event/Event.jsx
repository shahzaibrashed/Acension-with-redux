import './Event.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PeopleImg1 from '../../assest/Image/girl1.png'
import PeopleImg2 from '../../assest/Image/girl2.png'
import Header from '../../../src/Components/Header/Header'
import Footer from '../../../src/Components/layout/Footer'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Event = () => {


  return (
    <>
<Header/>

    <div style={{background: "rgba(43, 60, 88, 1)",}}>
    <div style={{ display:"flex",flexWrap:"wrap",paddingTop:"10px",}} className='container '>


<div className='videoBox'>
          <div className='backgroundPic3' style={{
             margin:"10px",
             height: "150px",
             width: "260px",
            borderRadius: "15px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
           border: "5.72px solid rgba(255, 255, 255, 1)"
          }}>
            <img style={{borderRadius:"15px"}} src={PeopleImg1} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"100px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>
          <div className='backgroundPic3' style={{
    margin:"10px",
            height: "150px",
            width: "260px",
            borderRadius: "14px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}>
           <img style={{borderRadius:"15px"}} src={PeopleImg2} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"100px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>
          <div className='backgroundPic4' style={{
             margin:"10px",
             height: "150px",
             width: "260px",
            borderRadius: "14px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}>
            <img style={{borderRadius:"15px"}} src={PeopleImg1} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"100px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>
          <div className='backgroundPic4' style={{
            margin:"10px",
            height: "150px",
            width: "260px",
            borderRadius: "14px",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}>
           <img style={{borderRadius:"15px"}} src={PeopleImg2} height="100%" width="100%" alt="" />
            <div style={{position:"relative",bottom:"100px", height: "40px", width: "40px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>
       
</div>




<div className='videoBox2' style={{
    width:"1000px",
}}>

<div className='backgroundPic5'>
            <img style={{borderRadius:"15px"}} src={PeopleImg1} height="100%" width="100%" alt="" />
             <div style={{position:"relative",bottom:"360px", height: "50px", width: "50px", borderRadius: "50px",margin:"auto",background:"white"  }}>
              <div style={{padding:"5px",color:"red"}}><PlayArrowIcon style={{fontSize:"40px"}}/></div>
            </div>
          </div>
</div>



    </div>
    </div>

    <Footer/>
    </>
  )
}
export default Event;