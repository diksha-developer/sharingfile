import axios from "axios";
const FormData = require("form-data");
import React, { Component } from "react";
import { useState } from "react";

const App = ({ files, setFiles }) => {
  const [state, setState] = useState({ selectedFile: null });
  const onFileChange = (event) => {
    setState({ selectedFile: event.target.files[0] });
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", state.selectedFile);
    const options = {
      method: "POST",
      url: "https://savefiles.org/api/v1/uploads",
      headers: {
        Authorization: "Bearer wOKoVpHgqdetvMDrg3NHUXOUr3ObzXOmGG2zD6Sl",
      },
      data: formData,
    };

    axios.request(options).then((data) => {
      console.log(data);
      setFiles([...files, state.selectedFile]);
    });
  };
  const fileData = () => {
    if (state.selectedFile) {
      return (
        <div className="fileMetaData">
          <h2>File Details:</h2>

          <p>File Name: {state.selectedFile.name}</p>

          <p>File Type: {state.selectedFile.type}</p>

          <p>
            Last Modified: {state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h5 className="uploadFileHeading">
            Choose before Pressing the Upload button
          </h5>
        </div>
      );
    }
  };
  return (
    <div>
      <div className="mainDiv">
        <div className="FileUploadDiv">
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>
        </div>
      </div>
      {fileData()}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: null,
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };
//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append("file", this.state.selectedFile);
//     // Details of the uploaded file
//     console.log(formData);
//     // Request made to the backend api
//     // Send formData object
//     const options = {
//       method: "POST",
//       url: "https://savefiles.org/api/v1/uploads",
//       headers: {
//         Authorization: "Bearer wOKoVpHgqdetvMDrg3NHUXOUr3ObzXOmGG2zD6Sl",
//       },
//       data: formData,
//     };

//     axios.request(options).then((data) => {
//       console.log(data);
//     });
//   };
//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>

//           <p>File Name: {this.state.selectedFile.name}</p>

//           <p>File Type: {this.state.selectedFile.type}</p>

//           <p>
//             Last Modified:{" "}
//             {this.state.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>GeeksforGeeks</h1>
//         <h3>File Upload using React!</h3>
//         <div>
//           <input type="file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }
