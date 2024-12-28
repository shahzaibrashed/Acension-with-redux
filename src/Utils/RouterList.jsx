import Login from "../Screens/Login/Login"
import About from "../Screens/About/About"
import Home from "../Screens/Home/Home"
import Home2 from '../Screens/Home2/Home2'
import SignUp from "../Screens/SignUp/SignUp"
import Shop from "../Screens/Shop/Shop"
import Contact from "../Screens/Contact/Contact"
import Event from "../Screens/Event/Event"
import GuardianDashboard from "../Screens/GuardianDashboard/GuardianDashboard"
import CartItems from "../Screens/Cart/CartItems"
import Favourite from "../Screens/Favourite/Favourite"
export const RouterList = [

    {
        path: "/",
        element: <Home />
    }, {
        path: "/Home",
        element: <Home2 />
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/SignUp",
        element: <SignUp />
    },
    {
        path: "/Shop",
        element: <Shop />
    },
    {
        path: "/Contact",
        element: <Contact />
    },
    {
        path: "/Event",
        element: <Event />
    },
    {
        path: "/GuardianDashboard",
        element: <GuardianDashboard />
    },
    {
        path: "/carts",
        element: <CartItems/>
    },{
        path: "/Favourite",
        element: <Favourite/>
    },
    
]
