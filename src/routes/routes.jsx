import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import FullLayout from "../layouts/FullLayout";
import Home from "../components/Home/Home";
import Not_Found from "../components/Not_Found/Not_Found";
import Projects from "../components/Projects/Projects";
import Data from "../components/Data/Data";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<FullLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/personal-data01" element={<Data />} />
      </Route>
      <Route path="*" element={<Not_Found />} />
    </>
  ),
);

export default routes;