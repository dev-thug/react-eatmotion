import {useContext, useEffect, useState} from "react";
import AuthContext from "../../store/auth-context";
import ReserveList from "../../components/reserve/ReserveList";

const Reserve = () => {
    const authCtx = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedReserves, setLoadedReserves] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        fetch("/api/reserves",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authToken": authCtx.token
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {

                setIsLoading(false);
                setLoadedReserves(data);
                console.log(loadedReserves)
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
        <div>
            <ReserveList reserves={loadedReserves}/>
        </div>
    )
}

export default Reserve;