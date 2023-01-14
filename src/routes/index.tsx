import { FC } from "react";
import { Routes, Route, MemoryRouter } from "react-router-dom";

import HomeRouter from "../flows/home/router";
import DetailRouter from "../flows/detail/router";

const appRoutes = [HomeRouter, DetailRouter];

const AppRoutes: FC = () => {
  return (
    <MemoryRouter>
      <Routes>
        {appRoutes.map(({ Page, path }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoutes;
