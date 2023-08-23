import React from "react";
import MyLayout from "./MyLayout";

const App = () => {
  const rowCount = 40; // Change this value to render the desired number of rows
  const columnCount = 32; // Change this value to render the desired number of columns
  return (
    <MyLayout rows={rowCount} columns={columnCount} />
  );
};

export default App;