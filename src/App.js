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
import Shoplist from "./components/shop/Shoplist";
import Shopinfo from "./components/shop/Shopinfo";


function App() {
    const authCtx = useContext(AuthContext);

    return (
        <Layout>
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
                    <PostWriteForm/>
                </Route>
                <Route path="/Shoplist">
                    <Shoplist/>
                </Route>
                <Route path="/Shopinfo">
                    <Shopinfo/>
                </Route>
                <Route path="/Search">
                    <Search/>
                </Route>
                <Route path="*">
                    <Redirect to="/"/>
                    </Route>

            </Switch>
        </Layout>
    );
}

export default App;
