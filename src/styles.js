const styles = {
  '@global': {
    [['html', 'body', '#root']]: {
      height: '100%',
      margin: 0,
      fontFamily: 'sans-serif',
      fontSize: '18px',
      boxSizing: 'border-box',
    },
    [['*', '*::before', '*::after']]: {
      boxSizing: 'inherit',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    paddingTop: '32px',
  },
  topContainer: {
    display: 'flex',
    maxWidth: '496px',
    width: '100%',
    marginBottom: '32px',
    '& > $section': {
      height: '200px',
      width: 'calc(50% - 16px)',
      '&:not(:first-child)': {
        marginLeft: '32px',
      },
    },
  },
  section: {
    overflow: 'hidden',
    padding: '16px',
    '&:hover': {
      overflow: 'overlay',
    },
    '& > div': {
      display: 'inline-block',
      padding: '4px',
      fontWeight: '600 !important',
    },
  },
  bottomSection: {
    maxWidth: '496px',
    width: '100%',
    height: '100px',
  },
};

export default styles;
