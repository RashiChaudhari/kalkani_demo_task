import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import image from "../src/image/img1.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import List from "./List";
function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [response, setResponse] = useState([]);
  const getData = (e) => {
    fetch(`https://api.jikan.moe/v4/characters`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSearchText(e.target.value);
        let result = e.target.value;
        let namedata = res.data?.map((item) => item.name);
        let h = namedata.find(result);
      });
  };
  return (
    <>
      {" "}
      <div
        className="App"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1>Search Anime Characters</h1>

        <TextField
          style={{ width: "50%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={getData}
        ></TextField>
        <h2>
          Total {data?.pagination?.items?.total || 0} matching anime characters
          founds
        </h2>
        <Button
          variant="contained"
          style={{ marginLeft: "30px", borderRadius: "20px" }}
          onClick={getData}
        >
          Search
        </Button>
        <hr
          style={{
            background: "black",
            height: "5px",
            border: "none",
            marginTop: "20%",
          }}
        />
        <List search={searchText} data={data} />
      </div>
    </>
  );
}

export default App;
