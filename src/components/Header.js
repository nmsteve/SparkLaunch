import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { provider } from '../connect/dataProccessing'


const Header = () => {

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  //const provider = new ethers.providers.Web3Provider(window.ethereum);

  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');

  const checkMetamaskAvailability = async () => {
    if (!ethereum) {
      sethaveMetamask(false);
    }
    sethaveMetamask(true);
  };

  useEffect(() => {
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts', });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  }


  return (
    <div className='row'>
      <div className='navbar-custom container-fluid'>
        <div className='row navbar_row'>
          <div className='col-2'>
            <div className="nav_logo"><a><img className='img-fluid' alt="Logo" src="/images/NavLog.png" /></a>
            </div>
          </div>
          <div className='col-6'>
            <div className='nav_menu'><a className='nav-Menu_item'>HOME</a> <a
              className='nav-Menu_item'>POOLS</a> <a className='nav-Menu_item'>ABOUT</a> <a
                className='nav-Menu_item'>TOKENLOCKERS</a></div>
          </div>
          <div className='col-4'>
            <div className="buttons">
              <button className='button btn_custom'>PYRE GAMES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header