import PostItem from "../board/PostItem";
import ReserveItem from "./ReserveItem";

const ReserveList = (props) => {

    console.log(props.reserves)
    return (
        <div>
            {props.reserves.map(reserve => <ReserveItem
                key={reserve.id}
                id={reserve.id}
                reserveNumberOfPeople={reserve.reserveNumberOfPeople}
                reserveDateTime={reserve.reserveDateTime}
                shopId={reserve.shop.id}
                shopName={reserve.shop.name}
                shopGrade={reserve.shop.grade}
                shopPart={reserve.shop.foodClassific}
                userId={reserve.user.id}
            />)}
        </div>
    )
}

export default ReserveList;