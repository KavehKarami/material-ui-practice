import axiosIntance from "./base";

async function deleteNote(id: number) {
  try {
    await axiosIntance({ url: `/notes/${id}`, method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
}

export default deleteNote;
