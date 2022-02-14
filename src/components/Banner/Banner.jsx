import { Container, Typography, Button, Grid } from "@material-ui/core";
import deskLearn from "../../assets/Canon-Kit.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              Camera LUMIX G9  The Best Filmmaking 
            </Typography>
            <Button className="shopping-button" href="#products" >
              <Typography variant="h6">Shopping</Typography>
            </Button>
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={deskLearn} alt="Brand-tv" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;