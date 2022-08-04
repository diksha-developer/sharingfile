import React from "react";
import { FileCard } from "../FileCard";
import "../home/style.css";
import ImageFileUpload from "../ImageFIleUpload";
import axios from "axios";

const fileData = [];

const Home = () => {
  const getFromSaveFilesOrg = async () => {
    const option = {
      method: "GET",
      url: "https://savefiles.org/api/v1/entries",
      headers: {
        Authorization: "Bearer wOKoVpHgqdetvMDrg3NHUXOUr3ObzXOmGG2zD6Sl",
      },
    };
    console.log("checking");
    const data = await axios.request(option);
    const filesData = data.data.data;
    setFiles(filesData);
    console.log(data);
  };

  React.useEffect(() => {
    getFromSaveFilesOrg();
  }, []);

  const [files, setFiles] = React.useState([]);
  return (
    <div id="contentSection">
      <ImageFileUpload files={files} setFiles={setFiles} />
      <div className="heading">{/* <FiFolder size={20} /> Files */}</div>
      <div className="mainWrapper">
        {files.map((data, index) => (
          <FileCard key={index} data={data} />
        ))}
        {/* <FileCard data={files} /> */}
      </div>
    </div>
  );
};

export default Home;
