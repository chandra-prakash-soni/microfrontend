import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/pricing");
  };

  return (
    <React.Fragment>
      <Typography variant="h4" align="center" gutterBottom>
        Home Page
      </Typography>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={"https://picsum.photos/400/200?random=" + card}
                  title="Image Title"
                  height="200"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading {card}
                  </Typography>
                  <Typography>
                    This is a short description for card number {card}.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleRedirect}>
                    Go to Pricing
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
