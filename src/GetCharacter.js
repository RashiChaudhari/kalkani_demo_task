import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";

const GetCharacter = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`https://api.jikan.moe/v4/characters/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Table style={{ marginTop: "10%", width: "50%", marginLeft: "25%" }}>
        <TableHead>
          <TableRow style={{ backgroundColor: "grey" }}>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Picture</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Favorites</TableCell>
            <TableCell align="center">About</TableCell>
            <TableCell align="center">Nick Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{data.mal_id}</TableCell>
            <TableCell align="center">
              <Avatar src={`${data.images.webp.small_image_url}`} />
            </TableCell>
            <TableCell align="center">{data.name}</TableCell>
            <TableCell align="center">{data.favorites}</TableCell>
            <TableCell align="center">{data.about}</TableCell>
            <TableCell align="center">
              {data?.nicknames?.length ? data?.nicknames : "no nicknames"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default GetCharacter;
