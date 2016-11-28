'use strict';

import './nw-error-item.styles.scss';
import template from './nw-error-item.template.html';

export default {
    template,
    name: 'nw-error-item',
    props : {
        error: Object
    },
    methods : {
        removeError : function(id) {
            this.$store.dispatch('removeError', id);
        }
    }
};	