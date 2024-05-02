import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import UnderConstruction from "./UnderConstruction";

const router: RouteObject[] = [
  { path: '/', Component: App },
  { path: '/under-construction', Component: UnderConstruction },
]

export default createBrowserRouter(router);