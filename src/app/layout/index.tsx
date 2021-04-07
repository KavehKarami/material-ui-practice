import { makeStyles } from "@material-ui/core";

function Layout({ children }: { children: JSX.Element }) {
  const classes = useStyles();

  return (
    <div>
      {/* App Bar */}

      {/* Side Drawer */}

      <div className={classes.pages}>{children}</div>
    </div>
  );
}

export default Layout;

const useStyles = makeStyles({
  pages: {
    // backgroundColor: "#f9f9f9",
    marginTop: 15,
  },
});
