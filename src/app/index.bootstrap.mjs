import m from 'mithril';

const root = document.body;
const Home = {
    view() {
        return <h2>Home component <br/> <a href="#!/portfolio">portfolio</a></h2>
    }
};

const Portfolio = {
    view() {
        return <h2>Portfolio component <br/>  <a href="#!/home">home</a></h2>
    }
};

const subRouter = m.route
// http://brianerdelyi.com/
m.route(root, "/home", {
    "/home": Home,
    "/portfolio": Portfolio,
});