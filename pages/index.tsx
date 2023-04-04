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
import Grid from '@mui/material/Unstable_Grid2';

export default function Home() {
  return (
    <>
      <NextSeo canonical="https://ticketninja.club/" />
      <WebPageJsonLd
        description="成為 TICKET.Ninja，輕鬆搶到心儀的演唱會門票！ 一款免費、速度極快，具有AI輔助、自動化的搶票輔助程式，幫助您搶贏其他拓元售票的搶票機器人，遠離黃牛、輕鬆訂票"
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
          <Box
            pb={20}
            sx={{
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
              一款免費 、秒速，具有AI輔助、自動化的搶票助手 <br />
              專門為拓元售票系統 (
              <Link
                href="https://tixcraft.com"
                target="_blank"
                underline="hover"
              >
                {'https://tixcraft.com'}
              </Link>
              ) 打造 <br />
              幫助您擊敗其他的搶票機器人和搶票程式 <br />
              遠離黃牛 / 輕鬆訂票
            </Typography>
            <FooterBar />
          </Box>
          <Box
            mb={16}
            sx={{
              width: '100%',
            }}
          >
            <Grid container spacing={2} rowSpacing={2}>
              <Grid sm={12} md={6}>
                <Typography variant="h3">彈指之間完成搶票</Typography>
                <br />
                <Typography variant="subtitle1">3 秒送出訂單 - ✅</Typography>
                <Typography variant="subtitle1">
                  等待拓元系統確認 - ✅
                </Typography>
                <Typography variant="subtitle1">
                  至拓元官網結帳領票 - ✅
                </Typography>
              </Grid>
              <Grid
                sm={12}
                md={6}
                flex={1}
                sx={{
                  '@media only screen and (max-width: 768px)': {
                    marginTop: '44px',
                  },
                }}
              >
                <div
                  style={{
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '0px',
                      position: 'relative',
                      paddingBottom: '91.233%',
                    }}
                  >
                    <iframe
                      src="https://streamable.com/e/sv5p1g?autoplay=1"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      allow="autoplay"
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        overflow: 'hidden',
                      }}
                    ></iframe>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
