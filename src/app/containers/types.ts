export interface NoteType {
  title: string;
  details: string;
  category: string;
  id: number;
}

export interface NoteProps {
  res: NoteType[];
  updateRes: (newNote: NoteType[]) => void;
}
