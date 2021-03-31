import { Button, Container, Typography } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

function Create() {
  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<NoteAddIcon fontSize="large" />}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Create;
