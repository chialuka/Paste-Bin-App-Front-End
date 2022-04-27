// import React, { useState } from "react";
import React from "react";
import axios from "axios";

export default function App(): JSX.Element {
  // const [pastes, setPastes] = useState([])

  function handleSubmit() {
    console.log("would send text");
    //gather detail of new entry
    const newEntry = {
      title: "How to be a jellyFish",
      summary: "We have not figured out our play by play",
    };
    //send an HTTP post request to our API server with new entry
    const url = "http://localhost:4000/pastes";
    axios
      .post(url, newEntry)
      .then(function (response) {
        console.log("axios got the response: ", response);
      })
      .catch(function (error) {
        console.log("axios got error:", error);
      });
  }

  function handleAllSubmits() {
    //axios.get will make a fetch to the given url + make a get http request
    axios
      .get("http://localhost:4000/pastes")
      .then((response) => {
        console.log("getting all entries: ", response.data);
        const receivedPastes = response.data;
        console.log(receivedPastes);
        // setPastes(receivedPastes)
      })
      .catch((err) => console.error("error when getting entries", err));
  }

  return (
    <div className="App">
      <h1>Pastebin App</h1>
      <button onClick={handleSubmit}>Submit text</button>
      <button onClick={handleAllSubmits}>View list of all submits</button>
      {/* {pastes.map(item => item.title_text)} */}
    </div>
  );
}
