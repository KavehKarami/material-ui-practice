export interface NoteType {
  title: string;
  details: string;
  category: string;
  id: number;
}

export interface NoteProps {
  response: NoteType[];
  updateResponse: (newNote: NoteType[]) => void;
}
