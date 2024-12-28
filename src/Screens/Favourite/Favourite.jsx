import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/layout/Footer';
import StarIcon from '@mui/icons-material/Star';
import { removeWish } from '../../redux/wishSystem';

const Favourite = () => {

    const dispatch = useDispatch()
    const wishlistItems = useSelector((state) => state.wishlists.wishlistItems);

    const removeFav = (item)=>{
   dispatch(removeWish(item))
     }
    

    return (
        <>
            <Header />
            <p className='text-center fs-1' style={{ fontFamily: "Inter" }}>
                Favourite List Items 
            </p>

            <section>
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} className="container py-5">
                    {wishlistItems.length > 0 ? (
                        wishlistItems.map((item) => (
                            <div className="card" key={item.id}>
                                <img
                                    style={{ width: "190px", margin: "auto", marginTop: "3px" }}
                                    src={item.Img}
                                    className="card-img-top"
                                    alt="Wishlist Item"
                                />
                                <div style={{ fontSize: "20px", fontWeight: '500', margin: "10px" }}>
                                    {item.description}
                                </div>
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    margin: "10px", height: "20px"
                                }}>
                                    <p className="small">{item.tittle}</p>
                                    <p className="small text-danger">
                                        <StarIcon /> {item.point}
                                    </p>
                                </div>
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    margin: "10px", height: "20px"
                                }}>
                                    <p>Price: {item.price}</p>
                                    <p className="small text-danger">
                                        {item.timer}
                                    </p>
                                </div>
                                <button  onClick={()=>removeFav(item)}
                                    style={{
                                        height: "40px", width: "200px", border: "2px solid red",
                                        background: "red", color: "white", borderRadius: "10px",
                                        textAlign: "center", margin: "auto", marginBottom: "10px",
                                    }}
                                >
                                   Remove to favorite
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No items in the wishlist.</p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Favourite;
