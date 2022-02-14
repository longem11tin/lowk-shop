import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    margin: '100px',
    marginTop: '0px',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'left',
    color: '#535B86',
    marginBottom: '20px',
    textDecoration: 'none',
    marginTop: '-20px',
    textAlign: 'center',
  },
  titleFirst: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#000',
    margin: '20px 0',
    font: ' sans-serif',
  }
}));