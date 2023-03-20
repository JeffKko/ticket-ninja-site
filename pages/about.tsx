import * as React from 'react';
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
        Github discussion <br />
        <Link
          href="https://discord.com/channels/827534182183075870/1087403590244642836"
          target="_blank"
          color="secondary"
        >
          Discord
        </Link>
        <FooterBar />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
