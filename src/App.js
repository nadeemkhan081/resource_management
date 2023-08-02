import React from "react";
import MyLayout from "./MyLayout";

const App = () => {
  const rowCount = 9; // Change this value to render the desired number of rows
  const columnCount = 15; // Change this value to render the desired number of columns
  return (
    <MyLayout rows={rowCount} columns={columnCount} />
  );
};

export default App;
