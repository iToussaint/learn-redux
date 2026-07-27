import { createBrowserRouter } from "react-router";
import { CounterPage } from "../features/counter";

const Router = createBrowserRouter([
  { path: "counter", element: <CounterPage /> },
]);

export default Router;
