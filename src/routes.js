import Home from "./components/pages/Home.vue";
import Massage from "./components/pages/Massage.vue";
import Yoga from "./components/pages/Yoga.vue";
import Acupunture from "./components/pages/Acupunture.vue";
import Contact from "./components/pages/Contact.vue";


export const routes = [
    {path: '/', component: Home },
    {path: '/massage', component: Massage},
    {path: '/yoga', component: Yoga},
    {path: '/acupuncture', component: Acupunture},
    {path: '/contact', component: Contact}
]