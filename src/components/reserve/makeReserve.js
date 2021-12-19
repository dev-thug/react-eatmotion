import React from 'react';
import './bootstrap.css'
import ReserveDatePicker from "./DatePicker";
import StoreOverView from "./StoreOverView";

function MakeReserve() {
    return (
        <>
            <form>
                <StoreOverView/>
                <div className="form-group">
                    <label className="form-label mt-4">예약자 이름</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">예약자 연락처</label>
                    <input type="tel" className="form-control" placeholder="01099998888"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label mt-4">예약 인원수</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">예약 일정</label>
                    <ReserveDatePicker className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">요청 사항</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                              placeholder="요청사항이 있으시면 작성해주세요"/>
                </div>
                <div>
                    <label className="form-label mt-4"></label>
                </div>
                <button className="btn btn-outline-primary">예약하기</button>
            </form>
        </>
    );
}

export default MakeReserve;