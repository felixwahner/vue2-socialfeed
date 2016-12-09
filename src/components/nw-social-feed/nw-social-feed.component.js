'use strict';

import './nw-social-feed.styles.scss';
import template from './nw-social-feed.template.html';
import { mapGetters } from 'vuex';

import SocialApi from '../../services/social-api';
import NwFeedItem from './nw-feed-item/nw-feed-item.component';
import lng from '../../config/langconstants';

const socialApi = new SocialApi();

export default {
    name: 'nw-social-feed',
    template,
    components: {
        NwFeedItem
    },
    data : function() {
        return {
            lng : lng,
            perpage : 5
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
            'posts',
            'currentPage'
        ]),
        currentPagePosts : function() {
            let allPosts = this.posts.slice(0),
                start = this.perpage*(this.currentPage-1);
            return allPosts.slice(start, (start+this.perpage >= this.posts.length ? this.posts.length : (start+this.perpage)));
        },
        allRecordsNum : function() {
            return this.posts.length || 0;
        },
    }
};	