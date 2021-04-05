import { NoteType } from "./../containers/types";

export interface NoteCardProps {
  note: NoteType;
  handleDelete: (id: number) => void;
}
