import { Container, Grid, Box } from '@material-ui/core';
import useStyles from './style';

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  const classes = useStyles();
  return (
    <footer >
      <Box className={classes.footer} bgcolor="text.secondary">
          <Container maxWidth='lg'>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Box >Help</Box>
                    <Box>Contact</Box>
                    <Box>Contact</Box>
                    <Box>Contact</Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box >Help</Box>
                    <Box >Contact</Box>
                    <Box >Contact</Box>
                    <Box >Contact</Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box >Help</Box>
                    <Box >Contact</Box>
                    <Box >Contact</Box>
                    <Box >Contact</Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box >Help</Box>
                    <Box >Contact</Box>
                    <Box >Contact</Box>
                    <Box >Contact</Box>
                  </Grid>
              </Grid>
          </Container>
      </Box>
    </footer>
  );
};

export default Footer;