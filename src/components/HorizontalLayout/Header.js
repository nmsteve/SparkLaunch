import React, { useState } from "react"
import PropTypes from 'prop-types'

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import classnames from "classnames"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "store/actions"

import {
  Nav,
  Navbar,
} from 'react-bootstrap'

// import images
import logoSM from 'assets/images/logos/smlogo.png'
import logoLG from 'assets/images/logos/lglogo.png'


const Header = props => {


  const [isConnected, setIsConnected] = useState(false)

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          {/* left section */}
          <div className="d-flex align-items-center">

            {/* open menu for small screens */}
            <button
              type="button"
              className="btn btn-sm ps-3 pe-1 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => props.toggleLeftmenu(!props.leftMenu)}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <div className="navbar-brand-box ms-md-2 me-md-3">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img
                    src={logoSM}
                    alt=""
                    height="25px"
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src={logoLG}
                    alt=""
                    height="80px"
                  />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src={logoSM}
                    alt=""
                    height="25px"
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src={logoLG}
                    alt=""
                    height="80px"
                  />
                </span>
              </Link>
            </div>

            <Navbar className="p-0 navbar-dark">
              <Nav className="me-auto px-5 d-flex align-items-center">
                <Link
                  to="/home"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/' ||
                      window.location.pathname === '/home'
                  })}
                >
                  HOME
                </Link>

                <Link
                  to="#"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/history'
                  })}
                >
                  POOLS
                </Link>

                <Link
                  to="#"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/payments'
                  })}
                >
                  ABOUT
                </Link>

                <Link
                  to="#"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/payments'
                  })}
                >
                  TOKEN LOCKER
                </Link>
              </Nav>
            </Navbar>

          </div>

          {/* right section */}
          <div className="ms-2 flex-fill d-flex justify-content-end flex-fill">
            {isConnected ?
              <div>

              </div>
              :
              <div className="d-flex flex-nowrap">

                <div className="bg-primary rounded-3 d-flex p-1 me-3 me-lg-5">
                  <button
                    className="btn btn-warning text-white rounded-2 py-0 me-3"
                  >
                    IGNITE DEFI
                  </button>

                  <button
                    className="btn btn-info text-white rounded-2 py-0 shadow w-lg"
                  >
                    PYRE GAMES
                  </button>

                </div>

                <button
                  className="btn btn-sm btn-outline-primary text-white rounded-3 mx-2"
                >
                  CONNECT WALLET
                </button>
              </div>
            }

          </div>

        </div>
      </header>
    </React.Fragment >
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(Header)