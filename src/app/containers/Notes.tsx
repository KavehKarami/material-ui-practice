import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";
import useFetch from "../../hooks/useFetch";
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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard handleDelete={handleDelete} note={note} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

export default Notes;
