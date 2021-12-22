import React from 'react';

const ShopDetail = (props) => {
    return (
        <div className="card mb-3" key={props.data.id}>
            <h3 className="card-header">{props.data.name}</h3>
            <div className="card-body">
                {/* 이미지 크기 줄여야 함*/}
                {/*<img src="" alt="shopinfo"/>*/}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.data.address}</li>
                <li className="list-group-item">{props.data.foodClassific}</li>
            </ul>
        </div>
    );
}

export default ShopDetail;