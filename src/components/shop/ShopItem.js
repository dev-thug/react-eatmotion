function ShopItem(props) {

    return (


        <li>
            <a href="/shopinfo">
    <span>
    {/*<img src={props.src} alt="shopinfo.html"/>*/}
    <em>{props.name}</em>
    </span>
                <strong>{props.name}</strong>
            </a>
            <p>{props.date}</p></li>

    )
}

//
// const ShopItem = (props) => {
//     return (
//         <div>
//             <h1>ShopItem</h1>
//         </div>
//     )
// }

export default ShopItem;