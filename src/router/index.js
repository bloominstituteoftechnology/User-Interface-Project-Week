import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

import Layout from '@/components/Layout';
import Contact from '@/components/Contact';
import Services from '@/components/Services';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
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
    },
  ],
});
