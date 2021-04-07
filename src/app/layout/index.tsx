import { createStyles, makeStyles, Theme } from "@material-ui/core";
import SideBar from "../components/SideBar";

function Layout({ children }: { children: JSX.Element }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* App Bar */}

      {/* Side Drawer */}
      <SideBar />

      <div className={classes.pages}>{children}</div>
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
      paddingTop: theme.spacing(3),
      width: "100%",
      marginTop: 15,
    },
  })
);
