import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { ethers } from 'ethers';

const Topdiv = () => {
    const [haveMetamask, sethaveMetamask] = useState(true);
	const [isConnected, setIsConnected] = useState(false);

	const { ethereum } = window;
	const provider = new ethers.providers.Web3Provider(window.ethereum);

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

                const accounts = await ethereum.request({
                    method: 'eth_requestAccounts',
                });

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
            <>
                <div className="top_div">

                    <img className="spark_image"  src="/images/Vector.png"/>
                    <img className="spark_image_1" src="/images/Vector1.png"/>
                    
                    <div className="heading">
                        <h1>SPARK</h1>
                        <h4>LAUNCH</h4>
                    </div>

                    <div className="info_div">
                        <NavLink to="/" exact><p>BNB SALE</p> </NavLink>
                        <NavLink to="/erc20" exact><p>ERC20 SALE</p></NavLink>
                        <NavLink to="/About" exact><p>ABOUT</p></NavLink>
                    </div>

                {haveMetamask?  
                        (  
                            <div className='connect'>
                                {isConnected? 
                                ( 
                                <div className="wallet_div">
                                
                                        {accountAddress.slice(0, 4)}...{accountAddress.slice(38, 42)}
                                
                                </div>
                                ):
                                ( <button className="connect_wallet_div" onClick={connectWallet}>CONNECT WALLET</button>)}
                            </div>
                        
                        
                        ) :

                        (
                            <div className="connect_wallet_div">please install MetaMask</div>
                        )
                }

                
                

                </div>
            </>
        )

	}

export default Topdiv