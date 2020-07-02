import Home from '../views/Home'
import Blog from '../views/Blog'
import Message from '../views/Message'
import DateRecording from '../views/DateRecording'

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
        path:'/record',
        component : DateRecording,
    },
    {
        path:'/',
        redirect: '/home',
    }
]