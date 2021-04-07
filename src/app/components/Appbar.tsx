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
import { useContext } from "react";
import DirectionContext from "../../Contexts/DirectionContext";
import { Dir } from "../layout/Direction/types";

function Appbar() {
  const { dir } = useContext(DirectionContext);
  const classes = useStyles({ dir });

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
    margin: ({ dir }: { dir: Dir }) =>
      dir === "ltr"
        ? `0 0 0 ${theme.spacing(1)}px`
        : `0 ${theme.spacing(1)}px 0 0`,
  },
}));
