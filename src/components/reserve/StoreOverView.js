import React from 'react';

function StoreOverView() {
    return (
        <div className="card mb-3">
            <h3 className="card-header">와시리</h3>
            <div className="card-body">
                {/* 이미지 크기 줄여야 함*/}
                <img src="../../img/shopinfo1.jpg" alt="shopinfo"/>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">왕십리 어딘가</li>
                <li className="list-group-item">02-123-4567</li>
                <li className="list-group-item">어쩌고저쩌고</li>
            </ul>
        </div>
    );
}

export default StoreOverView;