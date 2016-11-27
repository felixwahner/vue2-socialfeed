'use strict';

import Vue from 'vue';
import axios from 'axios';

class SocialApi {
    /**
     *  Fetches all Posts 
     * @returns {Promise} the request
     **/
    get posts() {
        return axios.get(window.nwSocialFeedDataUrl);
    }

};

export default SocialApi;
