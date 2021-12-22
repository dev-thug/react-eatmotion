import React, {useContext, useEffect, useRef, useState} from 'react';
import { ko } from "date-fns/esm/locale";
import ShopDetail from "./ShopDetail";
import "react-datepicker/dist/react-datepicker.css"
import AuthContext from "../../store/auth-context";
import DatePicker from "react-datepicker";
import classes from './ReserveForm.module.css';
import {useHistory} from "react-router-dom";

const NewReserve = ({match}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedShop, setLoadedShop] = useState("");
    const history = useHistory();
    
    
    // 음식점 조회 시작 부분
    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/shop/${match.params.id}`,
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


    const [startDate, setStartDate] = useState();
    const [people, setPeople] = useState(1);


    const selectHandler = (e) =>{
        setPeople(e.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()


        const reserve = {
            reserveDateTime: startDate,
            reserveNumberOfPeople: people
        }

        console.log(reserve)
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
                history.replace("/reserve")
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
            <form className={classes.formEntire} onSubmit={submitHandler}>
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
                    <select className={classes.input} id="exampleSelect1" onChange={selectHandler}>
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
                    <DatePicker
                        className={classes.input}
                        locale={ko}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        minDate={new Date()}
                        timeCaption="time"
                        dateFormat="Pp"
                    />
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