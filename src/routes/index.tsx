import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRouter from "../flows/home/router";
import DetailRouter from "../flows/detail/router";

const appRoutes = [HomeRouter, DetailRouter];

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ Page, path }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
