import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Joke({ id, setup, punchline, onClickLike, onClickUnlike }) {
  const classes = styles();

  return (
    <div>
      <Container className={classes.container}>
        <Card key={id} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" align="center">
              {setup}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              color="textSecondary"
            >
              {punchline}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button variant="contained" color="primary" onClick={onClickLike}>
              Like
            </Button>
            <Button variant="contained" color="default" onClick={onClickUnlike}>
              Unlike
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

const styles = makeStyles({
  container: {
    maxWidth: "600px",
    alignContent: "center",
  },
  card: {
    marginBottom: 20,
  },
  cardContent: {
    paddingBottom: 5,
  },
  cardActions: {
    padding: 16,
  },
});

export default Joke;
