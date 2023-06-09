import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  card3DWrapper: {
    height: '100vh',
    '.card ': {
      display: 'inline-block',
      boxShadow: 'none',
      backfaceVisibility: 'hidden',
      background: 'transparent',
      transformStyle: 'preserve-3d',
      padding: 0,
      width: '18rem',
      height: '25rem',
      transition: 'all 0.2s ease-out',
      border: 'none',
      letterSpacing: '1px',
      '.inner-card-backface': {
        transform: ' rotateX(0) rotateY(0deg) scale(1) translateZ(-4px)',
        borderEadius: ' 14px',
        background: ' linear-gradient(45deg, #0b0b2a, #0b0b2a)',
        position: 'absolute',
        top: '0',
        color: ' white',
        padding: '2rem',
        boxSizing: 'border-box',
        transition: ' all 0.15s ease-out',
        willChange: ' transform, filter',
        left: ' 0',
        width: ' 100%',
        height: ' 100%',
        '.image': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          borderRadius: '14px',
          height: '100%',
          transform: 'rotateY(180deg)',
          backgroundSize: 'auto 102%',
          backgroundPosition: '-2px -5px',
          '.unflip': {
            top: 'auto',
            background: '#2d2d62',
            bottom: '1rem',
          },
        },
      },
      '.inner-card': {
        width: '100%',
        fontSize: '2rem',
        color: 'white',
        padding: '1rem 2rem',
        lineHeight: '3rem',
        willChange: 'transform, filter',
        float: 'none',
        background: 'black',
        backgroundSize: 'calc(100% + 6px) auto',
        backgroundPosition: '-3px -3px',
        transition: 'all 0.15s ease-out',
        borderRadius: '14px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'block',
        margin: '0px auto',
        transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
        top: '0',
        height: '100%',
        filter: 'drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3))',
        fontWeight: 500,
        perspectiveOrigin: '0 0',
        letterSpacing: '0',
      },
      '.glare': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        transition: 'all 0.1s ease-out',
        opacity: '0.6',
        pointerEvents: 'none',
        height: '100%',
        borderRadius: '14px',
        zIndex: 9999,
        mixBlendMode: 'hard-light',
        background: 'radial-gradient(circle at 50% 50%, rgb(199 198 243), transparent)',
      },
      '.animated': {
        '.glare': {
          opacity: 0.3,
        },
      },
    },
    '.flipped': {
      transform: 'rotateY(180deg)',
    },
    '.flip, .unflip': {
      background: 'rgba(0, 0, 0, 0.1)',
      fontSize: '1rem',
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      padding: '0.5rem 0.75rem',
      borderRadius: '100px',
      lineHeight: '1rem',
      cursor: 'pointer',
      transition: 'all 0.1s ease-out',
      boxShadow: '0 2px 20px #0b1485',
    },
  },
}));
