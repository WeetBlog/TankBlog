import Home from '../views/Home'
import Blog from '../views/Blog'
import Message from '../views/Message'
import DateRecording from '../views/DateRecording'
import Friends from '../views/Friends'
import Aboutme from '../views/Aboutme'

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
        path:'/friends',
        component : Friends,
    },
    {
        path:'/aboutme',
        component : Aboutme,
    },
    {
        path:'/',
        redirect: '/home',
    }
]