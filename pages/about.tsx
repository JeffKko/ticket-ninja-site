import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import FooterBar from '../src/FooterBar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { TopSticker } from '../src/TopSticker';

export default function About() {
  return (
    <Container maxWidth="lg">
      <TopSticker />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          marginBottom={8}
          sx={{
            textAlign: 'center',
            '@media only screen and (max-width: 768px)': {
              textAlign: 'left',
              paddingRight: '120px',
              paddingLeft: '16px',
            },
          }}
        >
          TICKET.Ninja - 聯絡作者
        </Typography>

        <Button
          variant="text"
          component={Link}
          href="https://discord.gg/65VpSVppRs"
          target="_blank"
          color="primary"
          startIcon={<WhatsAppIcon />}
        >
          Discord
        </Button>

        <FooterBar />
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
