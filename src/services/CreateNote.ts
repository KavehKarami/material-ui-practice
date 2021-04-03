import { NoteType } from "../app/containers/types";
import axiosIntance from "./base";

type PostNoteType = Omit<NoteType, "id">;

async function postNote({ title, details, category }: PostNoteType) {
  try {
    const response = await axiosIntance({
      url: "/notes",
      method: "POST",
      data: {
        title,
        details,
        category,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export default postNote;
