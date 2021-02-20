import React, { useState } from "react";

//import Styles
import "./styles/app.scss";

//adding components
import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";
import Nav from "./components/nav";

//import utilities
import data from "./util";

function App() {
  //Ref

  //Creating States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongs={setSongs}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
