import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import FullLayout from "../layouts/FullLayout";
import Home from "../components/Home/Home";
import Not_Found from "../components/Not_Found/Not_Found";
import Projects from "../components/Projects/Projects";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<FullLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<Not_Found />} />
    </>
  ),
  {
    basename: '/Portfolio',
  }
);

export default routes;