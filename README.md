# react movie app
name : jiyun kwon

# Overview
This is a react movie app for my web app module. I added a language filtering function by referring to the tmdb website. I removed home and let the jmovie (j from jiyun) logo function as home. You can all add it to your favorite and watch later on the home, upcoming, and top rated pages. and on the detail page you can see the casts and more info about them.

# Features
- upcoming page created
- top rated page created
- casts page created
- Casts detail page created 
- Top Rated Page created 
- Watch later created
- language filter created 

# API endpoints
- getUpcoming - /movie/upcoming
- gettoprated - /movie/top_rated
- getMovieCredits - /movie/${id}/credits
- getPerson - /person/${id}
- getPersonImages - /person/${id}/images

# Routing
- [upcoming page] http://localhost:3000/movies/upcoming
- [top rated page] http://localhost:3000/movies/toprated
- [favorite page] http://localhost:3000/movies/favorites
- [watch later page] http://localhost:3000/movies/watchlater
- [movie detail page] http://localhost:3000/movies/:id
- [person detail page] http://localhost:3000/person/:id
