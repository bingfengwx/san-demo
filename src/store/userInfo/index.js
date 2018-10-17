import { store } from 'san-store';
import { updateBuilder } from 'san-update/index';  //为了兼容低版本IE, 需要引入san-update/index。在低版本IE中，在san-update下找不到updateBuilder
import * as actionNames from './action-name';

store.addAction(actionNames.INIT, function() {
    return updateBuilder().set('userInfo.name', 'World');
});

store.addAction(actionNames.SET_NAME, function(name) {
    return updateBuilder().set('userInfo.name', name);
});