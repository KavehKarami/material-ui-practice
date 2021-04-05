import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { NoteCardProps } from "./types";

function NoteCard({ note, handleDelete }: NoteCardProps) {
  return (
    <Card elevation={1}>
      <CardHeader
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlinedIcon />
          </IconButton>
        }
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
