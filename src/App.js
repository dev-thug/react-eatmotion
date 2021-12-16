import Layout from "./components/layout/Layout";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";

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
            </Switch>
        </Layout>
    );
}

export default App;
