export const fetchPlaylists = () => {
    return $.ajax({
        method: "GET",
        url: '/api/playlists'
    })
}
export const fetchPlaylist = playlistId => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}`
    })
}
export const postPlaylist = playlist => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: { playlist },
    })
}
// going to need a patchPlaylist
export const deletePlaylist = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/playlists',
    })
}