import {router} from 'san-router';

import Home from '../views/Home';
import Page1 from '../views/Page1';

router.add({rule: '/', Component: Home, target: 'router-view'}); 
router.add({rule: '/page1', Component: Page1, target: 'router-view'});

// router.setMode('html5');

export default router;