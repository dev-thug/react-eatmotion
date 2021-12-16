import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import UserInterface from "./UserInterface";
import "./Common.css"

const Layout = (props) => {
    return (
        <div class="_main">
            <UserInterface/>
            <MainNavigation/>
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;