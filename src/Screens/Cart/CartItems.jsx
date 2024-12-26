import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/layout/Footer'
import { RemoveProduct } from '../../redux/cartSystem'
import { useDispatch, useSelector } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import SnoozeIcon from '@mui/icons-material/Snooze';

const CartItems = () => {

    const { cart } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log(cart, "cart");

    const handleRemovetocart = (item) => {
        dispatch(RemoveProduct(item))
    }

    return (
        <>
            <Header />
            <p className='text-center fs-1' style={{ fontFamily: " Inter", }}>All Add to Cart Items</p>

            {
                cart.length === 0 ? <p className='text-center'>No Add to Carts Items</p> :
                    <section>
                        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} className="container py-5">
                            {cart.map((item) => {
                                return (
                                    <div className="card">
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
                                                {item.ratio}
                                            </p>
                                            <p className="small text-danger">
                                                <p><SnoozeIcon /> {item.timer}</p>
                                            </p>
                                        </div>
                                        <p style={{ marginLeft: "7px" }}>Quantity {item.quantity}</p>
                                        <button onClick={() => handleRemovetocart(item)
                                        } style={{
                                            height: "40px", width: "200px", border: "2px solid red", background: "red", color: "white", borderRadius: "10px", textAlign: "center", margin: "auto", marginBottom: "10px",
                                        }}>Remove to Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
            }

            <Footer />
        </>
    )
}
export default CartItems