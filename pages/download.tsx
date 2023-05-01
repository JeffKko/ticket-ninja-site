import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import FooterBar from '../src/FooterBar';
import MuiLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import HistoryIcon from '@mui/icons-material/History';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SecurityIcon from '@mui/icons-material/Security';

import { TopSticker } from '../src/TopSticker';

interface CardProps {
  platform: string;
  version: string;
  date: string;
  fileName: string;
  link: string;
  reportLink?: string;
}

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
        {/* <Typography
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
          TICKET.Ninja - 檔案下載
        </Typography> */}

        <FooterBar />

        {/* <MuiLink
          href="https://github.com/JeffKko/ticket-ninja-site/releases"
          target="_blank"
        >
          <ManageSearchIcon />
          歷史更新紀錄
        </MuiLink> */}
        <Box mb={4}>
          <Typography variant="body1">Protected By</Typography>
          <img src="../vt.jpeg" width="200px" height="auto" alt="" />
          <br />
          <br />
          <Typography variant="body2" color="text.secondary">
            檔案均經過 VirusTotal 第三方安全性漏洞掃描，可點選 "安全性檢測證書"
            查看報告。
          </Typography>
        </Box>

        <Button
          variant="text"
          component={MuiLink}
          href="https://github.com/JeffKko/ticket-ninja-site/releases/"
          target="_blank"
          startIcon={<ManageSearchIcon sx={{ color: '#9BC9F5' }} />}
        >
          查看歷史更新紀錄
        </Button>

        <Box display="flex" alignItems="center" mt={8}>
          <NewReleasesIcon />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.2
          </Typography>
          <Typography variant="subtitle1">(2023-04-26)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.2',
              date: '2023-04-26',
              fileName: 'ticket-ninja-app-0.1.2.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.2',
              reportLink:
                'https://www.virustotal.com/gui/file/fc3dd7ee67cda72d49be0deb5a81fcac9d4649a744b799b86b60333cd00e6830/detection',
            })}
          </Card>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'Windows',
              version: '0.1.2',
              date: '2023-04-26',
              fileName: 'ticket-ninja-app-0.1.2-win.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.2',
              reportLink:
                'https://www.virustotal.com/gui/file/064ce66f72e5e60a2e7d80ed90d7d0e587b875c093f79d9c5fb268c7bbe1f9e8?nocache=1',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.1
          </Typography>
          <Typography variant="subtitle1">(2023-04-17)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.1',
              date: '2023-04-17',
              fileName: 'ticket-ninja-app-0.1.1-mac.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.1',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.8
          </Typography>
          <Typography variant="subtitle1">(2023-04-14)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.8',
              date: '2023-04-14',
              fileName: 'ticket-ninja-app-0.1.0-beta-8-mac.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.8',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={6}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.7
          </Typography>
          <Typography variant="subtitle1">(2023-04-12)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.7',
              date: '2023-04-12',
              fileName: 'ticket-ninja-app-0.1.0-beta-7-mac.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.7',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.6
          </Typography>
          <Typography variant="subtitle1">(2023-04-12)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.6',
              date: '2023-04-12',
              fileName: 'ticket-ninja-app-0.1.0-beta-6-mac.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.6',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.5
          </Typography>
          <Typography variant="subtitle1">(2023-04-08)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.5',
              date: '2023-04-08',
              fileName: 'ticket-ninja-app-0.1.0-beta-5-mac.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.5',
            })}
          </Card>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'Windows',
              version: '0.1.0-beta.5',
              date: '2023-04-08',
              fileName: 'ticket-ninja-app-0.1.0-beta-5-win.exe',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.5',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.4
          </Typography>
          <Typography variant="subtitle1">(2023-04-06)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.4',
              date: '2023-04-06',
              fileName: 'ticket-ninja-app-0.1.0-beta-4-mac.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.4',
            })}
          </Card>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'Windows',
              version: '0.1.0-beta.4',
              date: '2023-04-06',
              fileName: 'ticket-ninja-app-0.1.0-beta-4-win.exe',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.4',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.3
          </Typography>
          <Typography variant="subtitle1">(2023-04-05)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.3',
              date: '2023-04-05',
              fileName: 'ticket-ninja-0.1.0-beta-3.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.3',
            })}
          </Card>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'Windows',
              version: '0.1.0-beta.3',
              date: '2023-04-05',
              fileName: 'ticket-ninja-0.1.0-beta-3-win.exe',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.3',
            })}
          </Card>
        </Box>

        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.2
          </Typography>
          <Typography variant="subtitle1">(2023-04-03)</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.2',
              date: '2023-04-03',
              fileName: 'ticket-ninja-0.1.0-beta-2.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.2',
            })}
          </Card>
        </Box>
        <Box display="flex" alignItems="center" mt={8}>
          <HistoryIcon fontSize="small" />
          <Typography variant="h6" component="h5" mr={1} marginLeft={2}>
            v0.1.0-beta.1
          </Typography>
          <Typography variant="subtitle1">(2023-03-30)</Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'macOS',
              version: '0.1.0-beta.1',
              date: '2023-03-30',
              fileName: 'ticket-ninja-0.1.0-beta.dmg',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.1',
            })}
          </Card>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            {renderCardBody({
              platform: 'Windows',
              version: '0.1.0-beta.1',
              date: '2023-03-30',
              fileName: 'ticket-ninja-0.1.0-beta-win.exe',
              link: 'https://github.com/JeffKko/ticket-ninja-site/releases/tag/v0.1.0-beta.1',
            })}
          </Card>
        </Box>
        <br />
        <br />
        <br />
        <br />
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

const renderCardBody = ({
  platform,
  version,
  date,
  fileName,
  link,
  reportLink,
}: CardProps) => {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Box display="flex" alignItems="center">
          {platform === 'macOS' ? (
            <AppleIcon sx={{ marginRight: '8px' }} />
          ) : (
            <WindowIcon sx={{ marginRight: '8px' }} />
          )}
          <Typography variant="body2" component="div">
            {platform}
          </Typography>
        </Box>
        {/* <Typography variant="h6" component="div">
          v<AppleIcon sx={{ margin: '0 16px 0 0', lineHeight: '1.334' }} />
          {platform}
        </Typography> */}
        {/* <Typography variant="h6" component="div">
          v<AppleIcon sx={{ margin: '0 16px 0 0', lineHeight: '1.334' }} />
          {platform}
        </Typography> */}
        <Typography sx={{ mt: 1, mb: 1.5 }} color="text.secondary">
          v{version}
        </Typography>
        <Typography variant="body2">{fileName}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={MuiLink}
          href={link}
          target="_blank"
          startIcon={<DownloadForOfflineIcon />}
        >
          檔案下載
        </Button>
        {reportLink && (
          <Button
            size="small"
            component={MuiLink}
            href={reportLink}
            target="_blank"
            startIcon={<SecurityIcon />}
          >
            安全性檢測證書
          </Button>
        )}
      </CardActions>
    </>
  );
};
