import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from '../redux/services/spotify'

const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery()

    if (isFetching) return <Loader title="Loading Songs ..." />
    if (error) return <Error />

    return (
        <div className="flex flex-col">
            <div className="flex justify-center w-full items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="text-yellowGreen font-bold text-2xl text-left">Discover</h2>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data.response.chart_items?.map((song, i) => (
                    <SongCard
                        key={song.item.id}
                        song={song}
                        i={i}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
}

export default Discover;
