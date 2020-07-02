import Home from '../views/Home'
import Blog from '../views/Blog'
import Message from '../views/Message'

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
        path:'/message',
        component : Message,
    },
    {
        path:'/',
        redirect: '/home',
    }
]