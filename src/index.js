'use strict';

import './assets/styles/main.scss';

import Vue from 'vue';
import store from './store';
import NwSocialFeed from './components/nw-social-feed/nw-social-feed.component';
import NwIcon from './components/nw-icon/nw-icon.component';
import NwErrors from './components/nw-errors/nw-errors.component';

Vue.component('nw-errors', NwErrors);
Vue.component('nw-icon', NwIcon);
/** 
 * -----------------------------------------
 * ------------ APP BOOTSTRAP -------------- 
 * -----------------------------------------
 */

const App = Vue.extend({
    components: {
        NwSocialFeed
    },
    store,
    replace: false,
    template : `<nw-social-feed></nw-social-feed>`

});

new App().$mount('#nw_social_feed_app');

export default App;

