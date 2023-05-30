import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  aboutMeWrapper: {
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
      '.heading': {
        fontSize: 'var(--h3-font-size)',
        marginBottom: 'var(--mb-0-75)',
      },
      '.desc': {
        textAlign: 'justify',
        paddingRight: '6rem',
        marginBottom: 'var(--mb-2)',
      },
      '.mantine-ActionIcon-root': {
        marginBottom: 'var(--mb-0-5)',
        svg: {
          stroke: 'var(--skin-color)',
        },
      },
      '.about_description': {
        display: 'flex',
        gap: 10,
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
    '.avatar': {
      img: {
        borderRadius: '.75rem',
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
}));
