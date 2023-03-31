import * as React from 'react';
import { NextSeo, WebPageJsonLd } from 'next-seo';
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
    <>
      <NextSeo canonical="https://ticketninja.club/" />
      <WebPageJsonLd
        description="成為 TICKET.Ninja，輕鬆搶到心儀的演唱會門票！ 一款速度極快，具有AI輔助、自動化的購票輔助程式，幫助您搶贏其他拓元售票的搶票機器人，遠離黃牛、輕鬆購票"
        id="https://ticketninja.club/"
        breadcrumb={[
          {
            position: 1,
            name: '使用說明',
            item: 'https://ticketninja.club/guide/',
          },
          {
            position: 1,
            name: '常見問題',
            item: 'https://ticketninja.club/faq/',
          },
          {
            position: 1,
            name: '檔案下載',
            item: 'https://ticketninja.club/download/',
          },
          {
            position: 1,
            name: '關於作者',
            item: 'https://ticketninja.club/about/',
          },
        ]}
      />
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
            成為 TICKET.Ninja，輕鬆搶到您所需的門票！ <br />
            一款速度極快，具有AI輔助、自動化的購票輔助程式 <br />
            專門為拓元售票系統 (
            <Link href="https://tixcraft.com" target="_blank" underline="hover">
              {'https://tixcraft.com'}
            </Link>
            ) 打造 <br />
            幫助您擊敗搶票機器人和搶票搶票 <br />
            遠離黃牛 / 輕鬆購票
          </Typography>

          <FooterBar />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
