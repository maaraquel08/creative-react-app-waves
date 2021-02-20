import React from "react";
import styled from "styled-components";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <StyledSongContainer>
      <img
        className={isPlaying ? "rotateSong" : ""}
        alt={currentSong.name}
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </StyledSongContainer>
  );
};

const StyledSongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    border-radius: 50%;
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotateSong {
    animation: rotate 20s linear forwards infinite;
  }

  @media screen and (max-width: 768px) {
    .song-container {
      img {
        width: 60%;
      }
    }
  }
`;

export default Song;
