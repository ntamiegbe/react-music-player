import { Link } from "react-router-dom";

const SongCard = ({ song, data }) => {

  return (
    <div className="flex flex-col w-[250px] p-7 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg hover:opacity-60">
      <div className="relative w-full h-60 group">
        <img src={song.item.header_image_url} alt="" />
      </div>

      <div className="mt-12 flex flex-col">
        <Link to={`/songs/${song.item.id}/lyrics`}>
          <p className="font-semibold text-white text-lg truncate underline hover:text-yellowGreen">
            {song.item.full_title}
          </p>
        </Link>
          <p className="text-sm truncate text-gray-300 mt-1">
            {song.item.artist_names}
          </p>
      </div>
    </div>
  )
};

export default SongCard;
