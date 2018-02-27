import {bootstrap} from './index.router.mjs';

bootstrap().then(function () {
    if (NODE_ENV === 'development') {
        console.log('App is started ...');
    }
});