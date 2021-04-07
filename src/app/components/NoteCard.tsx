import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { green, lightBlue, pink, yellow } from "@material-ui/core/colors";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { NoteCardProps } from "./types";

function NoteCard({ note, handleDelete }: NoteCardProps) {
  const classes = useStyles({ category: note.category });

  return (
    <Card elevation={1}>
      <CardHeader
        title={note.title}
        subheader={note.category}
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
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

const useStyles = makeStyles({
  avatar: {
    backgroundColor: ({ category }: { category: string }) => {
      if (category === "work") return yellow[700];
      if (category === "money") return green[500];
      if (category === "todos") return lightBlue[500];
      return pink[500];
    },
  },
});
