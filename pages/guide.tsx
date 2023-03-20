import * as React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios'
// import * as htmlparser2 from "htmlparser2";
import styled from 'styled-components'
import cheerio from "cheerio";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import ReactMarkdown from 'react-markdown'
import FooterBar from '../src/FooterBar';

interface Props {
  article: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {

  // const res = await axios.get('https://hackmd.io/s/how-to-create-book')

  const res = await axios.get('https://hackmd.io/@jzAV4dxpRviFxKd2XnW_9g/S1a1s6Veh')

  const $ = cheerio.load(res.data)

  const doc = $('#doc').html();

  if (!doc) throw new Error('not found doc')

  return {
    props: {
      article: doc,
    },
  };
};

const About: React.FC<Props> = ({ article }) => {
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
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="subtitle1" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        {/* <p>{article}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: article }} /> */}
        <MarkdownWrap>
          <ReactMarkdown children={article} />
        </MarkdownWrap>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <FooterBar />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

const MarkdownWrap = styled.div`
  max-width: 760px;
  padding-bottom: 80px;
  min-height: calc(100% - 160px);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  img {
    width: 100%;
    height: auto;
  }
`

export default About;
