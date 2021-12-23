import {Link} from "react-router-dom";
import classes from './ReserveList.module.css';

const ReserveItem = (props) => {

    const path = "/review/"+props.shopId
    return (
        <div className={classes.listDiv}>
            <p className={classes.shopName}>{props.shopName} </p>
            <p>평점 : {props.shopGrade}</p>
            <p>예약 번호 : {props.id}</p>
            <p>예약 인원 : {props.reserveNumberOfPeople}</p>
            <p>예약 일정 : {props.reserveDateTime}</p>

            <p>음식점 분류 : {props.shopPart}</p>
            <Link to={path}><button className={classes.btn}>예약 상세보기</button></Link>
            <Link to={path}><button className={classes.btn}>리뷰 작성</button></Link>
            <br/>

        </div>
    )
}

export default ReserveItem;