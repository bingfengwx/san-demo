import { store } from 'san-store';
import { updateBuilder } from 'san-update/index';
import * as actions from './action-name';

store.addAction(actions.INIT, function() {
    return updateBuilder().set('userInfo.name', 'World');
});

store.addAction(actions.SET_NAME, function(name) {
    return updateBuilder().set('userInfo.name', name);
});