import React from 'react';
import ReserveDatePicker from "./DatePicker";
import StoreOverView from "./StoreOverView";
import classes from './ReserveForm.module.css'

function MakeReserve() {
    return (
        <div className={classes.divEntire}>
            <form className={classes.formEntire}>
                <StoreOverView/>
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

export default MakeReserve;