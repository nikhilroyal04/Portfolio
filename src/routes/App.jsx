import { RouterProvider, Routes, } from "react-router-dom";
import routes from "./routes"; 

const App = () => {
  return (
    <RouterProvider basename={process.env.PUBLIC_URL}>
      <Routes>
        {routes}
      </Routes>
    </RouterProvider>
  );
};

export default App;
