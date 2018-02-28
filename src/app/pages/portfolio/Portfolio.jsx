import {Layout} from 'layout/Layout';

export class Portfolio {
    view(){
        return(
            <Layout>
                <section>Hello from Portfolio !</section>
                <section><a href="#!/home">home</a></section>
            </Layout>
        );
    }
};