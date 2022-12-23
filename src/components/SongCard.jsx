import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch()

  const handlePlayClick = () => {
    dispatch(playPause(true))
    dispatch(setActiveSong({song, data, i}))
  }
  
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  return (
    <div className="flex flex-col w-[250px] p-7 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:opacity-60">
      <div className="relative w-full h-60 group">
        {/* <div className={`absolute inset-0 justify-center items-center group-hover:flex ${activeSong?.title === song.title ? 'flex' : 'hidden'}`}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div> */}
        <img src={song.item.header_image_url} alt="" />
      </div>

      <div className="mt-12 flex flex-col">
        <Link to={`/songs/${song.item.id}/lyrics`}>
          <p className="font-semibold text-white text-lg truncate underline hover:text-yellowGreen">
            {song.item.full_title}
          </p>
          <p className="text-sm truncate text-gray-300 mt-1">
            {song.item.artist_names}
          </p>
        </Link>
      </div>
    </div>
  )
};

export default SongCard;
