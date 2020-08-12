import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import Logout from './components/Logout.vue'
import Services from './components/Services.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    {path: '/logout', component: Logout},
    {path: '/services', component: Services}

];