'use strict';

import './assets/styles/main.scss';

import Vue from 'vue';
import store from './store';
import NwSocialFeed from './components/nw-social-feed/nw-social-feed.component';

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

