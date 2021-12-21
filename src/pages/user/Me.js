import {useContext, useEffect, useState} from "react";
import AuthContext from "../../store/auth-context";
import UserInfo from "../../components/user/UserInfo";
import classes from "./Me.module.css"


const Me = () => {
    const authCtx = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMe, setLoadedMe] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetch("/api/me",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authToken": authCtx.token
                }
            }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            const me = {
                id: data.id,
                email: data.email,
                name: data.name
            }
            setIsLoading(false);
            setLoadedMe(me)

        })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
         <div className={classes.me}>
             <UserInfo info={loadedMe}></UserInfo>
         </div>
    )
}

export default Me;