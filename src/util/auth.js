import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedTokenExpirationData = localStorage.getItem('expiration');
    const expirationData = new Date(storedTokenExpirationData)
    const now = new Date()

    const duration = expirationData.getTime() - now.getTime()
    return duration
}

export function getAuthToken() {
    let token = localStorage.getItem('accessToken')

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration()

    if (tokenDuration <= 0) {
        return 'EXPIRED'
    }

    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken()

    if (!token) {
        return redirect('/login')
    }

    return null
}

export function checkAuthTrueLoader() {
    const token = getAuthToken()

    if (token) {
        return redirect('/')
    }

    return null
}