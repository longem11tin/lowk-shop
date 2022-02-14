import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '80px 100px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    position: 'flex',
    justifyItems: 'center',
    border: '3px solid',
    verticalAlign: 'bottom',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
      marginTop: '20px',
  }
}));