import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignUp from '../../components/SignUp/SignUp'
import { submitData } from './actions'

const mapDispatchToProps = (dispatch) => ({
  submitData: (data) => dispatch(submitData(data)),
})

const propTypes = {
  submitData: PropTypes.func.isRequired,
}

function SignUpContainer(props) {
  return <SignUp submitData={props.submitData} />
}

SignUpContainer.propTypes = propTypes

export default connect(null, mapDispatchToProps)(SignUpContainer)
