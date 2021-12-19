import React, {useState} from 'react';
import './bootstrap.css'
import ReserveDatePicker from "./DatePicker";

function MakeReserve() {
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                <div className="form-group form-label mt-4">
                    <label>예약 날짜 및 시간</label>
                    <ReserveDatePicker className="form-control"></ReserveDatePicker>
                </div>
            </form>
        </>
    );
}

export default MakeReserve;