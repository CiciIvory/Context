import React from 'react'
import { ThemeConsumer } from "./dThemeContext";
import { UserConsumer } from "./dMultipleContext";


export default function dMultipleFunc () {
  return (
    <ThemeConsumer>
      {ctx =>
        <UserConsumer>
          {
            user => < div style={{ color: ctx.themeColor }}>{ctx.themeColor}=={user.userName}==dMultipleFunc</div>
          }
        </UserConsumer>
      }
    </ThemeConsumer >
  )
}
