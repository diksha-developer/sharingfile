const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");

const data = new FormData();
data.append("file", fs.createReadStream("/PATH/TO/Screenshot (2).png"));

const options = {
  method: "POST",
  url: "https://savefiles.org/api/v1/uploads",
  headers: {
    Authorization: "Bearer",
    "X-RapidAPI-Key": "wOKoVpHgqdetvMDrg3NHUXOUr3ObzXOmGG2zD6Sl",
    "X-RapidAPI-Host": "storage5.p.rapidapi.com",
    ...data.getHeaders(),
  },
  data: data,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
