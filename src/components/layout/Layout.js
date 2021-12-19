import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import UserInterface from "./UserInterface";


const Layout = (props) => {
    return (
        <div>
            <UserInterface/>
            <MainNavigation/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;