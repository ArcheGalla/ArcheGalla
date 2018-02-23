import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';


export function bootstrap(){
    return new Promise(function(resolve){
        m.route(
            document.body,
            "/home", {
                "/home": Home,
                "/portfolio": Portfolio,
            }
        );

        resolve();
    });
}
