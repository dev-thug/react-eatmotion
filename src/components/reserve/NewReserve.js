import React, {useContext, useEffect, useRef, useState} from 'react';
import ReserveDatePicker from "./DatePicker";
import ShopDetail from "./ShopDetail";
import classes from './ReserveForm.module.css'
import AuthContext from "../../store/auth-context";

const NewReserve = ({match}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedShop, setLoadedShop] = useState("");

    
    
    // 음식점 조회 시작 부분
    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/reserve/${match.params.id}`,
            {
                
            }
            )
            .then(response => {
                return response.json();
            })
            .then(data => {

                setIsLoading(false);
                setLoadedShop(data);
                console.log(loadedShop)
            })
    }, []);

    
    // 예약 핸들러 시작부분
    const authCtx = useContext(AuthContext);

    const timeInputRef = useRef();
    const peopleInputRef = useRef();

    const submitHandler = () => {
        const enteredTime = timeInputRef.current.value;
        const enteredPeople = peopleInputRef.current.value;

        const reserve = {
            title: enteredTime,
            content: enteredPeople
        }

        fetch(`/api/reserve/${match.params.id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authToken": authCtx.token
                },
                body : JSON.stringify(reserve)


            }
        )
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log(data)
            })
    }

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div className={classes.divEntire}>
            <form className={classes.formEntire}>
                <ShopDetail data={loadedShop}/>
                <div className={classes.divGroup}>
                    <label className="form-label mt-4">예약자 이름</label>
                    <input type="text" className={classes.input} placeholder="성함을 작성해주세요"/>
                </div>
                <div className={classes.divGroup}>
                    <label className="form-label mt-4">예약자 연락처</label>
                    <input type="tel" className={classes.input} placeholder="숫자만 입력해주세요"/>
                </div>
                <div className={classes.divGroup}>
                    <label htmlFor="exampleSelect1" className="form-label mt-4">예약 인원수</label>
                    <br/>
                    <select className={classes.input} id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className={classes.divGroup}>
                    <label className="form-label mt-4">예약 일정</label>
                    <br/>
                    <label className={classes.smallLabel}> 클릭하여 예약일정을 선택해주세요</label>
                    <ReserveDatePicker className={classes.input}/>
                </div>
                <div className={classes.divGroup}>
                    <label className="form-label mt-4">요청 사항</label>
                    <textarea className={classes.input} id="exampleFormControlTextarea1" rows="3"
                              placeholder="요청사항이 있으시면 작성해주세요"/>
                </div>
                <button className={classes.btn}>예약하기</button>
            </form>
        </div>
    );
}

export default NewReserve;