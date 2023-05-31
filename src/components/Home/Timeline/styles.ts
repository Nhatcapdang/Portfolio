import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  timelineWrapper: {
    height: '100vh',
    '.chronoWrapper': {
      width: '100%',
      height: '100%',
      position: 'relative',
      '#timeline-main-wrapper': {
        '&::-webkit-scrollbar-thumb': {
          background: 'var(--skin-color)',
          outline: 'none',
        },
        '&::-webkit-scrollbar-track': {
          background: 'unset',
        },
        '.timeline-item-title': {
          color: 'var(--text-color)',
          transition: '.4s ease-in-out',
          '&.active': {
            border: '1px solid white',
            background: 'transparent',
            padding: '0.5rem 1rem',
          },
        },
        '.dOXaxF': {
          '&:after,&:before': {
            background: 'var(--skin-color)',
          },
          '.timeline-vertical-circle>div': {
            background: 'var(--skin-color)',
            width: '20px',
            height: '20px',
            transition: '.4s ease-in-out',
            '&.active': {
              border: '2px solid white',
            },
          },
        },
      },
      '.TimelineControlContainer-hkLVml': {
        position: 'absolute',
        right: 0,
        top: '50%',
        'ul.timeline-controls': {
          display: 'unset',
          // padding: '.5em .3em',
          background: 'unset',
          li: {
            padding: '0.3em 0',
          },
          button: {
            width: '25px',
            height: '25px',
            background: 'unset',
            border: '1px solid var(--skin-color)',
            '&:hover': {
              transform: 'scale(1.3) rotate(90deg)',
            },
          },
        },
      },
    },
  },
}));
