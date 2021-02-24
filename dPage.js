import React, { Component } from 'react'
import { ThemeProvider } from './dThemeContext'
import { UserProvider } from './dMultipleContext'
import DText from './dClassComponent'
import DFuncComponent from './dFuncComponent'
import DMultipleContext from "./dMultipleFunc";

export default class dRedux extends Component {
  state = {
    theme: {
      themeColor: "red"
    },
    user: {
      userName: "bobby"
    }
  }

  changeColor = () => {
    const { themeColor } = this.state.theme
    this.setState({
      theme: { themeColor: themeColor === 'red' ? "pink" : "red" }
    })
  }

  render () {
    const { theme, user } = this.state
    return (
      <div className="app">
        <h3>page</h3>
        <button onClick={this.changeColor}>change Color</button> <br />
        <ThemeProvider value={theme}>
          #########单个context
          <DText />{/* 类组件 */}
          <DFuncComponent />{/* 函数组件 */}
          ##########多个context
          <UserProvider value={user}>
            <DMultipleContext />
          </UserProvider>
        </ThemeProvider>
      </div >
    )
  }
}
