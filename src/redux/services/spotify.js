import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '427c46f0f9msh1dfe1399473d850p12e63ejsn21e3dbd0a86d',
//         'X-RapidAPI-Host': ''
//     }
// }

// fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/chart', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '427c46f0f9msh1dfe1399473d850p12e63ejsn21e3dbd0a86d')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/songs/chart?time_period=month&per_page=40'
        }),
        getArtistsCharts: builder.query({
            query: () => '/artists/chart?time_period=month&per_page=10'
        }),
        getAlbumCharts: builder.query({
            query: () => '/albums/chart?time_period=month&per_page=10'
        }),
        getSongLyrics: builder.query({
            query: (songid) => `songs/${songid}/lyrics`
        })
    })
})

export const {
    useGetTopChartsQuery,
    useGetArtistsChartsQuery,
    useGetAlbumChartsQuery,
    useGetSongLyricsQuery,
} = spotifyApi

 