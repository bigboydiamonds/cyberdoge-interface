import styled from "styled-components";
import CyberDoge_Background from '../assets/cyberdoge-bg.jpg';
import { StyledLink } from "../theme/components";
import { TEXT } from "../theme/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto auto auto auto;
  flex: 1;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px auto auto auto;
`;

const ExternalButton = styled.button`
  background: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.white};
  box-shadow: none;
  border: none;
  border-radius: 8px;
  height: 48px;
  width: 200px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  margin: 8px auto;
`;

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  color: ${({ theme }) => theme.text1};
  letter-spacing: 3px;
`;

const TwitterLink = styled(StyledLink)`
  color: ${({ theme }) => theme.text1};
`
const OpenSeaLink = styled(StyledLink)`
  color: #f2f2f2;
`;

const CustomArtwork = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${CyberDoge_Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
`

export function Home() {
  return (
    <Container>
      <Window>
        <Title>CYBERDOGES</Title>
        <TEXT.SmallBody m={'auto'}>
          Created by &nbsp;
          <TwitterLink href={'https://twitter.com/paintedbynarz'}>
            narz.eth
          </TwitterLink>
        </TEXT.SmallBody>
        <ExternalButton>
          <OpenSeaLink href={'https://opensea.io/collection/cyber-doges'}>
            View on OpenSea
          </OpenSeaLink>
        </ExternalButton>
        <CustomArtwork />
      </Window>
    </Container>
  )
}