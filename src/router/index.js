import Vue from 'vue'
import Router from 'vue-router'
import Choose from '../components/Choose.vue'
import MathComponent from '../components/MathComponent.vue'
import YearComponent from '../components/YearComponent.vue'
import TriviaComponent from '../components/TriviaComponent.vue'
import DateComponent from '../components/DateComponent.vue'

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
        },
        {
            path: '/trivia',
            name: 'Trivia',
            component: TriviaComponent
        },
        {
            path: '/year',
            name: 'Year',
            component: YearComponent
        },
        {
            path: '/date',
            name: 'Date',
            component: DateComponent
        }
    ]
})