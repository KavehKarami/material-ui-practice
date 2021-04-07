import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { format } from "date-fns";
import { drawerWith } from "./SideBar";

function Appbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography className={classes.date}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
        <Typography>Kaveh</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;

const useStyles = makeStyles({
  root: {
    width: `calc(100% - ${drawerWith}px)`,
  },
  date: {
    flexGrow: 1,
  },
});
