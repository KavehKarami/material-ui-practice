import { Button, Container, Typography } from "@material-ui/core";

function Create() {
  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button type="submit" color="secondary" variant="contained">
        Submit
      </Button>
    </Container>
  );
}

export default Create;
