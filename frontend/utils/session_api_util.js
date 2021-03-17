export const postUser = user => {//signup
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
    })
}

export const postSession = (user) => {//login
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user },
    })
}

export const deleteSession = () => { //logout
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
}
