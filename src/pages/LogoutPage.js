import { redirect } from 'react-router-dom';

export function action() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('email')
    localStorage.removeItem('uid')
    return redirect('/login');
};
