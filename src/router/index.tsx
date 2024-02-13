import { Fragment } from "react";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../pages/home";
import { Demo } from "../pages/demo";
import { Header } from "../components/header";
import { Providers } from "../providers/providers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        // errorElement={<ErrorBoundary />}
        element={
          <Providers>
            <Header />
            <Outlet />
          </Providers>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Fragment>
  )
);
