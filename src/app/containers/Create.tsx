import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

function Create() {
  const classes = useStyles({ size: "22px" });
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
    </Container>
  );
}

export default Create;

/* --------------------------------- Styles --------------------------------- */

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: ({ size }: { size: string }) => size,
    },
    btn: {
      backgroundColor: "red",

      "& .MuiButton-endIcon > svg": {
        fontSize: 22,
      },
    },
  })
);
