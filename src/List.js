import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import heart from "../src/image/heart.png";
import TableHead from "@mui/material/TableHead";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GetCharacter from "./GetCharacter";
import IconButton from "@mui/material/IconButton";
const List = (props) => {
  const [data1, setData1] = useState([]);
  const getData = () => {
    fetch(
      "https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorit"
    )
      .then((res) => res.json())
      .then((res) => {
        setData1(res);
      });
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          {props?.search?.length ? (
            <TableBody>
              {props.data.data?.map((row) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <Avatar src={`${row.images.webp.small_image_url}`} />
                  </StyledTableCell>

                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Avatar src={`${heart}`} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.favorites}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton>
                      <Link to={`/characters/${row.mal_id}`}>
                        <ArrowForwardIcon />
                      </Link>
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              {data1?.data?.map((row) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <Avatar src={`${row.images.webp.small_image_url}`} />
                  </StyledTableCell>

                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Avatar src={`${heart}`} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.favorites}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton>
                      <Link to={`/characters/${row.mal_id}`}>
                        <ArrowForwardIcon />
                      </Link>
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
