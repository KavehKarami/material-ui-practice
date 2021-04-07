import useFetch from "../../hooks/useFetch";
import { Container, Grid } from "@material-ui/core";
import { NoteProps } from "./types";
import NoteCard from "../components/NoteCard";
import deleteNote from "../../services/DeleteNote";

function Notes() {
  const { res: notes, updateRes: updateNotes }: NoteProps = useFetch("/notes");

  const handleDelete = async (id: number) => {
    await deleteNote(id);
    const newNotes = notes.filter((note) => note.id !== id);
    updateNotes(newNotes);
  };

  return (
    <Container>
      <Grid spacing={3} container>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard handleDelete={handleDelete} note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;
