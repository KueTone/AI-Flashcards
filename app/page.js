"use client";
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        origin: "http://localhost:3000",
      },
    });

    const checkoutSessionJson = await checkoutSession.json();

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);

      return;
    }

    const stripe = await getStripe();
    const error = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="create flashcard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {" "}
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-up">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              {" "}
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2"> Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">
          {" "}
          The easiest way to make flashcards from just your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/generate">
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              {" "}
              Our AI intelligently breaks down your text to make intuitive and
              concise flashcards with a touch of a button.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text input</Typography>
            <Typography>
              {" "}
              Simply input your text and let your software do the rest.
            </Typography>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              {" "}
              Access you flashcards anywhere and anything with an internet
              connection. Study on the go!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" components="h2" gutterBottom>
          Pricing
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid ",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Basic
              </Typography>
              <Typography> $5 per month</Typography>
              <Typography>
                Basic Access to flashcard Features & Limited Storage
              </Typography>

              <Button variant="contained" color="primary">
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid ",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Pro
              </Typography>
              <Typography> $10 per month</Typography>
              <Typography>
                Unlimited flashcard access and storage with priority support
              </Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
