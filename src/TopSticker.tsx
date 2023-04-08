import * as React from 'react';
import styled from 'styled-components';

const StickerWrap = styled.aside`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 90px 90px 0;
  border-color: transparent #fff transparent transparent;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #292c33;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sticker = styled.a`
  position: absolute;
  top: 6px;
  right: -90px;

  &:hover {
    img {
      filter: none;
    }
  }
`;

const StickerNinja = styled.img`
  filter: brightness(15%);
  transition: filter 1s;
`;

const StickerMask = styled.div`
  width: 127px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(45deg);
  top: 40px;
  right: -97px;
  background-color: #292c33;
`;

export const TopSticker: React.FC = () => {
  return (
    <StickerWrap>
      <Sticker href="https://ticketninja.club/">
        <StickerNinja
          width="64"
          height="64"
          src="../ninja.webp"
          alt="logo"
          loading="lazy"
        />
      </Sticker>
      <StickerMask />
    </StickerWrap>
  );
};
