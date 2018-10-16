import { store } from 'san-store';
import { updateBuilder } from 'san-update/index';
import * as actionNames from './action-name';

store.addAction(actionNames.INIT, function() {
    return updateBuilder().set('userInfo.name', 'World');
});

store.addAction(actionNames.SET_NAME, function(name) {
    return updateBuilder().set('userInfo.name', name);
});