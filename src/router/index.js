import Vue from 'vue'
import Router from 'vue-router'
import Choose from '../components/Choose.vue'
import MathComponent from '../components/MathComponent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Choose',
            component: Choose
        },
        {
            path: '/math',
            name: 'Math',
            component: MathComponent
        }
    ]
})