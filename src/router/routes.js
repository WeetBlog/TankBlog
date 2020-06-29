import Home from '../views/Home'
import Blog from '../views/Blog'

export default [
    {
        path: '/home',
        component: Home,
        meta: {
            isHide: true
        }
    },
    {
        path:'/blog',
        component : Blog,
    },
    {
        path:'/',
        redirect: '/home',
    }
]