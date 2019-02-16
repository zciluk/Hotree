import React, {Component} from 'react'; 

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__small-line"/>
                <div className="header__big-box">
                    <span className="header__big-box--text">New event</span>
                </div>
            </header>
        );
    }

}
export default Header;