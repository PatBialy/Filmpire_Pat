import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { MovieList } from '..';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies found.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) return 'An error has occurred';

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
