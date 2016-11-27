'use strict';

import './nw-errors.styles.scss';
import template from './nw-errors.template.html';
import NwErrorItem from './nw-error-item/nw-error-item.component';
import { mapGetters } from 'vuex';

export default {
    name: 'nw-errors',
    template,
    components: {
        NwErrorItem
    },
    computed : {
        ...mapGetters([
            'errors'
        ])
    }
};	