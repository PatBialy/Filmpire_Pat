import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { MovieList, Pagination } from '..';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="70px">
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
      <Pagination currentPage={page} setPage={setPage} totalPage={data.total_pages} />
    </div>
  );
};

export default Movies;
