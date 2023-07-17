import { Box, SimpleGrid } from '@mantine/core';
import { Avatar2, Avatar3 } from 'public/asset/Photos';
import Card3D from '../Card3D';
import { useStyles } from './styles';

const FAKE_DATA = [
  {
    photo: Avatar2,
    qoue: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.',
    name: 'Kiet',
    job: 'CEO',
    avatar: Avatar2,
  },
  {
    photo: Avatar3,
    qoue: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.',
    name: 'Kiet',
    job: 'CEO',
    avatar: Avatar3,
  },
  {
    photo: Avatar2,
    qoue: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.',
    name: 'Kiet',
    job: 'CEO',
    avatar: Avatar2,
  },
  {
    photo: Avatar3,
    qoue: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.',
    name: 'Kiet',
    job: 'CEO',
    avatar: Avatar3,
  },
];
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
        {FAKE_DATA.map((item, index) => (
          <Box key={index} className="card3dWrapper">
            <Card3D {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
