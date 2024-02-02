import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Result {
  name: string;
  pass: boolean;
  data: string;
  reason: string;
}

interface TestLog {
  results: Result[];
  allPass: boolean;
  time: string;
  timestamp: number;
}

export default function StatusDrawer({
  isShow,
  onClose,
}: {
  isShow: boolean;
  onClose: () => void;
}) {
  const [testLogs, setTestLogs] = useState<TestLog | null>(null);
  const rows = [
    {
      name: 'jeff',
      age: 16,
    },
  ];

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<TestLog>(
        'https://rich-kko.de.r.appspot.com/api/v1/ticketninja/test/status',
      );

      if (!data) return;

      setTestLogs(data);
    })();
  }, []);

  return (
    <>
      <Drawer
        sx={{ mt: 6, mb: 3 }}
        color="text.secondary"
        anchor="right"
        open={isShow}
        onClose={onClose}
      >
        <Box
          sx={{
            py: 4,
            px: 2,
          }}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 340,
                '@media only screen and (max-width: 768px)': {
                  minWidth: 240,
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>監控項目</TableCell>
                  <TableCell align="center" width={100}>
                    檢測結果
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  key={'1'}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    驗證碼辨識
                  </TableCell>
                  <TableCell align="center">
                    {testLogs?.results?.find(
                      v => v.name === 'check OCR function api',
                    )?.pass
                      ? '🟢'
                      : '🔴'}
                  </TableCell>
                </TableRow>
                <TableRow
                  key={'2'}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    訂票流程
                  </TableCell>
                  <TableCell align="center">
                    {testLogs?.allPass ? '🟢' : '🔴'}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              py: 4,
            }}
          >
            <Typography variant="body2" gutterBottom>
              🟢 表示服務穩定
            </Typography>
            <Typography variant="body2" gutterBottom>
              🔴 表示服務異常
            </Typography>
          </Box>
          {testLogs && (
            <Box>
              <Typography variant="body2" gutterBottom>
                最後檢測時間：
              </Typography>
              <Typography variant="body2" gutterBottom>
                {new Date(testLogs.timestamp * 1000).toLocaleString()}
              </Typography>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
}
