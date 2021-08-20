import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Button } from "../Button";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Navbar extends Component {
  state = { clicked: false, hamOpen: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleChange = () => {
    this.setState({ hamOpen: !this.state.hamOpen });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.hamOpen ? (
          <nav className={this.state.hamOpen ? "NavbarItems active" : "NavbarItems"}>
            <h1 className="navbar-logo">
              Coding Club 
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index} style={{ paddingBottom: "2rem" }}>
                    <Link to={item.url} className={item.cName} >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index} style={{ paddingBottom: "2rem" }}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index} style={{ paddingBottom: "2rem" }}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index} style={{ paddingBottom: "2rem" }}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul>
            <Button>Sign Up</Button>
            </ul>
          </nav>
        ) : (
          <Grid container alignItems="center" justifyContent="center">
            <button className="btnham" onClick={this.handleChange}>
              <i className="fas fa-bars"></i>
            </button>
            <svg
              viewBox="0 0 200 90"
              style={{ marginTop: "-38%", zIndex: "1", opacity: "1" }}
              className="shape"
            >
              <defs>
                <linearGradient id="grad">
                  <stop stop-color="#04619f" />
                  <stop offset="60%" stop-color="black" />
                </linearGradient>
              </defs>
              <path fill="url(#grad)" d="  M 0,50 C 0,100  200,100  200,50 " />
            </svg>
          </Grid>
        )}
      </div>
    );
  }
}

export default Navbar;
