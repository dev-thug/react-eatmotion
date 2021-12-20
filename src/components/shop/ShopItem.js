function ShopItem(props) {

    return (

        <div>
            <p>{props.id}</p>
            <strong>{props.name}</strong>
            <p>{props.address}</p>
        </div>
    )
}


export default ShopItem;