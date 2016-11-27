'use strict';

import './nw-feed-item.styles.scss';
import template from './nw-feed-item.template.html';

export default {
    template,
    name: 'nw-feed-item',
    props : {
        post: Object
    }
};	