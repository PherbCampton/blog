import { Fragment } from "react";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../pages/home";
import { Demo } from "../pages/demo";
import { Contact } from "../pages/contact";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
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
            <Footer />
          </Providers>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Fragment>
  )
);
