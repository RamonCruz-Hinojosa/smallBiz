import * as React from "react";
import { useEffect, useState } from "react";
import { Businesses } from "./fakeBusiness";

function App() {
  const [biz, setBiz] = useState(Businesses);
  return <div>{console.log(Businesses[0].name)}</div>;
}

export default App;
