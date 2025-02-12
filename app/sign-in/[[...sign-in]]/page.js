import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button color="inherit" href="/">
          Flashcard Saas
          </Button>
          </Typography>
          <Button color="inherit" href="/sign-in">
            Login
          </Button>{" "}
          <Button color="inherit" href="/sign-up">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4"> Sign In</Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
