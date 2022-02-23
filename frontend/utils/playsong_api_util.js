export const fetchPlaysongs = playlistId => {
    return $.ajax({
        method: "GET",
        url: `/api/playlist_songs/${playlistId}`
    })
}
// export const fetchPlaysong = playsongId => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/playlists_songs/${playsongId}`
//     })
// }
export const postPlaysong = playsong => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlists_songs',
        data: { playsong },
    })
}
export const deletePlaysong = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists_songs/${id}`,
    })
}