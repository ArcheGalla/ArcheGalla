import './Header.sss';

export class Header {
	constructor(){
		console.log("In header constructor");
	}

    view() {
        return (
            <header className="header">
                <h2>Hello this is header</h2>
            </header>
        )
    }
}