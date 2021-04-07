import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router";
import routes from "../../routes";

function SideBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
    >
      <div>
        <Typography className={classes.title} variant="h5">
          Kaveh Notes
        </Typography>
      </div>

      <List>
        {routes.map(
          (route) =>
            route.isMenu && (
              <ListItem
                key={route.path}
                onClick={() => history.push(route.path)}
                className={
                  location.pathname === route.path ? classes.active : undefined
                }
                button
              >
                <ListItemIcon>{<route.icon color="secondary" />}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            )
        )}
      </List>
    </Drawer>
  );
}

export default SideBar;

export const drawerWith = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWith,
    },
    drawerPaper: {
      width: drawerWith,
    },
    navLink: {
      backgroundColor: "#fff",
      display: "block",
      textDecoration: "none",

      "&:hover, &:focus": {
        backgroundColor: "transparent",
      },
    },
    active: {
      backgroundColor: "#f4f4f4 !important",
    },
    title: {
      padding: theme.spacing(2),
    },
  })
);
