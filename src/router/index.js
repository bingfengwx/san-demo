import {router} from 'san-router';

import Home from '../views/Home';
const Page1 = () => import('../views/Page1');  //异步加载组件，适合大型项目，提高首屏加载速度。

router.add({rule: '/', Component: Home, target: 'router-view'}); 
router.add({rule: '/page1', Component: Page1, target: 'router-view'});

// router.setMode('html5');

export default router;