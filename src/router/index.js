import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Services from '@/components/Services';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: '/services',
          name: 'Services',
          component: Services,
        }
      ]
    // {
    //   path: '/Contact',
    //   name: 'Home',
    //   components: {
    //     default: Contact,
    //     header: Header,
    //     footer: Footer,
    //   }
    // },
    // {
    //   path: '/Services',
    //   name: 'Home',
    //   components: {
    //     default: Services,
    //     header: Header,
    //     footer: Footer,
    //   }
    },
  ],
});
