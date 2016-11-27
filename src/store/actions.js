'use strict';

import SocialApi from '../services/social-api';

const createId = function(state) {  
    let id = false;
    while(!id) {
        let tmpId = "error-" + new Date().getTime(),
            errorCopy = state.errors.slice(0),
            count = errorCopy.filter(itm => {
                return itm.id === tmpId;
            });
        if(count.length > 0) continue;
        id = tmpId;
    }
    return id;
}

export default {

    /**
     * Fetches Social-Posts via the SocialApi 
     **/
    setPosts({ commit, state, dispatch }, payload) {
        commit('SET_POSTS', payload.data);
    },
    /**
     * Adds an Errormessage to the Store
     **/
    addError({ commit, state, dispatch }, payload) {   
        let id = createId(state);
        payload.id = id;
        commit('ADD_ERROR', payload);
    },
    /**
     * Removes an error message from the store
     **/
    removeError({ commit, state, dispatch }, id) {   
        commit('REMOVE_ERROR', id);
    }

};