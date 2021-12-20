function ShopItem(props) {

    return (

        <div>
            {/* <p>{props.id}</p> */}
            <strong>{props.name}</strong>
            <p>{props.address}</p>
            <a href="/reserve-make">예약하기(임시용)&nbsp;&nbsp;&nbsp;</a>
        </div>
    )
}


export default ShopItem;