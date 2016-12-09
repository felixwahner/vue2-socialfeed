'use strict';
export default {
    posts: state => {
        return state.posts;
    },
    errors: state => {
        return state.errors;
    },
    currentPage: state => {
        return typeof state['nw-feed-item'] === 'undefined' ? 1 : state['nw-feed-item'].page;
    }
};