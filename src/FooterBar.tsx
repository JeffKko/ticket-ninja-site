import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Link from './Link';
import InfoIcon from '@mui/icons-material/Info';

export default function ProTip() {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button
        variant="text"
        component={Link}
        href="/faq/"
        color="secondary"
        startIcon={<QuestionAnswerIcon />}
      >
        常見問題
      </Button>
      ．
      <Button
        variant="text"
        component={Link}
        href="/guide/"
        color="secondary"
        startIcon={<DescriptionIcon />}
      >
        使用說明
      </Button>
      ．
      <Button
        variant="text"
        component={Link}
        href="/download/"
        color="secondary"
        startIcon={<DownloadForOfflineIcon />}
      >
        檔案下載
      </Button>
      ．
      <Button
        variant="text"
        component={Link}
        href="/about/"
        color="secondary"
        startIcon={<InfoIcon />}
      >
        關於我們
      </Button>
    </Box>
  );
}
