import {
  AppBar,
  Avatar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { format } from "date-fns";
import { drawerWith } from "./SideBar";
import MarioIcon from "../../assets/images/mario-av.png";

function Appbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography className={classes.date}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
        <Typography>Mario</Typography>
        <Avatar className={classes.avatar} src={MarioIcon} />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: `calc(100% - ${drawerWith}px)`,
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    margin:
      theme.direction === "ltr"
        ? `0 0 0 ${theme.spacing(1)}px`
        : `0 ${theme.spacing(1)}px 0 0`,
  },
}));
