import useFetch from "../../hooks/useFetch";
import { NoteType } from "./types";
import { Container, Grid, Paper } from "@material-ui/core";

function Notes() {
  const { response: notes }: { response: NoteType[] } = useFetch("/notes");

  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;
