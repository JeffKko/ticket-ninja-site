import * as React from 'react';
import { FAQPageJsonLd } from 'next-seo';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import FooterBar from '../src/FooterBar';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          TICKET.Ninja - FAQ
        </Typography>
        <p>FAQ</p>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <FooterBar />
        <ProTip />
        <Copyright />
      </Box>
      {/* <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'How long is the delivery time?',
            acceptedAnswerText: '3-5 business days.',
          },
          {
            questionName: 'Where can I find information about product recalls?',
            acceptedAnswerText: 'Read more on under information.',
          },
        ]}
      /> */}
    </Container>
  );
}
