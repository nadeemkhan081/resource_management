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
  width: "calc(100% / 2)",
  height: "160px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const MyLayout = ({ rows, columns }) => {
  const gridItems = [];

  // Generating the grid items for the form of table (As per requirement)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridNumber = i * columns + j + 1;
      gridItems.push(
        <Grid key={gridNumber} item xs={12 / columns} style={gridItemStyle}>
          <Icon style={topLeftIconStyle}>
            <Person2 />
          </Icon>
          <GroupAddOutlined style={centerIconStyle} />
        </Grid>
      );
    }
  }

  const containerWidth = `${columns * (100 / 6)}%`;

  return (
    <div
      style={{
        overflowX: "auto",
        overflowY: "auto",
        height: "90vh",
        width: "100%",
      }}
    >
      <div style={{ width: containerWidth }}>
        <Grid
          container
          spacing={0}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {gridItems}
        </Grid>
      </div>
    </div>
  );
};

export default MyLayout;

