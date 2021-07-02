import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  line: {
    width: "100%",
  },
  p:{
    [theme.breakpoints.down("sm")]: {
      display:"block"
    }
  }
}));

function TableData({ val }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <tr style={{background:"#f5f5f5"}}>
        <th scope="row">Dummy</th>
        <td>Dummy</td>
        <td>Dummy</td>
        <td>Dummy</td>
        <td>Dummy</td>
      </tr>
    </React.Fragment>
  );
}

export default TableData;