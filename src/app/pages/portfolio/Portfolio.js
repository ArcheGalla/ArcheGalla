import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export class Portfolio {
    view(){
        return(
            <div>
                <Header></Header>
                <section>Hello from Portfolio !</section>
                <section><a href="#!/home">home</a></section>
                <Footer></Footer>
            </div>
        );
    }
};