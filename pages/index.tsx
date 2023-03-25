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
        <Typography className="app-title" variant="h1">
          TICKET.Ninja
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          TICKET.Ninja 是一個購票輔助程式 <br />
          專門為拓元售票系統
          (<Link href="https://tixcraft.com" target="_blank" underline="hover">{'https://tixcraft.com'}</Link>) 打造 <br />
          幫助您擊敗搶票機器人和搶票外掛 <br />
          遠離黃牛 / 輕鬆搶票
        </Typography>

        <FooterBar />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
