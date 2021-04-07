import { Routes } from "./types";
import Notes from "../app/containers/Notes";
import Create from "../app/containers/Create";
import SubjectIcon from "@material-ui/icons/Subject";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const routes: Routes[] = [
  {
    component: Notes,
    path: "/",
    exact: true,
    name: "My Notes",
    isMenu: true,
    icon: SubjectIcon,
  },
  {
    component: Create,
    path: "/create",
    exact: true,
    name: "Create Note",
    isMenu: true,
    icon: AddCircleOutlineIcon,
  },
];

export default routes;
