import Home from '../views/Home'

export default [
    {
        path: '/Home',
        component: Home,
        meta: {
            isHide: true
        }
    },
    {
        path:'/',
        redirect: '/Home',
    }
]