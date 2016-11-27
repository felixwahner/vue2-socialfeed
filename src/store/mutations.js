// define the possible mutations that can be applied to our state
const mutations = {
    // ------------------------ POSTS ------------------------ 
    SET_POSTS: function(state, data) {
        state.posts = data;
    },
    UNSET_POSTS: function(state) {
        state.posts = [];
    },
    // ------------------------ ERRORS ------------------------ 
    ADD_ERROR: function(state, data) {
        var errors = state.errors.slice(0);
        errors.push(data);
        state.errors = errors;
    },
    REMOVE_ERROR: function(state, id) {
        state.errors = state.errors.filter(err => {
            return err.id !== id;
        });
    },
    UNSET_ERRORS: function(state) {
        state.errors = [];
    }
}

export default mutations;