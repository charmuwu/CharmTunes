export const fetchSongs = () => {
    return $.ajax({
        method: "GET",
        url: '/api/songs'
    })
}
export const fetchSong = songId => {
    return $.ajax({
        method: "GET",
        url: `/api/songs/${songId}`
    })
}