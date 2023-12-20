import { useContext } from 'react';
import {mixtapeContext}  from './Composants/mixtapeContext';
import  {Song}  from './Song';


export default function SongList () {

  const {songs, genre, sortOrder } = useContext(mixtapeContext);
  return (
    <>
        <h2>TODO: Update taste in music...?</h2>
        {songs.filter((song) => {
              if (genre === "all") return song;
              return song.genre === genre;
              })
              .sort((older, newer) => {
                if (sortOrder === "ascending") {
                  return older.year - newer.year;
                } else if (sortOrder === "descending") {
                  return newer.year - older.year;
                }
              })
            .map((song, index) => (
              <Song
                key={index}
                artist={song.artist}
                genre={song.genre}
                name={song.name}
                year={song.year}
              />))
    }

    </>
  );
};

 
