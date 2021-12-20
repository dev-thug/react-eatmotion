import Layout from "./components/layout/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Main from "./pages/Main";
import Register from "./components/auth/Register";
import Me from "./pages/user/Me";
import {useContext} from "react";
import AuthContext from "./store/auth-context";
import Board from "./pages/board/Board";
import PostWriteForm from "./components/board/PostWriteForm";
import ShopList from "./components/shop/ShopList";
import ShopSearch from "./components/search/ShopSearch";
import Shop from "./pages/shop/Shop";
import NewPost from "./pages/board/NewPost";
import PostItem from "./components/board/PostItem";
import Post from "./pages/board/Post";
import MakeReserve from "./components/reserve/makeReserve";



function App() {
    const authCtx = useContext(AuthContext);

    return (        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/me">
                    {authCtx.isLoggedIn && (<Me/>)}
                    {!authCtx.isLoggedIn && (<Redirect to="/login"/>)}
                </Route>
                <Route path="/board">
                    <Board/>
                </Route>
                <Route path="/post-write">
                    <NewPost/>
                </Route>
                <Route path="/shop">
                    <Shop/>
                </Route>
                <Route path="/post/:id" component={Post}>

                </Route>
                {/*<Route path="/reserve-make">*/}
                {/*    <MakeReserve />*/}
                {/*</Route>*/}
                {/*<Route path="/reserve-list">*/}

                {/*</Route>*/}
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
