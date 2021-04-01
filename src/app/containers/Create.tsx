import { useContext } from "react";
import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DirectionContext from "../../Contexts/DirectionContext";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Dir } from "../layout/Direction/types";

function Create() {
  const { dir, setDir } = useContext(DirectionContext);
  const classes = useStyles({ size: "22px", dir });

  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        Create a New Note
      </Typography>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<NoteAddIcon fontSize="large" />}
        className={classes.btn}
      >
        Submit
      </Button>

      <Button
        onClick={() => {
          dir === "ltr" ? setDir("rtl") : setDir("ltr");
        }}
        color="primary"
        variant="contained"
      >
        Change Direction
      </Button>
    </Container>
  );
}

export default Create;

/* --------------------------------- Styles --------------------------------- */

interface StyleType {
  size: string | number;
  dir: Dir;
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: ({ size }: StyleType) => size,
    },
    btn: {
      backgroundColor: "red",
      margin: ({ dir }: StyleType) =>
        dir === "ltr" ? "0 5px 0 0" : "0 0 0 5px",

      "& .MuiButton-endIcon > svg": {
        fontSize: 22,
      },
    },
  })
);
