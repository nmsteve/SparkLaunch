import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import classnames from "classnames"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "store/actions"

import {
  Dropdown,
  Nav,
  Navbar,
} from 'react-bootstrap'

// import images
import logoSM from 'assets/images/logos/smlogo.png'
import logoLG from 'assets/images/logos/lglogo.png'

import bscLogo from 'assets/images/logos/bsc.png'
import roburnaLogo from 'assets/images/logos/roburna.png'

//import Methods
import { checkMetamaskAvailability, connectWallet, handleChange } from "connect/dataProccessing"

const Header = props => {

  const options = [
    { value: '0x61', text: 'Binance Smart', logo: bscLogo },
    { value: '0x9f', text: 'Roburna Chain', logo: roburnaLogo },
  ]

  const [haveMetamask, sethaveMetamask] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [selected, setSelected] = useState(options[1]);

  useEffect(async () => {
    checkMetamaskAvailability(sethaveMetamask, setIsConnected, setAccountAddress);

    if (localStorage.getItem('selectedChain')) {
      setSelected(JSON.parse(localStorage.getItem('selectedChain')))
      console.log(localStorage.getItem('selectedChain'))
    }

  }, [])


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

            <Navbar className="p-0 navbar-dark d-none d-lg-inline">
              <Nav className="me-auto px-4 d-flex align-items-center">
                <Link
                  to="/home"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/' ||
                      window.location.pathname === '/home'
                  })}
                >
                  HOME
                </Link>

                <a
                  href="/#pools"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/#pools'
                  })}
                >
                  POOLS
                </a>

                <Link
                  to="#"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/about'
                  })}
                >
                  ABOUT
                </Link>

                <Link
                  to="#"
                  className={classnames('nav-link me-3 px-0', {
                    active: window.location.pathname === '/token-locker'
                  })}
                >
                  TOKEN LOCKER
                </Link>
              </Nav>
            </Navbar>

          </div>

          {/* right section */}
          <div className="d-flex flex-fill  ms-2  justify-content-end">

            <button
              className="btn btn-gradient-blue rounded-2 py-0 w-md me-3 d-none d-md-inline"
            >
              PYRE GAMES
            </button>

            <Dropdown className="me-3">
              <Dropdown.Toggle variant="warning" className="py-0 ps-0">
                <img
                  src={selected.logo}
                  height={28}
                  className='me-1 bg-dark rounded p-1'
                />
                {selected.text}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {options.map((item, key) =>
                  <Dropdown.Item
                    key={key}
                    onClick={() => handleChange(haveMetamask, item, setSelected)}
                  >
                    <img
                      src={item.logo}
                      height={18}
                      className='me-2'
                    />
                    {item.text}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>

            </Dropdown>

            {isConnected ?
              <div
                className="border border-primary text-primary rounded-3 me-3 ps-0 py-0 text-nowrap"
              >
                <i className="fa-solid fa-wallet text-primary border border-primary rounded p-1 me-1 fs-5" />
                {accountAddress.slice(0, 2)}...{accountAddress.slice(38, 42)}

              </div>
              :
              <button
                className="btn btn-sm btn-primary text-white rounded-3 me-3 fw-bold"
                onClick={() => { connectWallet(haveMetamask, setIsConnected, setAccountAddress) }}
              >
                CONNECT WALLET
              </button>
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