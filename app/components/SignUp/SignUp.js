import React, { Component } from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import { Steps, Form, Button, Row, Col, Modal, Input, Icon } from 'antd'
import styles from './styles.css'
import { TagName } from '../styleComponent'
import { verifyDomainAPI } from '../../api'

const FormItem = Form.Item
const Step = Steps.Step

const propTypes = {
  submitData: PropTypes.func.isRequired,
  form: PropTypes.object,
  validateFields: PropTypes.func,
}

const contextTypes = {
  router: PropTypes.object.isRequired,
}

function signUpTitle() {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <a
        style={{ marginLeft: 8, float: 'left', position: 'absolute', top: 0, left: 0, fontSize: 12 }}
        href="/"
        target="_blank"
      >
        <Icon type="home" /> Homepage
      </a>
      <p>Sign Up Form</p>
    </div>
  )
}

class SignUpComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      data: {
        teamName: '',
        subDomain: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        personalInfo: {
          fullName: '',
        },
        listEmail: [],
      },
      validate: true,
      passwordType: 'password',
      isDomainNameError: false,
      loading: false,
    }
    this.getValueCompanyName = this.getValueCompanyName.bind(this)
    this.getValueSubdomain = this.getValueSubdomain.bind(this)
    this.getValueFirstName = this.getValueFirstName.bind(this)
    this.getValueLastName = this.getValueLastName.bind(this)
    this.getValueEmail = this.getValueEmail.bind(this)
    this.getValuePassword = this.getValuePassword.bind(this)
    this.getValueListEmail = this.getValueListEmail.bind(this)
    this.showHide = this.showHide.bind(this)
    this.hasErrors = this.hasErrors.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.nextAction = this.nextAction.bind(this)
    this.previousAction = this.previousAction.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.verifyDomainNameError = this.verifyDomainNameError.bind(this)
  }

  componentDidMount() {
    this.props.form.validateFields()
  }

  getValueCompanyName(event) {
    const data = this.state.data
    const value = event.target.value
    data.teamName = value
    this.setState({ data })
  }

  getValueSubdomain(event) {
    const data = this.state.data
    data.subDomain = event.target.value
    this.setState({
      data,
      isDomainNameError: false,
    })
  }

  getValueFirstName(event) {
    const data = this.state.data
    data.firstName = event.target.value
    this.setState({ data })
  }

  getValueLastName(event) {
    const data = this.state.data
    data.lastName = event.target.value
    this.setState({ data })
  }

  getValueEmail(event) {
    const data = this.state.data
    data.email = event.target.value
    this.setState({ data })
  }

  getValuePassword(event) {
    const data = this.state.data
    data.password = event.target.value
    this.setState({ data })
  }

  getValueListEmail(event) {
    const listEmail = event.target.value.replace(/\n|\s|\t|,+\s/g, ',').split(',')
    const data = this.state.data
    if (listEmail.length === 0) {
      this.setState({ validate: true })
    } else {
      const currentMails = []
      for (let index = 0; index < listEmail.length; index++) {
        if (validator.isEmail(listEmail[index])) {
          if (listEmail[index] !== this.state.data.email) {
            currentMails.push(listEmail[index])
            this.setState({ validate: true })
          } else {
            this.setState({ validate: false })
          }
        }
      }
      data.listEmail = currentMails
      this.setState({ data })
    }
  }

  nextAction() {
    const { current } = this.state
    this.setState({ loading: true }, () => {
      if (current === 0) {
        verifyDomainAPI(this.state.data.subDomain)
          .then(response => {
            if (response.status === 404) {
              this.setState({ current: current < 2 ? current + 1 : current })
            } else {
              this.verifyDomainNameError()
            }
          })
          .then(() => {
            this.setState({ loading: false })
          })
      } else {
        this.setState({
          current: current < 2 ? current + 1 : current,
          loading: false,
        })
      }
    })
  }

  previousAction() {
    const { current } = this.state
    this.setState({ current: current > 0 ? current - 1 : current })
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  handleCancel() {
    this.context.router.push('/')
  }

  handleDone() {
    this.props.submitData(this.state.data)
  }

  showHide() {
    this.setState({
      passwordType: this.state.passwordType === 'password' ? 'text' : 'password',
    })
  }

  showPasswordButton() {
    return this.state.passwordType === 'password'
      ? <Icon type="eye-o" onClick={this.showHide} />
      : <Icon type="eye" onClick={this.showHide} />
  }

  handleCheck(rule, value, callback) {
    const check = /[^a-z0-9]+/i;
    if (value && check.test(value)) {
      callback('Cannot contain any of the following characters: .:`:/*|?"%$!+=[]{}<> ');
    }
    callback()
  }

  verifyDomainNameError() {
    this.setState({ isDomainNameError: true })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const { current } = this.state

    const companyNameError = isFieldTouched('companyName') && getFieldError('companyName')
    const subDomainError = isFieldTouched('subDomain') && getFieldError('subDomain')
    const firstNameError = isFieldTouched('firstName') && getFieldError('firstName')
    const lastNameError = isFieldTouched('lastName') && getFieldError('lastName')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    const step1Error = ['companyName', 'subDomain']
    const step2Error = ['firstName', 'lastName', 'email', 'password']
    const stepError = (this.state.current === 0) ? step1Error : step2Error
    const { isDomainNameError } = this.state
    const adminErrorSupport = (this.state.current === 1) &&
                              (Boolean(this.state.data.firstName) === false ||
                               Boolean(this.state.data.lastName) === false ||
                               Boolean(this.state.data.email) === false ||
                               Boolean(this.state.data.password) === false)

    const steps = [{
      title: 'Company',
      component: ([
        <FormItem
          label="Company name"
          key="companyName"
          validateStatus={companyNameError ? 'error' : ''}
          help={companyNameError || ''}
        >
          {getFieldDecorator('companyName', {
            rules: [{ required: true, message: 'Please input Company Name' }],
            onChange: this.getValueCompanyName,
            initialValue: this.state.data.teamName,
          })(
            <Input
              placeholder="Company Name"
              autoComplete="off"
              autoFocus
            />
          )}
        </FormItem>,
        <FormItem
          label="Subdomain"
          key="subDomain"
          validateStatus={(subDomainError || isDomainNameError) ? 'error' : ''}
          help={subDomainError || (isDomainNameError && 'The domain name is taken. Try another')}
        >
          {getFieldDecorator('subDomain', {
            rules: [
              { required: true, message: 'Please input Subdomain' },
              { min: 5, message: 'Subdomain must be longer than 5 characters' },
              { validator: this.handleCheck },
            ],
            onChange: this.getValueSubdomain,
            initialValue: this.state.data.subDomain,
          })(
            <Input
              placeholder="Subdomain name"
              addonAfter=".perkfec.com"
              autoComplete="off"
            />
          )}

        </FormItem>,
      ]),
    }, {
      title: 'Admin',
      component: ([
        <FormItem
          label="First Name"
          key="firstName"
          validateStatus={firstNameError ? 'error' : ''}
          help={firstNameError || ''}
          style={{ width: 265 }}
        >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please fill your first name' }],
            onChange: this.getValueFirstName,
            initialValue: this.state.data.firstName,
          })(
            <Input
              placeholder="First name"
              autoComplete="off"
              autoFocus
            />
          )}
        </FormItem>,
        <FormItem
          label="Last Name"
          key="lastName"
          validateStatus={lastNameError ? 'error' : ''}
          help={lastNameError || ''}
          style={{ width: 265 }}
        >
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please fill your last name' }],
            onChange: this.getValueLastName,
            initialValue: this.state.data.lastName,
          })(
            <Input
              placeholder="Last name"
              autoComplete="off"
            />
          )}
        </FormItem>,
        <FormItem
          label="Email"
          key="email"
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
          style={{ width: 265 }}
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
            onChange: this.getValueEmail,
            initialValue: this.state.data.email,
          })(
            <Input
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
            )}
        </FormItem>,
        <FormItem
          label="Password"
          key="password"
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your password' },
              { min: 8, message: 'Password must be longer than 7 characters' },
            ],
            onChange: this.getValuePassword,
            initialValue: this.state.data.password,
          })(
            <Input
              suffix={this.showPasswordButton()}
              placeholder="Password"
              type={this.state.passwordType}
            />
          )}
        </FormItem>,
      ]),
    }, {
      title: 'Invite',
      component: (
        <div className={styles.stepComponent}>
          <div className={styles.inputEmail}>
            <h2>List of email split by commas</h2>
            <Input
              type="textarea"
              rows="inviteEmail"
              placeholder="List email to invite"
              onChange={this.getValueListEmail}
            />
            {
              this.state.data.listEmail.length !== 0
              ? this.state.data.listEmail.map((email) => <TagName key={email}>{email}</TagName>)
              : null
            }
          </div>
        </div>
      ),
    }]

    return (
      <div>
        <Modal
          visible
          title={signUpTitle()}
          footer={null}
          closable={false}
          className={styles.signUpComponent}
        >
          <Form>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div>
              <Row type="flex" justify="center" align="center">
                <Col>{steps[current].component}</Col>
              </Row>
            </div>
            <div className={styles.steps_action}>
              <Button
                style={{ marginLeft: 8, float: 'left' }}
                onClick={this.handleCancel}
              > Cancel
              </Button>
              {
                current > 0
                && <Button
                  style={{ marginLeft: 0 }}
                  onClick={this.previousAction}
                > <Icon type="left" /> Previous
                </Button>
              }
              {
                current < steps.length - 1
                && <Button
                  key={current}
                  type="primary"
                  htmlType="submit"
                  disabled={this.hasErrors(getFieldsError(stepError)) || (adminErrorSupport)}
                  onClick={this.nextAction}
                  loading={this.state.loading}
                > Next <Icon type="right" />
                </Button>
              }
              {
                current === steps.length - 1
                && <Button
                  type="primary"
                  htmlType="submit"
                  disabled={!this.state.validate}
                  onClick={this.handleDone}
                > Done
                </Button>
              }
            </div>
          </Form>
        </Modal>
      </div>
    )
  }
}

SignUpComponent.contextTypes = contextTypes
SignUpComponent.propTypes = propTypes

const WrappedSignUpComponent = Form.create()(SignUpComponent)
export default WrappedSignUpComponent
