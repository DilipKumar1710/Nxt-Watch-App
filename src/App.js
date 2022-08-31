import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  addVideoItem = video => {
    const {savedVideos} = this.state

    const videoIndex = savedVideos.findIndex(
      eachVideo => eachVideo.id === video.id,
    )

    if (videoIndex === -1) {
      this.setState({
        savedVideos: [...savedVideos, video],
      })
    } else {
      savedVideos.splice(videoIndex, 1)
      this.setState({savedVideos})
    }
  }

  removeVideoItem = id => {
    const {savedVideos} = this.state

    const updatedVideos = savedVideos.filter(eachVideo => eachVideo.id !== id)

    this.setState({
      savedVideos: updatedVideos,
    })
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideoItem: this.addVideoItem,
        }}
      >
        <Switch>
          <Route path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
