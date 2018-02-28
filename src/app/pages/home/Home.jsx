import {Layout} from 'layout/Layout';

export class Home {
    view(){
        return (
			<Layout>
				<h2>Hello thia is home page. <a href="#!/portfolio">portfolio</a></h2>
			</Layout>
    	)
    }
}