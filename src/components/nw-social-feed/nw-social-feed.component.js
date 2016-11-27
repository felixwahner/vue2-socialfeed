'use strict';

import './nw-social-feed.styles.scss';
import template from './nw-social-feed.template.html';
import { mapGetters } from 'vuex';

import SocialApi from '../../services/social-api';
import NwFeedItem from './nw-feed-item/nw-feed-item.component';
import NwErrors from './nw-errors/nw-errors.component';
import lng from '../../config/langconstants';

const socialApi = new SocialApi();

export default {
    name: 'nw-social-feed',
    template,
    components: {
        NwFeedItem,
        NwErrors
    },
    data : function() {
        return {
            lng : lng
        }
    },
    methods: {
        getData: function() {
            socialApi.posts
            .then(res => {
                this.$store.dispatch('setPosts', res);    
            }).catch(err => {
                this.$store.dispatch('addError', {
                    type: 'critcial',
                    message: lng.errors.CONNECTION_ISSUES
                });
            });
        }
    },
    mounted: function() {
        this.getData();
    },
    computed : {
        ...mapGetters([
            'posts'
        ])
    }
};	