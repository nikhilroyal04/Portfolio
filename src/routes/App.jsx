import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes"; 

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
