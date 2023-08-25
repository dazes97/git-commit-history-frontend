import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {
  buttonStyle,
  containerStyle,
  headerStyle,
  subheaderStyle,
} from "./styles";

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Typography variant="h1" sx={headerStyle}>
        404
      </Typography>
      <Typography variant="h4" sx={subheaderStyle}>
        Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        We're sorry, but the page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={buttonStyle}>
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;
