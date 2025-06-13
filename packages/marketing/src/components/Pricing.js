import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
 const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "1 user only",
      "1 GB storage",
      "Basic support",
      "Community access"
    ],
    buttonText: "Sign up for Free",
    buttonVariant: "outlined",
  },
  {
    title: "Starter",
    price: "9",
    description: [
      "Up to 5 users",
      "5 GB storage",
      "Email support",
      "Basic analytics"
    ],
    buttonText: "Start Trial",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subHeader: "Most Popular",
    price: "29",
    description: [
      "Up to 20 users",
      "50 GB storage",
      "Priority email support",
      "Advanced analytics"
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "99",
    description: [
      "Unlimited users",
      "1 TB storage",
      "Dedicated support",
      "Custom solutions"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outlined",
  }
];


export default function Pricing() {
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ marginTop: "2rem" }}
      >
        Pricing Plans
      </Typography>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subHeader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  style={{
                    backgroundColor:
                      tier.title === "Pro" ? "#f5f5f5" : "#fafafa",
                  }}
                />
                <CardContent>
                  <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /month
                    </Typography>
                  </div>
                  <ul style={{ paddingLeft: "1.2rem" }}>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="left"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
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
