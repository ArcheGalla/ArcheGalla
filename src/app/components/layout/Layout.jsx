import {Header} from 'header/Header';
import {Footer} from 'footer/Footer';
import './Layout.sss';

export class Layout {
    view() {
        return (
            <div>
                <Header></Header>
                <h2>Layout is here </h2>
                <Footer></Footer>
            </div>
        )
    }
}