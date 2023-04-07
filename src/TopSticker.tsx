import * as React from 'react';
import styled from 'styled-components';

const Sticker = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  position: absolute;
  top: -90px;
  right: -90px;
  transform: rotate(45deg);
  background-color: #fff;

  &:hover {
    cursor: pointer;

    img {
      filter: none;
    }
  }
`;

const StickerNinja = styled.img`
  filter: brightness(15%);
  transition: filter 1s;
  position: absolute;
  bottom: -10px;
`;

export const TopSticker: React.FC = () => {
  return (
    <Sticker href="https://ticketninja.club/">
      <StickerNinja
        width="64"
        height="64"
        src="../ninja.webp"
        alt="logo"
        loading="lazy"
      />
    </Sticker>
  );
};
