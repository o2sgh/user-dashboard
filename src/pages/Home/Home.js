import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { errorMessage } from "../../components/SweetAlert";
import Cookies from "js-cookie";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import HttpRequest from "../../utils/hooks/HttpRequest";
import dateFormat from "dateformat";
const StyledTableHeader = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4F5477 !important",
    color: theme.palette.common.white,
    border: "none",
    fontSize: 16,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWieght: 700,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4D4D4D !important",
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

export default function Dashboard() {
  const { handleDashboardStat } = HttpRequest();
  const [dataArray, setDataArray] = useState();
  React.useEffect(() => {
    handleDashboardStat(handlApiResponse);
  }, []);
  const handlApiResponse = (data) => {
    setDataArray(data);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ p: 4 }}>
        <Grid item sx={12} sm={12} md={6} lg={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableHeader align="left" component="th" colSpan={3}>
                    User Statistics
                  </StyledTableHeader>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left" component="th">
                    Signup Time
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Number of Login
                  </StyledTableCell>
                  <StyledTableCell align="left">Last Session</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataArray?.users?.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="left">
                      {dateFormat(row?.createdAt, "fullDate")}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row?.totalNumberOfLogin}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {dateFormat(row?.lastLoginAt, "fullDate")}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item sx={12} sm={12} md={6} lg={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableHeader align="left" component="th" colSpan={3}>
                    User Statistics
                  </StyledTableHeader>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left" component="th">
                    Total User
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Total Active User
                  </StyledTableCell>
                  <StyledTableCell align="left">Average User</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="left">
                    {dataArray?.stats?.totalSignedUsers}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {dataArray?.stats?.usersWithActiveSessions}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {dataArray?.stats?.averageActiveSessionsWithinSevenDays}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
