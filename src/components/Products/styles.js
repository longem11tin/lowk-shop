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
    textAlign: 'center',
    color: '#535B86',
    marginBottom: '20px',
    textDecoration: 'none',
    marginTop: '-20px',
  }
}));