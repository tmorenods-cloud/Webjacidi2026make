import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
}
