import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import cheerio from 'cheerio';
import axios from 'axios';
import styled from 'styled-components';
import { FAQPageJsonLd } from 'next-seo';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import FooterBar from '../src/FooterBar';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ReactMarkdown from 'react-markdown';
import MuiLink from '@mui/material/Link';

import { TopSticker } from '../src/TopSticker';

interface Props {
  article: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const res = await axios.get('https://hackmd.io/s/how-to-create-book')

  return {
    props: {
      article: '',
    },
  };

  // const res = await axios.get(
  //   'https://hackmd.io/@jzAV4dxpRviFxKd2XnW_9g/H1ouseub3',
  // );

  // const $ = cheerio.load(res.data);
  // const doc = $('#doc').html();

  // // console.log(doc)

  // if (!doc) throw new Error('not found doc');

  // const escapedHTML = doc
  //   .replace(/&lt;br \/&gt;/g, '<br />')
  //   .replace(/&gt;/g, '>');

  // return {
  //   props: {
  //     article: escapedHTML,
  //   },
  // };
};

const Faq: React.FC<Props> = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        {/* <Typography variant="h4" component="h1" marginBottom={8}>
          TICKET.Ninja - 常見問題
        </Typography> */}

        <FooterBar />
        <MarkdownWrap>
          <ReactMarkdown
            children={article}
            linkTarget="_blank"
            components={{
              // p: ({ node, ...props }) => (
              //   <Typography variant="body1" component="p" {...props} />
              // ),
              // a: ({node, ...props}) => <Button variant="text" component="a" color="secondary" {...props} />
              a: ({ node, ...props }) => (
                <MuiLink underline="none" color="secondary" {...props} />
              ),
              img: ({ node, ...props }) => <img loading="lazy" {...props} />,
            }}
          />

          {/* components={{
    // Map `h1` (`# heading`) to use `h2`s.
    h1: 'h2',
    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />
  }} */}
        </MarkdownWrap>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
      {/* <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'How long is the delivery time?',
            acceptedAnswerText: '3-5 business days.',
          },
          {
            questionName: 'Where can I find information about product recalls?',
            acceptedAnswerText: 'Read more on under information.',
          },
        ]}
      /> */}
    </Container>
  );
};

const MarkdownWrap = styled.div`
  max-width: 760px;
  padding-bottom: 80px;
  min-height: calc(100% - 160px);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  word-break: break-word;

  h1 {
    margin-bottom: 44px;
  }

  h2 {
    margin: 32px 0;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin: 32px 0;
  }

  p {
    margin-top: 16px;
    margin-bottom: 16px;
    /* font-size: 14px; */
    font-weight: 400;
  }

  li {
    font-size: 16px;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: auto;
    margin: 16px 0;
  }

  code {
    padding: 3px;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0 2px;
    font-size: 90%;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    color: #00acc1;
  }

  blockquote {
    font-size: 16px;
    padding: 0 1em;
    color: #607d8b;
    border-left: 0.25em solid #ddd;
    margin-left: 4px;
  }
`;

export default Faq;
