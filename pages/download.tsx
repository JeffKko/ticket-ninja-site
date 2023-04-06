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

interface CardProps {
  platform: string;
  version: string;
  date: string;
  fileName: string;
  link: string;
}

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
        <Typography variant="h4" component="h1" marginBottom={8}>
          TICKET.Ninja - 檔案下載
        </Typography>
        <FooterBar />

        <Box display="flex" alignItems="center" mt={8} mb={4}>
          <NewReleasesIcon />
          <Typography variant="h5" component="h3" mr={1} marginLeft={2}>
            0.1.0-beta.3
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

        <Box display="flex" alignItems="center" mt={8} mb={4}>
          <HistoryIcon />
          <Typography variant="h5" component="h3" mr={1} marginLeft={2}>
            0.1.0-beta.2
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
        <Box display="flex" alignItems="center" mt={8} mb={4}>
          <HistoryIcon />
          <Typography variant="h5" component="h3" mr={1} marginLeft={2}>
            0.1.0-beta.1
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
          <Typography variant="h5" component="div">
            {platform}
          </Typography>
        </Box>
        {/* <Typography variant="h5" component="div">
          <AppleIcon sx={{ margin: '0 16px 0 0', lineHeight: '1.334' }} />
          {platform}
        </Typography> */}
        {/* <Typography variant="h5" component="div">
          <AppleIcon sx={{ margin: '0 16px 0 0', lineHeight: '1.334' }} />
          {platform}
        </Typography> */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {version}
        </Typography>
        <Typography variant="body2">{fileName}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={MuiLink} href={link} target="_blank">
          檔案下載
        </Button>
      </CardActions>
    </>
  );
};
