export const fetchPlaysongs = playlistId => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}/playsongs`
    }) //what should be the frontend route in order to
    //pass the playlist id?
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
export const destroyPlaysong = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists_songs/${id}`,
    })
}