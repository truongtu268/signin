import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import GoogleTagManager from './googleTagManager'

function App(props) {
  return (
    <div className={styles.container}>
      <GoogleTagManager gtmId="GTM-P6B8RZF" />
      {React.Children.toArray(props.children)}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node,
}

export default App
