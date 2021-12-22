import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import classes from "./PostList.module.css"
import { thead, tbody } from "../../variables/generals";

const PostList = (props) => {
  return (
    <div>
      {/* <ul>
                {props.content.map(post =>
                    <PostItem
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    writer={post.writer}
                    date={post.modifiedDate}
                />
                )}

            </ul> */}
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">문의 사항</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {props.content.map((post, key) => {
                      return (
                          
                        <tr key={key}>
                          <PostItem
                            key={key}
                            post={post}
                          />
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PostList;
