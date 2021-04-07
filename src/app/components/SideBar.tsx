import { Drawer, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SideBar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
    >
      <div>
        <Typography variant="h5">Kavehhhhh</Typography>
      </div>
    </Drawer>
  );
}

export default SideBar;

const drawerWith = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWith,
  },
  drawerPaper: {
    width: drawerWith,
  },
});
