import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Services from '@/components/Services';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        page: Home,
        footer: Footer,
      },
    },
    {
      path: '/contact',
      components: {
        header: Header,
        page: Contact,
        footer: Footer,
      }
    },
    {
      path: '/services',
      components: {
        header: Header,
        page: Services,
        footer: Footer,
      }
    }
  ]
});
