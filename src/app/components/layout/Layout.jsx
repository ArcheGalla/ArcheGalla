import './Layout.sss';

import {Header} from 'header/Header';
import {Footer} from 'footer/Footer';

export class Layout {
    view(vnode) {
        return (
            <div className="layout">
        		<Header></Header>
        			<div>
        				{vnode.children}
        			</div>	
        		<Footer></Footer>
            </div>
        )
    }
}