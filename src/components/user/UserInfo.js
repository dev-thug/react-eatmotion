// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// 회원정보 info.id, info.name, info.email
// <ul>
//     <h1>회원 정보</h1>
//     <li>{props.info.id}</li>
//     <li>{props.info.name}</li>
//     <li>{props.info.email}</li>
// </ul>

const UserInfo = (props) => {
  return (
    <div className="content" style={{ width: "30%", margin: "10% auto" }}>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <Row>
                <Col md="12">
                  <h5 className="title" style={{ textAlign: "center" }}>
                    회원 정보
                  </h5>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="1"></Col>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>E-mail</label>
                      <Input
                        defaultValue={props.info.email}
                        disabled
                        type="text"
                        style={{ backgroundColor: "white" , fontWeight: "bold" , color:"black"}}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="1"></Col>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>이름 :</label>
                      <Input
                        defaultValue={props.info.name}
                        disabled
                        type="text"
                        style={{ backgroundColor: "white" , fontWeight: "bold" , color:"black"}}
                      />
                      <br></br>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserInfo;

// <div className="content">
//         <Row>
//           <Col md="8">
//             <Card>
//               <CardHeader>
//                 <h5 className="title">Edit Profile</h5>
//               </CardHeader>
//               <CardBody>
//                 <Form>
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <FormGroup>
//                         <label>Company (disabled)</label>
//                         <Input
//                           defaultValue="Creative Code Inc."
//                           disabled
//                           placeholder="Company"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="px-1" md="3">
//                       <FormGroup>
//                         <label>Username</label>
//                         <Input
//                           defaultValue="michael23"
//                           placeholder="Username"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <FormGroup>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Input placeholder="Email" type="email" />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <FormGroup>
//                         <label>First Name</label>
//                         <Input
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="pl-1" md="6">
//                       <FormGroup>
//                         <label>Last Name</label>
//                         <Input
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <FormGroup>
//                         <label>Address</label>
//                         <Input
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="4">
//                       <FormGroup>
//                         <label>City</label>
//                         <Input
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="px-1" md="4">
//                       <FormGroup>
//                         <label>Country</label>
//                         <Input
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <FormGroup>
//                         <label>Postal Code</label>
//                         <Input placeholder="ZIP Code" type="number" />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <FormGroup>
//                         <label>About Me</label>
//                         <Input
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                             that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           type="textarea"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                 </Form>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="4">
//             <Card className="card-user">
//               <div className="image">
//                 {/* <img alt="..." src={require("./src/assets/img/bg5.jpg").default} /> */}
//               </div>
//               <CardBody>
//                 <div className="author">
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     {/* <img
//                       alt="..."
//                       className="avatar border-gray"
//                       src={require("../../src/assets/img/mike.jpg").default}
//                     /> */}
//                     <h5 className="title">Mike Andrew</h5>
//                   </a>
//                   <p className="description">michael24</p>
//                 </div>
//                 <p className="description text-center">
//                   "Lamborghini Mercy <br />
//                   Your chick she so thirsty <br />
//                   I'm in that two seat Lambo"
//                 </p>
//               </CardBody>
//               <hr />
//               <div className="button-container">
//                 <Button
//                   className="btn-neutral btn-icon btn-round"
//                   color="default"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   size="lg"
//                 >
//                   <i className="fab fa-facebook-f" />
//                 </Button>
//                 <Button
//                   className="btn-neutral btn-icon btn-round"
//                   color="default"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   size="lg"
//                 >
//                   <i className="fab fa-twitter" />
//                 </Button>
//                 <Button
//                   className="btn-neutral btn-icon btn-round"
//                   color="default"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   size="lg"
//                 >
//                   <i className="fab fa-google-plus-g" />
//                 </Button>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
