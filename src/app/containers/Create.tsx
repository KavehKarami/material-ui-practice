import { SyntheticEvent, useContext, useState } from "react";
import {
  Button,
  Container,
  createStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import DirectionContext from "../../Contexts/DirectionContext";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Dir } from "../layout/Direction/types";

function Create() {
  const { dir, setDir } = useContext(DirectionContext);
  const classes = useStyles({ size: "22px", dir });

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("work");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };

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
        onClick={() => {
          dir === "ltr" ? setDir("rtl") : setDir("ltr");
        }}
        color="secondary"
        variant="contained"
        endIcon={dir === "ltr" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
      >
        Change Direction
      </Button>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          classes={{ root: classes.field }}
          variant="outlined"
          label="Note Title"
          error={titleError}
          fullWidth
          required
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          classes={{ root: classes.field }}
          variant="outlined"
          label="Details"
          rows={4}
          rowsMax={8}
          error={detailsError}
          placeholder="Please Type Some Details ..."
          type="text"
          multiline
          fullWidth
          required
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={classes.radioGp}
          >
            <FormControlLabel label="Money" value="money" control={<Radio />} />
            <FormControlLabel label="Work" value="work" control={<Radio />} />
            <FormControlLabel label="Todos" value="todos" control={<Radio />} />
            <FormControlLabel
              label="Reminders"
              value="reminders"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<NoteAddIcon fontSize="large" />}
          className={classes.btn}
        >
          Submit
        </Button>
      </form>
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
      margin: ({ dir }: StyleType) =>
        dir === "ltr" ? "0 5px 0 0" : "0 0 0 5px",

      "& .MuiButton-endIcon > svg": {
        fontSize: 22,
      },
    },
    field: {
      margin: "20px 0",
      display: "block",
    },
    radioGp: {
      width: "fit-content",
    },
  })
);
