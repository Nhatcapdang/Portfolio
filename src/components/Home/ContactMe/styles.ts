import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  contactMeWrapper: {
    height: '100vh',
    // position: 'relative',
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // background: '#131313',
    '.title': {
      textAlign: 'center',
      marginBottom: 60,
      fontSize: 'var(--h1-font-size)',
      '&:before': {
        content: 'attr(data-heading)',
        display: 'block',
        fontSize: 'var(--normal-font-size)',
        fontWeight: 600,
        color: 'var(--skin-color)',
      },
    },
    '.earthCanvasWrapper': {
      // position: 'absolute',
      // zIndex: 99,
      height: '100%',
      width: '100%',
      // left: '0',
      // '@media (max-width: 1550px)': {
      //   height: '130%',
      //   width: '130%',
      // },
      // '@media (max-width: 1200px)': {
      //   height: '90%',
      // },
      // '@media (max-width: 992px)': {
      //   height: '100%',
      // },
    },
    '.about': {
      '.mantine-ActionIcon-root': {
        marginBottom: 'var(--mb-0-5)',
        svg: {
          stroke: 'var(--skin-color)',
        },
      },
      '.about_description': {
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
        marginBottom: 'var(--mb-2)',
        '.boxContent': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--box-color)',
          padding: '1rem 1.25rem',
          borderRadius: '.25rem',
          '.boxContent_title': {
            marginBottom: 'var(--mb-0-25)',
            fontSize: 'var(--small-font-size)',
          },
          '.sub-title': {
            fontSize: 'var(--smaller-font-size)',
          },
        },
      },
    },

    '.fromInput': {
      display: 'flex',
      flexDirection: 'column',
      gap: 35,
      '.mantine-TextInput-root:focus-within label': {
        top: '0%',
        letterSpacing: '.4em',
        // background: 'var(--box-color)',
        fontSize: 'var(--normal-font-size)',
      },
      '.mantine-TextInput-root': {
        position: 'relative',
        '.mantine-TextInput-input': {
          border: 'none',
          borderBottom: '2px solid var(--text-color)',
          background: 'transparent',
          padding: '.6rem 1.2rem',
          color: 'var(--text-color)',
          fontWeight: 600,
          fontSize: 'var(--normal-font-size)',
          letterSpacing: '.5px',
          borderRadius: 'unset',
          transition: '.3s',
          height: 'unset',
          '&:-webkit-autofill': {
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'var(--text-color)',
            transition: 'background-color 5000s ease-in-out 0s',
            boxShadow: 'inset 0 0 20px 20px #23232329',
          },
        },
        label: {
          textTransform: 'uppercase',
          position: 'absolute',
          top: '50%',
          // left: '1rem',
          transform: 'translateY(-50%)',
          padding: '0px .4rem',
          color: 'var(--text-color)',
          fontSize: '1.3rem',
          fontWeight: 600,
          pointerEvents: 'none',
          zIndex: 1,
          transition: '.5s',
        },
        '&.input-not-empty': {
          label: {
            top: '0%',
            letterSpacing: '.4em',
            // background: 'var(--box-color)',
            fontSize: 'var(--normal-font-size)',
          },
        },
      },
      '.mantine-Textarea-root:focus-within label': {
        top: '-10%',
        letterSpacing: '.4em',
        // background: 'var(--box-color)',
        fontSize: 'var(--normal-font-size)',
      },
      '.mantine-Textarea-root': {
        position: 'relative',
        '.mantine-Textarea-wrapper': {
          '.mantine-Textarea-input': {
            padding: '.8rem 1.2rem',
            minHeight: '140px',
            borderRadius: 'unset',
            resize: 'none',
            background: 'transparent',
            fontWeight: 600,
            border: 'none',
            borderBottom: '2px solid var(--text-color)',
          },
        },
        '.mantine-Textarea-label': {
          position: 'absolute',
          top: '1rem',
          textTransform: 'uppercase',
          transform: 'translateY(0)',
          padding: '0px .4rem',
          color: 'var(--text-color)',
          fontSize: '1.3rem',
          fontWeight: 600,
          transition: '.3s',
          zIndex: 1,
        },
        '&.input-not-empty': {
          label: {
            top: '-10%',
            letterSpacing: '.4em',
            // background: 'var(--box-color)',
            fontSize: 'var(--normal-font-size)',
          },
        },
      },
      '.btnAboutMe': {
        letterSpacing: '.5px',
        textTransform: 'uppercase',
        padding: '0px 30px',
        maxWidth: 'max-content',
        height: '50px',
        color: 'var(--title-color)',
        fontWeight: 700,
        background: 'var(--skin-color)',
        border: '1px solid var(--skin-color)',
        '&:hover': {
          background: 'transparent',
        },
      },
    },
  },
}))
