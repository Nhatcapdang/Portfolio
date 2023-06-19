import { Box, SimpleGrid } from '@mantine/core';
import Card3D from '../Card3D';
import { useStyles } from './styles';

export default function Testimonials() {
  const { classes } = useStyles();
  return (
    <Box className={classes.testimonialsWrapper}>
      <SimpleGrid
        cols={4}
        spacing={40}
        breakpoints={[
          {
            maxWidth: 1400,
            cols: 3,
          },
          {
            maxWidth: 1200,
            cols: 2,
          },
          {
            maxWidth: 768,
            cols: 1,
          },
        ]}
      >
        <Box className="card3dWrapper">
          <Card3D />
        </Box>
        <Box className="card3dWrapper">
          <Card3D />
        </Box>
        <Box className="card3dWrapper">
          <Card3D />
        </Box>
        <Box className="card3dWrapper">
          <Card3D />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
