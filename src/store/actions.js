'use strict';

import SocialApi from '../services/social-api';

const socialApi = new SocialApi();

export default {

    /**
     * Fetches Social-Posts via the SocialApi 
     **/
    getPosts({ commit, state, dispatch }) {
      return socialApi.posts
        .then(res => {
            console.log("GOT JSON", res);
            commit('SET_POSTS', res.data);
            return res;
        }).catch(err => {
          console.log("ERROR", err);
        });
    }
};