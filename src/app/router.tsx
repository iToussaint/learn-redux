import { createBrowserRouter } from "react-router";
import { CounterPage } from "../features/counter";
import { ProductsPage } from "../features/products";

const Router = createBrowserRouter([
  { path: "counter", element: <CounterPage /> }, { path: "products", element: <ProductsPage /> },
]);

export default Router;
