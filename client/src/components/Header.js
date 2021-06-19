import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "still deciding";
      case false:
        return "im logged out";
      default:
        return "im logged in";
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a>{this.renderContent()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
