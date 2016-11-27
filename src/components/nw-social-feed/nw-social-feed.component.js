'use strict';

import './nw-social-feed.styles.scss';
import template from './nw-social-feed-template.html';
import { mapGetters } from 'vuex';

import NwFeedItem from './nw-feed-item/nw-feed-item.component';

export default {
    name: 'nw-social-feed',
    template,
    components: {
        NwFeedItem
    },
    computed : {
        ...mapGetters([
            'posts'
        ])
    }
};	