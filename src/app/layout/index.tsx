import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Appbar from "../components/Appbar";
import SideBar from "../components/SideBar";

function Layout({ children }: { children: JSX.Element }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <SideBar />
      <div className={classes.pages}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    pages: {
      // backgroundColor: "#f9f9f9",
      paddingTop: theme.spacing(2),
      width: "100%",
      marginTop: 15,
    },
    toolbar: theme.mixins.toolbar,
  })
);
