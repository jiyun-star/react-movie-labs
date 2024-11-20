
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import img from '../../images/film-poster-placeholder.png'


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieCredits = ({ movie }) => {  // Don't miss this!
  return (
    <>
      <Typography variant="h5" component="h3">
        cast
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movie.cast.map((g) => (
      <Card key={g.name}>
      <CardMedia
       sx={{ height: 200, width: 150 }}
        image={
         g.profile_path
        ? `https://image.tmdb.org/t/p/w500/${g.profile_path}`
        : img}
        />
        <CardContent> {g.name} </CardContent>
         {/* /* <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions> */ }
  </Card>
        ))}
        </div>
    </>
  );
};

export default MovieCredits ;