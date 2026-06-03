import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { NosotrosPage } from "./components/NosotrosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "nosotros", Component: NosotrosPage },
    ],
  },
]);
