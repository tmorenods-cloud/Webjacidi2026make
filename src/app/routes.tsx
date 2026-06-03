import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { NosotrosPage } from "./components/NosotrosPage";
import { ProyectosPage } from "./pages/ProyectosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "nosotros", Component: NosotrosPage },
      { path: "proyectos", Component: ProyectosPage },
    ],
  },
]);
