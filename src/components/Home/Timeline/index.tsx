import { Box } from '@mantine/core';
import { Chrono } from 'react-chrono';
import { useStyles } from './styles';
import { items } from './data';

export default function Timeline() {
  const { classes } = useStyles();
  return (
    <Box className={classes.timelineWrapper}>
      <Box className="chronoWrapper">
        <Chrono
          items={items}
          classNames={{
            card: 'my-card',
            cardMedia: 'my-card-media',
            cardSubTitle: 'my-card-subtitle',
            cardText: 'my-card-text',
            cardTitle: 'my-card-title',
            controls: 'my-controls',
            title: 'my-title',
          }}
          mode="VERTICAL_ALTERNATING"
          cardHeight={250}
        />
      </Box>
    </Box>
  );
}
