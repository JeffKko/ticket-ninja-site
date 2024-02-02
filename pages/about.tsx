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
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Grid from '@mui/material/Unstable_Grid2';

import { TopSticker } from '../src/TopSticker';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import MuiLink from '@mui/material/Link';
import { DiscordIcon } from '../src/Icons';
import { sendEvent } from '../src/ga4';

export default function About() {
  function handleClick(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });

    sendEvent(id);
  }

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
          TICKET.Ninja - 關於我們
        </Typography> */}

        <FooterBar />

        <Box sx={{ paddingBottom: '64px' }}>
          <Grid container spacing={2} rowSpacing={2} width={'90%'}>
            <Grid sm={4} md={4}>
              <Paper sx={{ width: 200, position: 'sticky', top: 0 }}>
                <MenuList dense>
                  <MenuItem onClick={() => handleClick('author')}>
                    <ListItemText>
                      <Typography variant="subtitle1">關於作者</Typography>
                    </ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => handleClick('story')}>
                    <ListItemText>
                      <Typography variant="subtitle1">開發小事</Typography>
                    </ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => handleClick('contact')}>
                    <ListItemText>
                      <Typography variant="subtitle1">聯絡我們</Typography>
                    </ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Grid>
            <Grid sm={8} md={8}>
              <Typography variant="h5" id="author">
                關於作者
              </Typography>
              <Typography variant="body1" color="text.secondary">
                7年開發經驗的前端工程師, 熱愛開發小玩具。
              </Typography>
              <Typography variant="body1" color="text.secondary">
                2022年, 聽完阿妹演唱會後, 愛上了演唱會現場的魅力
              </Typography>
              <Typography variant="body1" color="text.secondary">
                2023年某天, 飲恨搶不到告五人的票, 決定開發自己的搶票小程式,
                並期待周杰倫來台灣開唱的那天, 給自己一個救贖的機會。
              </Typography>
              <br />
              <Typography variant="body1">想更了解作者可以到:</Typography>
              <Button
                variant="text"
                component={Link}
                href="https://www.linkedin.com/in/jeff-kuo/"
                target="_blank"
                color="primary"
                startIcon={<LinkedInIcon sx={{ color: '#9BC9F5' }} />}
              >
                linkedin
              </Button>
              <br />
              <Button
                variant="text"
                component={Link}
                href="https://github.com/JeffKko/"
                target="_blank"
                color="primary"
                startIcon={<GitHubIcon sx={{ color: '#9BC9F5' }} />}
              >
                Github
              </Button>
              <Typography variant="body1">極度偷懶的技術部落格:</Typography>
              <Button
                variant="text"
                component={Link}
                href="https://jeffkko.github.io/blog/"
                target="_blank"
                color="primary"
                startIcon={<RssFeedIcon sx={{ color: '#9BC9F5' }} />}
              >
                Blog
              </Button>
              <Typography variant="h5" id="story">
                開發小事
              </Typography>
              <Typography variant="h6">起源 - 2023年 3月</Typography>
              <Typography variant="body1" color="text.secondary">
                告五人演唱會搶票盛況空前, 搶票失敗的我毅然決然開始動手,
                誓言下次搶票一定要逆襲成功, 開始有想法後最先想到的兩件事:
              </Typography>
              <ul>
                <li>目標是什麼？ </li>
                <li>程式要自己用, 還是可以和朋友分享?</li>
              </ul>
              <Typography variant="body1" color="text.secondary">
                爬了一天資料後發現網路上早有知名的 Max
                大大提供各種不同售票網站的機器人, 免費,
                而且至少精心維護了五年以上, 實在驚為天人. 反覆思考後,
                還是想用自己的開發經驗嘗試做看看一個更好用, 更快,
                更人性化的搶票助手, 畢竟身為一個優秀的 <del>打工仔</del> 工程師,
                程式有沒有人用是其次, 多一個 Side Project
                學習一下也不是件壞事對吧？
              </Typography>
              <Typography variant="body1">最後訂下了目標:</Typography>
              <ul>
                <li>更好用, 更快, 更人性化, 範圍只做到拓元就好</li>
                <li>好東西要和好朋友分享</li>
              </ul>
              <Typography variant="h6">技術選型</Typography>
              <Typography variant="subtitle1">桌面應用程式</Typography>
              <Typography variant="body1">
                Electron
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://www.electronjs.org/"
                >
                  https://www.electronjs.org/
                </MuiLink>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                身為一個前端工程師寫了七年 Javascript, 秉持著我 JS 大宇宙的精神,
                選用了 Electron 當作框架開發桌面 App, Electron
                歷年來已經產出很多優秀的軟體 e.g. Slack, Discord, VS Code, Skype
                ... etc, 穩定性一定是牛B
              </Typography>
              <Typography variant="body1" color="text.secondary">
                選擇 桌面 App 不選用 web 還有一個原因是, 搶票講求速度, web
                發請求會有跨域問題, 繞過跨域經過一層 middleware 速度肯定是變慢,
                而 Electron 可以在 local 起一個 node.js server, 從 local
                端發請求直接給拓元肯定是速度最快, Electron 又能打包成
                Windows/macOS/Linus 多平台, 很適合分享使用
              </Typography>
              <Typography variant="subtitle1">答題 Api</Typography>
              <Typography variant="body1">
                Google Cloud Platform (GCP)
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://cloud.google.com/"
                >
                  https://cloud.google.com/
                </MuiLink>
                <br />
                ChatGPT
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://openai.com/"
                >
                  https://openai.com/
                </MuiLink>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                答題 Api 說白了, 回應就是串接 ChatGPT 的當作參考用, Api Endpoint
                是以前自己就有架在 Google Cloud Platform 上的 Node.js Server,
                為了加快回應速度我將 Api 串接了 Redis, 在 GCP 上是不惜下了重本將
                App Engine 串接了 Memorystore,
                這服務不管有沒有流量都是買一個記憶體在那邊放, 收費有夠貴
              </Typography>
              <Typography variant="subtitle1">驗證碼辨識</Typography>
              <Typography variant="body1">
                ddddocr (node.js)
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://www.npmjs.com/package/ddddocr/"
                >
                  https://www.npmjs.com/package/ddddocr/
                </MuiLink>
                <br />
                ddddocr trainer
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://github.com/sml2h3/dddd_trainer/"
                >
                  https://github.com/sml2h3/dddd_trainer/
                </MuiLink>
                <br />
                Cloud Functions
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://cloud.google.com/functions/"
                >
                  https://cloud.google.com/functions/
                </MuiLink>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                受惠於 Max 大大的經驗, 驗證碼辨識使用了 ddddocr node.js 版本
                (作者是不同人), 後續也用了原作者的訓練工具訓練出新的 model,
                剛好家裡老電腦還是 nvidia 的顯卡可以拿來 train, 原本不會 Python
                也算是漸漸寫出了一點感覺, 這段時間也算是收穫良多, 後續也把新的
                model 部署上 Google 的 Cloud Functions 使用
              </Typography>
              <Typography variant="subtitle1">官方 website</Typography>
              <Typography variant="body1">
                Next.js
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://nextjs.org/"
                >
                  https://nextjs.org/
                </MuiLink>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                技術使用 React 最有名的 SSR 框架: Next.js,
                本以為這個在工作上就已經熟到不行的東西架站應該很快, 殊不知, 從到
                GoDaddy 購買 domain (還買很便宜的一年$69) 到 dns 設定, UX 設計,
                排進度, 寫文案, 上架網站... 也是花了不少時間
              </Typography>
              <Typography variant="subtitle1">UI Framework</Typography>
              <Typography variant="body1">
                mui
                <br />
                <MuiLink
                  target="_blank"
                  color="secondary"
                  href="https://mui.com/"
                >
                  https://mui.com/
                </MuiLink>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                基於 Google Material Design 的 UI Framework, 由 Spotify, Netflix
                ...etc 贊助
              </Typography>
              <Typography variant="h6">2023年 4月</Typography>
              <ul>
                <li>https://ticketninja.club/ 官網上線</li>
                <li>桌面 App 測試版發布</li>
              </ul>
              <Typography variant="h6">2023年 5月</Typography>
              <ul>
                <li>桌面 App v0.1.4 穩定版發布</li>
              </ul>
              <Typography variant="h6">2023年 11月</Typography>
              <ul>
                <li>IVE＆大巨蛋亞錦賽開跑, 社群突破 300 人 🎉 </li>
              </ul>
              <Typography variant="h6">2023年 12月</Typography>
              <ul>
                <li>App 新增場次選擇器功能</li>
              </ul>
              <Typography variant="h6">2024年 1月</Typography>
              <ul>
                <li>App 新增快速登入功能 </li>
                <li>大港開唱, 社群突破 500 人 🎉 </li>
              </ul>
              <Typography variant="body1" color="text.secondary">
                持續更新抓蟲中...
              </Typography>
              <Typography variant="h5" id="contact">
                聯絡我們
              </Typography>
              <Button
                variant="text"
                component={Link}
                href="https://discord.gg/bCUaHhqGcp"
                target="_blank"
                color="primary"
                startIcon={<DiscordIcon />}
              >
                Discord 群組
              </Button>
              <Box
                sx={{ marginLeft: '6px' }}
                display={'flex'}
                alignItems="center"
              >
                <EmailIcon
                  sx={{ marginRight: '8px', color: '#9BC9F5' }}
                  fontSize="small"
                />
                <Typography variant="body2">b3589481400@gmail.com</Typography>
              </Box>
              <Typography variant="h5" id="contact">
                支持我們
              </Typography>
              <a href="https://www.buymeacoffee.com/jeffkko" target="_blank">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  height={60}
                  width={217}
                  // style={{
                  //   height: '60px !important;',
                  //   width: '217px !important;',
                  // }}
                />
              </a>
              <br />
            </Grid>
          </Grid>
        </Box>
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
