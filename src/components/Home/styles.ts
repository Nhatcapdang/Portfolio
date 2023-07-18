import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  homeWrapper: {
    position: 'relative',
    height: '100vh',
    padding: 50,
    '.mantine-Stack-root': {
      height: '100%',
      '.mantine-List-root': {
        display: 'flex',
        '.mantine-List-item': {
          padding: '20px',
          fontWeight: 700,
          cursor: 'pointer',
          '.mantine-ActionIcon-root': {
            svg: {
              stroke: 'var(--skin-color)',
            },
          },
        },
        '&.listSocial': {
          alignItems: 'center',
          '.mantine-List-item': {
            padding: '10px',
          },
        },
        '&.listPersional': {
          '.mantine-List-item': {
            '.underline': {
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            '.mantine-ActionIcon-root': {
              marginRight: '10px',
            },
          },
        },
      },
      '.introdution': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        '.btnAboutMe': {
          padding: '0px 30px',
          maxWidth: 'max-content',
          height: '50px',
          color: 'var(--title-color)',
          fontWeight: 700,
          letterSpacing: '1px',
          background: 'var(--skin-color)',
          border: '1px solid var(--skin-color)',
          '&:hover': {
            background: 'transparent',
          },
        },
      },
    },
    '.avatar': {
      zIndex: -1,
      position: 'absolute',
      content: '""',
      maxWidth: '800px',
      bottom: 0,
      right: 0,
    },
    '@media (max-width: 992px)': {
      '.mantine-Stack-root': {
        height: '100%',
        '.mantine-List-root': {
          display: 'unset',
        },
      },
    },
  },
}));
