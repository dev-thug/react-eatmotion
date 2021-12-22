import { Link } from "react-router-dom";
import classes from "./PostItem.module.css";

import { thead, tbody } from "../../variables/generals";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
const PostItem = (props) => {
  const post = props.post;
  const detail = "/post/" + post.id;
  return (
    <>
      <td><Link to={detail} style={{color:"black"}}>{post.id}</Link></td>
      <td><Link to={detail} style={{color:"black"}}>{post.title}</Link></td>
      <td><Link to={detail} style={{color:"black"}}>{post.writer}</Link></td>
      <td style={{ textAlign: "right" }}>
      <Link to={detail} style={{color:"black"}}>{post.modifiedDate.substring(0, 10)}</Link>
      </td>
    </>
  );
};

export default PostItem;
{
  /* <h3>{props.title}</h3>
            <p>작성자 : {props.writer}</p>
            <br/>
            <Link to={detail}>상세 조회</Link>
            <br/> */
}

{
  /* <td key={key}>{post.id}</td>
<td key={key}>{post.title}</td>
<td key={key}>{post.writer}</td>
<td key={key} style={{ textAlign: "right" }}>
{post.modifiedDate.substring(0, 10)}
</td> */
}
