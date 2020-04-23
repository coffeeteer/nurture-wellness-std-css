import Home from "./components/pages/Home.vue";
import Home2 from "./components/pages/Home-2.vue";
import Massage from "./components/pages/Massage.vue";
import Yoga from "./components/pages/Yoga.vue";
import Acupuncture from "./components/pages/Acupuncture.vue";
import Contact from "./components/pages/Contact.vue";


export const routes = [
    {path: '/', component: Home },
    {path: '/home-2', component: Home2 },
    {path: '/massage', component: Massage},
    {path: '/yoga', component: Yoga},
    {path: '/acupuncture', component: Acupuncture},
    {path: '/contact', component: Contact}
]