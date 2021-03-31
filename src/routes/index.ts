import { Routes } from "./types";
import Notes from "../app/containers/Notes";
import Create from "../app/containers/Create";

const routes: Routes[] = [
  {
    component: Notes,
    path: "/",
    exact: true,
    name: "Notes",
    isMenu: true,
  },
  {
    component: Create,
    path: "/create",
    exact: true,
    name: "Create",
    isMenu: true,
  },
];

export default routes;
