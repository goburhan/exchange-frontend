import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled, { ThemeConsumer } from "styled-components";
import "../App.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

 const StyledCell = styled.div`
@media (max-width: 1000px) {
    display:none;
}
`;

export default function BasicTable() {


  return (
    <Container>
      <TableContainer
        style={{
          backgroundImage:
            "linear-gradient(106.44deg, #000000 23%, #09210C 113.13%)",
          width: "45vw",
          border: "1px solid transparent",
          borderRadius: "25px",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <img src="images/Btc.svg" />
              </TableCell>
              <TableCell style={{ color: "#fff" , marginTop:"36px" }}>Bitcoin</TableCell>
          
              <TableCell style={{ color: "#75FF14"   }} align="right">
             BTC
           </TableCell> 
              
              <TableCell style={{ color: "#fff" }} align="right">
                $56,290,30
              </TableCell>
              <TableCell style={{ color: "#0DBB7C" }} align="right">
                +1.68
              </TableCell>
              <TableCell align="right">
                <img src="images/Graph1.svg" />
              </TableCell>

              <TableCell id="hidden" align="right">
                <img src="images/Buy.svg" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <img src="images/Btc.svg" />
              </TableCell>
              <TableCell style={{ color: "#fff" }}>Bitcoin</TableCell>
              <TableCell style={{ color: "#75FF14" }} align="right">
                BTC
              </TableCell>
              <TableCell style={{ color: "#fff" }} align="right">
                $56,290,30
              </TableCell>
              <TableCell style={{ color: "#0DBB7C" }} align="right">
                +1.68
              </TableCell>
              <TableCell align="right">
                <img src="images/Graph1.svg" />
              </TableCell>

              <TableCell align="right">
                <img src="images/Buy.svg" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src="images/Btc.svg" />
              </TableCell>
              <TableCell style={{ color: "#fff" }}>Bitcoin</TableCell>
              <TableCell style={{ color: "#75FF14" }} align="right">
                BTC
              </TableCell>
              <TableCell style={{ color: "#fff" }} align="right">
                $56,290,30
              </TableCell>
              <TableCell style={{ color: "#0DBB7C" }} align="right">
                +1.68
              </TableCell>
              <TableCell align="right">
                <img src="images/Graph1.svg" />
              </TableCell>

              <TableCell align="right">
                <img src="images/Buy.svg" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src="images/Btc.svg" />
              </TableCell>
              <TableCell style={{ color: "#fff" }}>Bitcoin</TableCell>
              <TableCell style={{ color: "#75FF14" }} align="right">
                BTC
              </TableCell>
              <TableCell style={{ color: "#fff" }} align="right">
                $56,290,30
              </TableCell>
              <TableCell style={{ color: "#0DBB7C" }} align="right">
                +1.68
              </TableCell>
              <TableCell align="right">
                <img src="images/Graph1.svg" />
              </TableCell>

              <TableCell align="right">
                <img src="images/Buy.svg" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
