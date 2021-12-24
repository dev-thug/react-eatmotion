import {Link} from "react-router-dom";
import classes from './ReserveList.module.css';

const ReserveItem = (props) => {

    const path = "/review/"+props.shopId
    const shopInfo = "/shop-info/"+props.shopId;
    return (
        <div className={classes.listDiv}>
            <p className={classes.shopName}>{props.shopName} </p>
            <p>평점 : {Math.round(props.shopGrade)}</p>
            <p>예약 번호 : {props.id}</p>
            <p>예약 인원 : {props.reserveNumberOfPeople}</p>
            <p>예약 일정 : {props.reserveDateTime}</p>

            <p>음식점 분류 : {props.shopPart}</p>
            <Link to={shopInfo}><button className={classes.btn}>음식점 상세보기 & 리뷰 작성</button></Link>

            <br/>

        </div>
    )
}

export default ReserveItem;