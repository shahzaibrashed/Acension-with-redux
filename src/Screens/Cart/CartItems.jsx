import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { DecrementQuantity, IncrementQuantity, RemoveProduct } from "../../redux/cartSystem";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/layout/Footer";
import CancelIcon from '@mui/icons-material/Cancel';
import './CartItems.css';
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const { cart } = useSelector((state) => state.cartsItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBuyClick = (item) => {
        navigate(`/order/${item.id}`, { state: { product: item } });
    };

    const handleRemovetocart = (item) => {
        dispatch(RemoveProduct(item));
    };

    const handleIncrement = (item) => {
        dispatch(IncrementQuantity({ id: item.id }));
    };

    const handleDecrement = (item) => {
        dispatch(DecrementQuantity({ id: item.id }));
    };

    return (
        <>
            <Header />

            <div className="container mt-5">
                <h1 className="text-center mb-4" style={{ fontFamily: 'Inter' }}>
                    All Add to Cart Items
                </h1>

                {cart.length === 0 ? (
                    <p className="text-center">No Add to Cart Items</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered align-middle">
                            <thead className="table-light">
                                <tr className="text-center">
                                    <th>Action</th>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Point</th>
                                    <th>Cancel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td className="text-center">
                                            <Button className="w-100 bg-danger border-danger "
                                                onClick={() => handleBuyClick(item)}
                                            >
                                        CheckOut
                                            </Button>
                                        </td>
                                        <td className="text-center">
                                            <img
                                                src={item.Img}
                                                alt={item.tittle}
                                                className="img-fluid rounded"
                                                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <strong>{item.tittle}</strong>
                                            <br />
                                            <small className="text-muted">{item.description}</small>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center align-items-center gap-2">
                                            <button
                                                    style={{
                                                        width: '27px',
                                                        height: '27px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'green',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                        fontSize: '20px',
                                                        border: "none",
                                                        paddingBottom: "5px"
                                                    }}
                                                    onClick={() => handleIncrement(item)}
                                                >
                                                    +
                                                </button>
                                                <div> {item.quantity}</div>
                                                <button
                                                    style={{
                                                        width: '27px',
                                                        height: '27px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'red',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                        fontSize: '20px',
                                                        border: "none",
                                                        paddingBottom: "5px"
                                                    }}
                                                    onClick={() => handleDecrement(item)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </td>
                                        <td className="text-center">${item.price * item.quantity}</td>
                                        <td className="text-center text-warning">{item.point}</td>
                                        <td className="text-center">
                                            <CancelIcon
                                                onClick={() => handleRemovetocart(item)}
                                                sx={{ color: "red", cursor: "pointer" }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default ShoppingCart;
