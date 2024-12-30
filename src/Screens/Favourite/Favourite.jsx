import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/layout/Footer';
import { removeWish } from '../../redux/wishSystem';
import { AddCart } from '../../redux/cartSystem';
import { Box } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const Favourite = () => {

    const dispatch = useDispatch()

    const wishlistItems = useSelector((state) => state.wishlists.wishlistItems);

    const handleAddtocart = (item) => {
        dispatch(AddCart({ ...item }));
    };

    const removeFav = (item) => {
        dispatch(removeWish(item))
    }


    return (
        <>
            <Header />
            <p className='text-center fs-1' style={{ fontFamily: "Inter", marginTop: "30px" }}>
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
                                    <p className="text-warning">
                                       {item.point}
                                    </p>
                                </div>
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    margin: "10px", height: "20px"
                                }}>
                                    <p>{item.price}</p>
                                    <Box sx={{ cursor: "pointer", marginLeft: "9px" }}>

                                        <Favorite
                                            onClick={() => removeFav(item)}
                                            style={{ color: "red" }}
                                        />

                                    </Box>
                                </div>
                                <button
                                    onClick={() => handleAddtocart(item)}
                                    style={{
                                        height: "40px", width: "200px", border: "2px solid red",
                                        background: "red", color: "white", borderRadius: "10px",
                                        textAlign: "center", margin: "auto", marginBottom: "10px",
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No items in the Favorite list.</p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Favourite;
