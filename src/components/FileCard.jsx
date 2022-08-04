import React from "react";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
// import { BsFileEarmarkPdf, BsThreeDotsVertical } from "react-icons/bs";

export const FileCard = ({ data }) => {
  // React.useEffect(() => {
  //   const options = {
  //     method: "POST",
  //     url: "https://savefiles.org/api/v1/auth/login",
  //     data: {
  //       email: "vinay.kumar@technogetic.com",
  //       password: "oneness@123",
  //       token_name: "iphone 12",
  //     },
  //   };

  //   axios.request(options).then((data) => {
  //     console.log(data);
  //   });
  // }, []);
  // const { name, file_size } = data;
  return (
    <div className="cardSection">
      <img src={`https://savefiles.org/${data.url}`} />
      {/* <Card className="cardBox " style={{ width: "18rem" }}>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <BsThreeDotsVertical className="cardOptions" onClick={() => {}} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href=""
              onClick={() => {
                console.log("clicked");
              }}
            >
              Share
            </Dropdown.Item>
            <Dropdown.Item href="#"> Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Card.Body className="cardBody">
          <Card.Title>
            <BsFileEarmarkPdf
              file_size={30}
              className="fileIcon shadow  bg-white rounded"
            />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text className="fileName text-center">{name}</Card.Text>
        </Card.Body>
        <div className="fileSizeWrapper">
          <div className="fileSize">File-Size </div>
          <div className="fileSize">{file_size} KB</div>
        </div>
      </Card> */}
    </div>
  );
};
