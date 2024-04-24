import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TopSticker } from './TopSticker';
import FooterBar from './FooterBar';

export default function Standby() {
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
        <br />
        <br />
        <Typography variant="body1" color="text.secondary">
          「風魔黨又出現了，只要我們團結，我就會要了這個迷失國家的腐敗領導的命，他們也滲透警界了。」
        </Typography>
        <Typography variant="body1" color="text.secondary">
          「新的忍者威脅出現了，我要你回來履行職責，但我們現在只是一個普通的家庭，我只想當一個普通人。」
        </Typography>
        <Typography variant="caption" color="text.secondary">
          --取自 Netflix 影集《忍者之家》
        </Typography>
        <br />
        <br />
        <Typography variant="h4">《忍者之家》在講什麼？故事劇情介紹</Typography>
        <Typography variant="body1" color="text.secondary">
          經營清酒廠的俵家是極其普通的日本家庭，老頑固父親俵壯一（江口洋介飾）苦撐著搖搖欲墜的清酒廠；母親俵洋子（木村多江飾）是苦惱家計的家庭主婦；小女兒俵凪（蒔田彩珠飾）是想出風頭的普通女大學生；小兒子俵陸則還是天真爛漫的小學生；二兒子俵晴做著沒有未來的自販機補貨工作，抗拒著父親壯一要求接班清酒廠的期望。但是六年前俵家不是這樣的，他們全家都是為政府進行祕密任務的忍者，但當長子俵岳在任務中死亡，這家人放棄了忍道與忍者的身份，試圖恢復成一個普通的家庭……但一件離奇的遊艇死亡事件，將迫使這個破碎的家庭再度踏上忍者之路。
        </Typography>
        <Typography variant="h4">
          讓日劇粉大飽眼福的《忍者之家》豪華演員陣容
        </Typography>
        <Typography variant="body1" color="text.secondary">
          為了達到這個目標，《忍者之家》的國家隊陣容堅強，演技多變的木村多江要飾演家庭主婦忍者並非難事，她飾演的洋子很明顯並不享受這種被迫退休的生活，當她有機會重出江湖，看得出她在扮裝成不同身份潛入調查時是樂在其中──觀眾幾乎都能感受到木村本人應該很享受這次工作經驗；而江口洋介飾演忍者，帥勁壓根讓人無法信服他的角色為何那麼急著接班。
          <br />
          此外，包括吉岡里帆、山田孝之、老戲骨宮本信子（其實梶芽衣子更適合這個角色）、高良健吾、田口智朗、柄本時生等等，全是日劇界的熟面孔，甚至連因使用毒品被逐出日本演藝圈的皮耶爾瀧（ピエール瀧），都能在此插花演出，對喜愛日劇的觀眾而言，可謂大飽眼福。
        </Typography>
        <Typography variant="h4">《忍者之家》開箱心得</Typography>
        <Typography variant="body1" color="text.secondary">
          韓劇在各大串流平台上的成功有目共睹，征服了全世界不同地區的觀眾。不再是必追首選的日劇，這兩年加速了接軌國際的腳步，洋製和骨的《忍者之家》，至少證明了它的娛樂效果，有刺激的劍鬥、忍者華麗的動作、還有夾雜現代與古典的日本之美——更別提整部影集是以電影規格拍攝。不管忍者是否仍然是你未來的就職首選，你都可以享受《忍者之家》帶來的樂趣。
        </Typography>
      </Box>
    </Container>
  );
}
