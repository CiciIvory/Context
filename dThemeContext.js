import React from 'react'

//创建上下文 为避免页面报错或者未匹配到provider，会赋一个默认值
export const ThemeContext = React.createContext({ themeColor: 'pink' })

// 接收上下文
export const ThemeProvider = ThemeContext.Provider;

// 消费者 获取上下文
export const ThemeConsumer = ThemeContext.Consumer