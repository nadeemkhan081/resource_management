import React from "react";
import { Grid, Icon } from "@mui/material";
import { Person2, GroupAddOutlined } from "@mui/icons-material";

const centerIconStyle = {
  color: "#cbcbd9",
  fontSize: 48,
};

const topLeftIconStyle = {
  position: "absolute",
  top: 0,
  left: 0,
};

const gridItemStyle = {
  border: "1px solid #000",
  padding: 16,
  boxSizing: "border-box",
  minWidth:'100px',
  // width: "calc(100% / 6)",
  height: "calc(100% / 3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const MyLayout = ({ rows, columns }) => {
  const gridItems = [];

  // Generate the grid items for the table layout
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridNumber = i * columns + j + 1;
      gridItems.push(
        <Grid key={gridNumber} item xs={12 / columns} style={gridItemStyle}>
          <Icon style={topLeftIconStyle}><Person2 /></Icon>
          <GroupAddOutlined style={centerIconStyle} />
        </Grid>
      );
    }
  }

  return (
    <Grid
      container
      spacing={0}
      style={{ display: "flex", flexDirection: "row", height: "70vh", minWidth: '170px' }}
    >
      {gridItems}
    </Grid>
  );
};

export default MyLayout;




