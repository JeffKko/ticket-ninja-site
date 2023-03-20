import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import FooterBar from '../src/FooterBar';
// import ninjaImage from '../public/ninja.png'

export default function Home() {
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
        <img width="128" src="./ninja.png" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <h1>Material UI - Next.js example in TypeScript</h1>
        <h4>Material UI - Next.js example in TypeScript</h4>
        <Typography variant="subtitle1" align="center" gutterBottom>
          TICKET.Ninja 是一個購票輔助程式 <br />
          專門為拓元售票系統
          (<Link href="https://tixcraft.com" underline="hover">{'https://tixcraft.com'}</Link>) 打造 <br />
          幫助您擊敗搶票機器人和搶票外掛 <br />
          遠離黃牛, 輕鬆搶票
        </Typography>

        <FooterBar />
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
