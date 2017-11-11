import React, { Component } from 'react';
import { Layout, Button, Input, Row, Col, Form, message } from 'antd';
import styles from './styles.css'
import { createContactUsAPI } from '../../api'
const { Header, Content, Footer } = Layout;
const FormItem = Form.Item;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      loading: false,
      visible: false,
      bannerHeight: 'auto',
    };
    /* this.handleSignUp = this.handleSignUp.bind(this) */
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
  }

  /* handleSignUp() {
     this.context.router.push('/register')
  } */
  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        createContactUsAPI(values)
        message.success('Submit infor success')
        this.props.form.resetFields()
      }
    });
  }
  handleWindowResize() {
    const bannerHeight = window.innerHeight - 124 // 124 is asSeenOn height
    if (window.innerWidth > 768 && bannerHeight !== this.state.bannerHeight) {
      this.setState({ bannerHeight })
    } else if (window.innerWidth <= 768) {
      this.setState({ height: 'auto' })
    }
  }
  render() {
    const bannerContentHeight = Number.isInteger(this.state.bannerHeight) ? (this.state.bannerHeight - 64) : 'auto'
    const { getFieldDecorator } = this.props.form
    return (
      <Layout className={styles.layout}>
        <Content>
          <Row className={styles.banner} style={{ height: this.state.bannerHeight }}>
            <Header className={styles.header}>
              <a href="/" className={styles.perkfecLogo}>
                <img
                  alt="perlfec logo"
                  src="/img/logo-white.png"
                />
              </a>
              <a
                href="//blog.perkfec.com"
                target="_blank"
                className={styles.headerMenu}
              >
                <Button>Blog</Button>
              </a>
            </Header>
            <Row style={{ height: bannerContentHeight }}>
              <Col
                xs={{ span: 21, offset: 1 }}
                className={styles.bannerContent}
              >
                <Row type="flex" justify="space-around" align="middle" style={{ height: '100%' }}>
                  <Col xs={24} sm={13}>
                    <h1>
                      Nurture meaningful employee relationships
                    </h1>
                    <h3 style={{ margin: '25px 0' }}>
                      Tadaa bot is an intelligent employee relations assistant that helps companies reduce employee turnover and maximize employee performances.
                    </h3>
                    <div>
                      <div className={styles.waitingList}>
                        <h3 className="label">
                          Waiting list: <span className="number">50+</span> Companies
                        </h3>
                        <h3>
                          We are committed to help you build a workplace employees love. Sign up now and we’ll tell you more!
                        </h3>
                        <a href="#section-3">
                          <Button type="primary" className="btnKnowMore">
                            Sign Up Now - It’s Free
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={11}>
                    <img
                      alt="screen"
                      className="img-chat-conver"
                      src="/img/home-chat-mac.png"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row className={styles.asSeenOn}>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 21, offset: 1 }}>
              <h3 className={styles.asSeenOnLabel}>As seen on</h3>
              <Row type="flex" justify="space-around" align="middle">
                <Col className={styles.pressLogo} xs={8} sm={4}>
                  <img alt="e27 news" src="/img/home-logo-e27.png" />
                </Col>
                <Col className={styles.pressLogo} xs={8} sm={4}>
                  <img alt="inc news" src="/img/home-logo-inc.png" />
                </Col>
                <Col className={styles.pressLogo} xs={8} sm={4}>
                  <img alt="yahoo news" src="/img/home-logo-yahoo.png" />
                </Col>
                <Col className={styles.pressLogo} xs={8} sm={4}>
                  <img alt="techinasia news" src="/img/home-logo-tia.png" />
                </Col>
                <Col className={styles.pressLogo} xs={8} sm={4}>
                  <img alt="vnexpress news" src="/img/home-logo-vne.png" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="section-3" className={styles.joinWaitingList}>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 21, offset: 1 }}>
              <h1>Join the waiting list</h1>
              <Row type="flex" justify="center">
                <Form layout="vertical" className={styles.frmJoinWaitingList} onSubmit={this.onSubmit}>
                  <FormItem
                    label="Your name:"
                  >
                    {getFieldDecorator('name', {
                      rules: [
                        { required: true, message: 'Please input name' },
                      ],
                      initialValue: this.state.nameContact,
                    })(
                      <Input placeholder="Your name" />
                    )}
                  </FormItem>
                  <FormItem
                    label="Email address:"
                  >
                    {getFieldDecorator('email', {
                      rules: [
                        { required: true, message: 'Please input email' },
                        { type: 'email', message: 'The input is not valid E-mail!' },
                      ],
                      initialValue: this.state.emailContact,
                    })(
                      <Input type="email" placeholder="Email address" />
                    )}
                  </FormItem>
                  <FormItem
                    label="Phone number:"
                  >
                    {getFieldDecorator('phone_no', {
                      rules: [
                        { required: true, message: 'Please input phone' },
                      ],
                      initialValue: this.state.phoneContact,
                    })(
                      <Input placeholder="Phone number" />
                    )}
                  </FormItem>
                  <FormItem style={{ marginBottom: 0, textAlign: 'right' }}>
                    <Button type="primary" size="large" htmlType="submit">Submit</Button>
                  </FormItem>
                </Form>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Row>
            <Col xs={{ span: 21, offset: 1 }}>
              <h4>
                Perkfec Pte.Ltd © 2017
              </h4>
              <p>
                Singapore: 318 King George's Avenue, King George's Building, Singapore.
                <br />
                Vietnam: Dreamplex - 21 Nguyen Trung Ngan Street, District 1, HCMC, Vietnam.
              </p>
              <br />
              <p className="ft-links">
                <a target="_blank" href="https://blog.perkfec.com">Blog</a>
                &nbsp;&middot;&nbsp;
                <a target="_blank" href="https://www.facebook.com/perkfec">Facebook</a>
                &nbsp;&middot;&nbsp;
                <a target="_blank" href="https://www.linkedin.com/company/perkfec">Linkedin</a>
              </p>
            </Col>
          </Row>
        </Footer>
      </Layout>
    )
  }
}

HomePage.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

HomePage.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func,
  }),
  form: React.PropTypes.object,
};

const WrappedHomePage = Form.create()(HomePage)

export default WrappedHomePage;
