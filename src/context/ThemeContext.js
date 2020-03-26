import React, { Component, createContext } from "react";

const Context = createContext();

const themeConfig = {
  light: {
    headerBg: "#F7B30C",
    fontColor: "black",
    bodybg: "#ebe3fc",
    layoutbg: "white"
  },
  dark: {
    headerBg: "#3c3c3c",
    fontColor: "white",
    bodybg: "black",
    layoutbg: "#1a181c"
  }
};

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  componentDidMount() {
    const themeLs = localStorage.getItem("theme");

    if (themeLs) {
      const parsedTheme = JSON.parse(themeLs);
      this.setState({
        themeType: parsedTheme,
        theme: themeConfig[parsedTheme]
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeType !== this.state.themeType) {
      localStorage.setItem("theme", JSON.stringify(this.state.themeType));
    }
  }

  toggleTheme = () => {
    const themeKind = this.state.themeType === "dark" ? "light" : "dark";
    this.setState({
      themeType: themeKind,
      theme: themeConfig[themeKind]
    });
  };

  state = {
    themeType: "light",
    theme: themeConfig.light,
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
