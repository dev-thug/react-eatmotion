import classes from "./PostDetail.module.css";
import { Row, Col } from "reactstrap";

const PostDetail = (props) => {
  return (
    <div className={classes.divEntire}>
      <form className={classes[`post-detail`]}>
        <Row>
          <Col md="12">
            <label className={classes.font} htmlFor="title">
            {props.title}
            </label>
          </Col>
          <div className={classes.line}></div>
        </Row>
        <Row>
          <Col md="3">
            <label className={classes.writer} >작성자: {props.writer}</label>
          </Col>
          <Col md="9">
          <label className={classes.writer} style={{float:"right"}}>작성일: {props.date}</label>
          </Col>
        </Row>
        <div>
          {/* <label className={classes.font} htmlFor="content">
            내용
          </label> */}
          {/* <br /> */}
          <label className={classes.content}>{props.content}</label>
        </div>
        <div>
          {/* <button className={classes.btn}>문의 하기</button> */}
        </div>
      </form>
    </div>
  );
};

export default PostDetail;
