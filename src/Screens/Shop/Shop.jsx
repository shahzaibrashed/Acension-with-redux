import './Shop.css';
import ImgOne from '../../assest/Image/watchImg.png';
import ImgTwo from '../../assest/Image/Rectangle 26.png';
import ImgThree from '../../assest/Image/Rectangle 26 (1).png';
import ImgFour from '../../assest/Image/Rectangle 26 (2).png';
import ImgFive from '../../assest/Image/Rectangle 26 (3).png';
import ImgSix from '../../assest/Image/Rectangle 26 (4).png';
import ImgSeven from '../../assest/Image/Rectangle 26 (5).png';
import ImgEight from '../../assest/Image/Rectangle 26 (6).png';
import Header from '../../../src/Components/Header/Header';
import Footer from '../../../src/Components/layout/Footer';
import { useDispatch } from 'react-redux';
import { AddCart } from '../../redux/cartSystem';
import { Box } from '@mui/material';
import { Favorite } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';
import { addWish } from "../../redux/wishSystem";

const Shop = () => {


  const cards = [
    {
      id: 0,
      Img: ImgOne,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
      timer: "20 min"

    },
    {
      id: 1,
      Img: ImgTwo,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    },
    {
      id: 2,
      Img: ImgThree,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    },
    {
      id: 3,
      Img: ImgFour,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    }, {
      id: 4,
      Img: ImgFive,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    }, {
      id: 5,
      Img: ImgSix,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    }, {
      id: 6,
      Img: ImgSeven,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    },
    {
      id: 7,
      Img: ImgEight,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    }, {
      id: 8,
      Img: ImgFive,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    }, {
      id: 9,
      Img: ImgSix,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    }, {
      id: 10,
      Img: ImgSeven,
      description: "Lorem ipsum dolor sit amet consectetur.",
      tittle: "watch",
      point: "4.20",
      price: "30$",
    },
  ];

  const dispatch = useDispatch();


  const handleAddtocart = (item) => {
    dispatch(AddCart({ ...item }));
  };



  const addFav = (item) => {
    dispatch(addWish(item));
  };



  return (
    <>
      <Header />
      <p className='text-center fs-1' style={{ fontFamily: " Inter", }}>All Product Cards </p>

      <div style={{ background: "rgba(245, 237, 218, 1)" }}>
        {/* ..........  Card Section......... */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} className="container py-5">
            {cards.map((item) => (
              <div className="card" key={item.id}>
                <img style={{ width: "190px", margin: "auto", marginTop: "3px" }}
                  src={item.Img}
                  className="card-img-top"
                  alt="Laptop"
                />
                <div style={{ fontSize: "20px", fontWeight: '500', margin: "10px" }}>{item.description}</div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "10px", height: "20px" }}>
                  <p className="small">
                    {item.tittle}
                  </p>
                  <p className="small text-danger">
                    <p><StarIcon />{item.point}</p>
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "10px", height: "20px" }}>
                  <p className="small">
                    {item.price}
                  </p>
                  <Box sx={{ cursor: "pointer", marginLeft: "9px" }}>
                    <Favorite className='text-primary'
                      onClick={() => addFav(item)}
                    />
                  </Box>
                </div>
                <button onClick={() => handleAddtocart(item)} style={{
                  height: "40px", width: "200px", border: "2px solid red", background: "red", color: "white", borderRadius: "10px", textAlign: "center", margin: "auto", marginBottom: "10px",
                }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Shop;


