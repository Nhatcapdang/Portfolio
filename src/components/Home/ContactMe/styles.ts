import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  contactMeWrapper: {
    height: '100vh',
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#131313',
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
        background: 'var(--box-color)',
        fontSize: 'var(--normal-font-size)',
      },
      // '.mantine-TextInput-root:valid-within label': {
      // background: 'red',
      // },
      // .mantine-TextInput-root:focus label,.mantine-TextInput-root:not(:placeholder-shown).mantine-TextInput-root:not(:focus) label)
      '.mantine-TextInput-root': {
        position: 'relative',
        '.mantine-TextInput-input': {
          border: '2px solid var(--text-color)',
          background: 'transparent',
          padding: '.6rem 1.2rem',
          color: 'var(--text-color)',
          fontWeight: 600,
          fontSize: 'var(--normal-font-size)',
          letterSpacing: '.5px',
          borderRadius: '.50rem',
          transition: '.3s',
          height: 'unset',
          // position: 'relative',
          // '&:valid ~ label': {
          //   background: 'red',
          // },
          // '&:not(:placeholder-shown)': {
          //   outline: '2px solid green',
          // },
          // '&:before': {
          //   content: '"Message"',
          //   position: 'absolute',
          //   width: '100%',
          //   height: '100%',
          //   background: 'navy',
          // },
        },
        label: {
          position: 'absolute',
          top: '50%',
          left: '1rem',
          transform: 'translateY(-50%)',
          padding: '0px .4rem',
          color: 'var(--text-color)',
          fontSize: '1.3rem',
          fontWeight: 600,
          pointerEvents: 'none',
          zIndex: 1,
          transition: '.5s',
        },
      },
      '.mantine-Textarea-root:focus-within label': {
        top: '-10%',
        background: 'var(--box-color)',
        fontSize: 'var(--normal-font-size)',
      },
      '.mantine-Textarea-root': {
        position: 'relative',
        '.mantine-Textarea-wrapper': {
          '.mantine-Textarea-input': {
            padding: '.8rem 1.2rem',
            minHeight: '140px',
            borderRadius: '.50rem',
            resize: 'none',
            background: 'transparent',
            border: '2px solid var(--text-color)',
            fontWeight: 600,
          },
        },
        '.mantine-Textarea-label': {
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          transform: 'translateY(0)',
          padding: '0px .4rem',
          color: 'var(--text-color)',
          fontSize: '1.3rem',
          fontWeight: 600,
          transition: '.3s',
          zIndex: 1,
        },
      },
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
}));
