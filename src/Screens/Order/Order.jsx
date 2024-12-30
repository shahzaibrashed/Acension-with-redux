import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/layout/Footer';
import './Order.css'
const Order = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { product } = location.state || {};

    return (
        <>
            <Header />
            <main className="py-5" style={{ backgroundColor: "rgba(245, 237, 218, 1)" }}>
                <div className="container">
                    <h3 className="text-center mb-5 text-dark">Checkout</h3>

                    <div className="row g-5">
                        {/* Checkout Form */}
                        <div className="col-md-6">
                            <section className="checkout-form p-4 rounded shadow-sm" style={{ backgroundColor: "#ffffff" }}>
                                <h5 className="mb-4 text-dark">Contact Information</h5>
                                <form action="#!" method="get">
                                    <div className="mb-3">
                                        <label htmlFor="checkout-email" className="form-label" style={{ color: "#6c757d" }}>E-mail</label>
                                        <input
                                            type="email"
                                            id="checkout-email"
                                            name="checkout-email"
                                            className="form-control"
                                            placeholder="Enter your email..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="checkout-phone" className="form-label" style={{ color: "#6c757d" }}>Phone</label>
                                        <input
                                            type="tel"
                                            name="checkout-phone"
                                            id="checkout-phone"
                                            className="form-control"
                                            placeholder="Enter your phone..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                        />
                                    </div>

                                    <h5 className="mt-4 mb-3 text-dark">Shipping Address</h5>
                                    <div className="mb-3">
                                        <label htmlFor="checkout-name" className="form-label" style={{ color: "#6c757d" }}>Full Name</label>
                                        <input
                                            type="text"
                                            id="checkout-name"
                                            name="checkout-name"
                                            className="form-control"
                                            placeholder="Enter your name..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="checkout-address" className="form-label" style={{ color: "#6c757d" }}>Address</label>
                                        <input
                                            type="text"
                                            name="checkout-address"
                                            id="checkout-address"
                                            className="form-control"
                                            placeholder="Your address..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="checkout-city" className="form-label" style={{ color: "#6c757d" }}>City</label>
                                        <input
                                            type="text"
                                            name="checkout-city"
                                            id="checkout-city"
                                            className="form-control"
                                            placeholder="Your city..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="checkout-country" className="form-label" style={{ color: "#6c757d" }}>Country</label>
                                        <input
                                            type="text"
                                            name="checkout-country"
                                            id="checkout-country"
                                            className="form-control"
                                            placeholder="Your country..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                            list="country-list"
                                        />
                                        <datalist id="country-list">
                                            <option value="India" />
                                            <option value="USA" />
                                            <option value="Russia" />
                                            <option value="Japan" />
                                            <option value="Egypt" />
                                        </datalist>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="checkout-postal" className="form-label" style={{ color: "#6c757d" }}>Postal Code</label>
                                        <input
                                            type="number"
                                            name="checkout-postal"
                                            id="checkout-postal"
                                            className="form-control"
                                            placeholder="Your postal code..."
                                            style={{
                                                borderColor: "#dee2e6",
                                                backgroundColor: "#ffffff",
                                            }}
                                        />
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            name="checkout-checkbox"
                                            id="checkout-checkbox"
                                            className="form-check-input"
                                        />
                                        <label htmlFor="checkout-checkbox" className="form-check-label" style={{ color: "#6c757d" }}>
                                            Save this information for next time
                                        </label>
                                    </div>
                                    <div className='d-flex gap-5'>
                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={() => navigate('/carts')}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={() => navigate('/shop')}
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>

                        {/* Checkout Details */}
                        <div className="col-md-6">
                            <section className="checkout-details p-4 rounded shadow-sm" style={{ backgroundColor: "#ffffff" }}>
                                <h5 className="mb-4 text-dark">Order Details</h5>
                                {product ? (
                                    <div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <img
                                                src={product.Img}
                                                alt={product.title}
                                                className="img-fluid"
                                                style={{
                                                    width: '200px',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                            <div className="ms-3">
                                                <p><strong>Product:</strong> {product.tittle}</p>
                                                <p><strong>Description:</strong> {product.description}</p>
                                                <p><strong>Price:</strong> ${product.price}</p>
                                                <p><strong>Quantity:</strong> {product.quantity}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mb-3">
                                            <h6><strong>Shipping:</strong></h6>
                                            <p className="text-muted">$19</p>
                                        </div>
                                        <hr />
                                        <div className="mb-4">
                                            <h6><strong>Total:</strong></h6>
                                            <p className="fs-4 text-dark">
                                                ${typeof product.price === 'number' && typeof product.quantity === 'number'
                                                    ? (product.price * product.quantity + 19)
                                                    : 'Invalid Price or Quantity'}
                                            </p>
                                            <hr />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center text-danger">
                                        <p>No product found</p>
                                    </div>
                                )}
                            </section>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Order;
