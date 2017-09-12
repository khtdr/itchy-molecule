const actions = require('../actions/counter-actions');

module.exports = function counter(state, action) {
    state = state || 0;
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1;
        default:
            return state;
    }
};