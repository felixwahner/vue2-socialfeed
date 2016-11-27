// define the possible mutations that can be applied to our state
const mutations = {

    SET_POSTS : function(state, data) {
        state.posts = data;
    },
    ADD_POST : function(state, data) {
        let posts = state.posts.slice(0).push(data);
        state.posts = posts;
    },
    DELETE_POSTS : function() {
        state.posts = [];
    }

}

export default mutations;