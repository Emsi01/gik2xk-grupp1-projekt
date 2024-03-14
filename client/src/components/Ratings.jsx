
import Stack from '@mui/material/Stack';
import * as React from 'react';

function Ratings() {
  return (
    <Stack spacing={1}>
        <p>Ge betyg:</p>
      <Ratings name="half-rating" defaultValue={0} precision={0.5} />
      <p>Genomsnitt:</p>
      <Ratings name="half-rating-read" defaultValue={2.4} precision={0.2} readOnly />
    </Stack>
  );
  }
              

export default Ratings;