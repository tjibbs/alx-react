import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import { getLatestNotification } from '../utils/utils'
import { defaultUser, AppContext } from './AppContext'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({ user: defaultUser })
      }
    }

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.logIn = this.logIn.bind(this)
  }

  logIn (email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } })
  }

  handleDisplayDrawer () {
    this.setState({ displayDrawer: true })
  }

  handleHideDrawer () {
    this.setState({ displayDrawer: false })
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out')
      this.state.logOut()
    }
  }

  render () {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]

    const v = { user: this.state.user, logOut: this.state.logOut }

    return (
      <AppContext.Provider value={v}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          {this.state.user.isLoggedIn ? <hr className={css(styles.hr)}/> : null}
          {this.state.user.isLoggedIn
            ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
              )
            : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
              )}
          <BodySection title="News from the School">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis at tempora odio, necessitatibus repudiandae
              reiciendis cum nemo sed asperiores ut molestiae eaque
              aliquam illo ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          {/* <hr className={css(styles.hr)} /> */}
          <Footer styles={[styles.footer]} />
        </div>
      </AppContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  app: { fontFamily: 'Arial' },

  hr: {
    height: '2px',
    backgroundColor: '#E0344B',
    border: 'none'
  },

  footer: {
    height: '50px',
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
