import useFetch from "../../hooks/useFetch";
import { NoteType } from "./types";

function Notes() {
  const { response: notes }: { response: NoteType[] } = useFetch("/notes");

  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}

export default Notes;
