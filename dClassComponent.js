import React, { Component } from 'react'
import { ThemeContext } from "./dThemeContext";

export default class dText extends Component {
  static contextType = ThemeContext
  render () {
    const { themeColor } = this.context
    return (
      <div className="app">
        <h3 style={{ color: themeColor }}>{themeColor}***dText</h3>
      </div>
    )
  }
}
