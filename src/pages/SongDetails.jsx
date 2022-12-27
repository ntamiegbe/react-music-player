import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";
import { useGetSongLyricsQuery } from "../redux/services/spotify";

const SongDetails = () => {
    const { songid } = useParams()
    const { data, isFetching } = useGetSongLyricsQuery({ songid })


    return (
        <div className="flex flex-col">
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics</h2>

                <div className="mt-5"><p className="text-white text-base my-1">Lyrics body</p></div>
            </div>
        </div>
    )
}

export default SongDetails;
