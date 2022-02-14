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
export const patchPlaylist = (playlist, id) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/playlists/${id}`,
        data: { playlist },
    })
}
export const deletePlaylist = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${id}`,
    })
}