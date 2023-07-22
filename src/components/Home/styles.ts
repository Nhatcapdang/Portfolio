import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  bothMndatory: {
    // scrollSnapType: 'both mandatory',
    // height: '100vh',
    // overflowY: 'scroll',
    marginRight: '-16px',
    paddingRight: '32px',
    // scroolBehavior: 'smooth',
    // scrollPaddingTop: '15vh',
    // transition: 'all 5s ease-in-out',
    scrollSnapType: 'both mandatory',
    display: 'grid',
    gridAutoRows: '100%',
    height: '100vh',
    overflowY: 'scroll',

    '>div': {
      scrollSnapMargin: '50px',
      scrollSnapAlign: 'start',
      scrollSnapStop: 'always',
      // scrollbarWidth: 'thin',
    },
  },
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
    '.owen': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      '.owen2': {
        position: 'relative',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
      '.avatar': {
        zIndex: 0,
        position: 'absolute',
        content: '""',
        maxWidth: '800px',
        bottom: 0,
        right: 0,
      },
    },
    '@media (max-width: 992px)': {
      '.mantine-Stack-root': {
        height: '100%',
        '.mantine-List-root': {
          '&.listSocial': {},
          '&.listPersional': {
            display: 'unset',
          },
        },
      },
    },
  },
}))
