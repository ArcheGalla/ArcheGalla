import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export class Home {
    view(){
        return(
            <div>
                <Header></Header>
                <section>Welcome to home page</section>
                <section><a href="#!/portfolio">portfolio</a></section>
                <Footer></Footer>
            </div>
        )
    }
}