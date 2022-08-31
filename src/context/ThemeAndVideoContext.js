import React from 'react'

const ThemeAndVideoContext = React.createContext({
  savedVideos: [],
  isDarkTheme: false,
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideoItem: () => {},
})

export default ThemeAndVideoContext
