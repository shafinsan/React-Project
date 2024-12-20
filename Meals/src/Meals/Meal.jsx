import React from "react";
import FetchMeal from "./FetchMeal";
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";

function Meal() {
  const [data] = FetchMeal(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Seafood Recipes
      </Typography>
      <Grid container spacing={3}>
        {data?.meals?.map((meal) => (
          <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {meal.strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meal ID: {meal.idMeal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Meal;
