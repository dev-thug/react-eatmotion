import Layout from "./components/layout/Layout";
import {Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Main from "./pages/Main";
import Register from "./components/auth/Register";
import PostWriteForm from "./components/board/PostWriteForm";

function App() {
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
                <Route path="/post-write">
                    <PostWriteForm/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
