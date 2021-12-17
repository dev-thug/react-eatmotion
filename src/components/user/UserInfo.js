
const UserInfo = (props) => {

    return (
        <ul>
            <h1>회원 정보</h1>
            <li>{props.info.id}</li>
            <li>{props.info.name}</li>
            <li>{props.info.email}</li>
        </ul>
    )


}

export default UserInfo;