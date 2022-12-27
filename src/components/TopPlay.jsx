import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";

import { useGetAlbumChartsQuery, useGetArtistsChartsQuery } from '../redux/services/spotify'

import 'swiper/css'
import 'swiper/css/free-mode'

const AlbumCard = ({ album, i }) => (
  <div className="w-full flex flex-row items-center py-2 p-4 rounded-lg cursor-pointer">
    <h3 className="font-bold text-base text-white mr-4">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img src={album.item.image_url} alt="" className="w-20 h-20 rounded-lg"/>
      <div className="flex flex-1 flex-col justify-center mx-3">
        <p className="text-xl font-bold text-white">Album Title</p>
        <p className="text-base text-white mt-1">Artist</p>
      </div>
    </div>
    {album.item.name}
  </div>
)

const TopPlay = () => {
  const albumData = useGetAlbumChartsQuery()
  const artistData = useGetArtistsChartsQuery()
  const divRef = useRef(null)
  // const test = albumData.data.response.chart_items
  // const artists = artistData.data.response.chart_items
  // console.log(test2);

  useEffect(() => {
    divRef.current.scrollIntoView({ behaviour: 'smooth' })
  })

  // const topAlbums = test.slice(0, 5)
  // console.log(topAlbums);

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 mt-[4rem] flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-yellowGreen my-4 text-2xl font-bold">Top Albums</h2>
          <p className="text-yellowGreen text-base cursor-pointer">See More</p>
        </div>
        <div>
          {/* {topAlbums.map((album, i) => (
            <AlbumCard
              album={album}
              i={i}
            />
          ))} */}
        </div>
      </div>

      <div className="flex flex-col w-full mt-10">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-yellowGreen my-4 text-2xl font-bold">Top Artists</h2>
          <p className="text-yellowGreen text-base cursor-pointer">See More</p>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {/* {artists.map((artist, i) => (
            <SwiperSlide
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
              key={i}
            >
              <img src={artist.item.image_url} alt="" className="rounded-full w-full object-cover"/>
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay;
