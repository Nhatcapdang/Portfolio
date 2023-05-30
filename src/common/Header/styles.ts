import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  headerWrapper: {
    position: 'fixed',
    overflow: 'hidden',
    width: '100px',
    height: '100vh',
    backgroundColor: 'var(--body-color)',
    borderRight: '1px solid var(--box-color)',
    '.mantine-List-root': {
      display: 'flex',
      transform: 'rotate(-90deg)',
      // transformOrigin: 'top left',
      flexDirection: 'row-reverse',
      '.mantine-List-item': {
        '.mantine-NavLink-root': {
          lineHeight: '100px',
          color: 'var(--text-color)',
          fontWeight: 700,
          padding: '1rem',
          transition: 'all 0.4s ease',
          '&:hover': {
            color: 'var(--skin-color)',
          },
          '&[data-active]': {
            color: 'var(--skin-color)',
            background: 'unset',
          },
          '.mantine-NavLink-label': {
            fontSize: '1rem',
          },
        },
      },
    },
    '.logo': {
      fontWeight: 700,
      fontSize: '1.5rem',
      border: '1px solid #fff',
      borderRadius: '50%',
      height: '50px',
      width: '50px',
      padding: '0.5rem',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: '30px',
    },
    '.iconShare': {
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
    },
  },
}));
