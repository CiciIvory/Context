import React from 'react'
import { ThemeConsumer } from "./dThemeContext";


export default function dFuncComponent () {
  return (
    <ThemeConsumer>
      {(ctx) => <div style={{ color: ctx.themeColor }}>{ctx.themeColor} *dFuncComponent</div>}
    </ThemeConsumer>
  )
}
