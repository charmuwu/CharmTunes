export const postUser = user => {//signup
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
    })
}
export const getUser = userId => {//get user
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`,
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

