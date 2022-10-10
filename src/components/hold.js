<nav class="navbar navbar-dark navbar-expand-sm  fixed-top">
<div class="container">
       
        <button aria-label="Menu-button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <a class="navbar-brand mr-auto" href="#"><img alt="Logo" src="img/logo.png" height="30" width="41"></a></a>
        
        <div class="collapse navbar-collapse" id="Navbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><a class="nav-link " href="#"><i class="fa fa-home fa-lg icon"></i>Home</a></li>
                <li class="nav-item"><a class="nav-link" href="./aboutus.html"><i  class="fa fa-info fa-lg icon"></i>About</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-list fa-lg icon"></i>Menu</a></li>
                <li class="nav-item"><a class="nav-link" href="./contactus.html"><i class="fa fa-address-card fa-lg icon"></i>Contact</a></li>
            </ul>
            <a id="logIn-modal"  class="btn text-white">
             <i class="fa fa-sign-in"></i> Login</a>
        </div>
        
       
</div>


</nav>


 /**  { <div className="top_div">

                    <img className="spark_image"  src="/images/Vector.png"/>
                    <img className="spark_image_1" src="/images/Vector1.png"/>
                    
                    <div className="heading">
                        <h1>SPARK</h1>
                        <h4>LAUNCH</h4>
                    </div>

                    <div className="info_div">
                        <NavLink to="/" exact><p>BNB SALE</p> </NavLink>
                        <NavLink to="/erc20" exact><p>ERC20 SALE</p></NavLink>
                        {/* <NavLink to="/About" exact><p>ABOUT</p></NavLink> */}
                        </div>

                        {haveMetamask?  
                                (  
                                    <div className='connect'>
                                        {isConnected? 
                                        ( 
                                        <div className="wallet_div">
                                        
                                                {accountAddress.slice(0, 2)}...{accountAddress.slice(38, 42)}
                                        
                                        </div>
                                        ):
                                        ( <button className="connect_wallet_div" onClick={connectWallet}>CONNECT WALLET</button>)}
                                    </div>
                                
                                
                                ) :
        
                                (
                                    <div className="connect_wallet_div">please install MetaMask</div>
                                )
                        }
        
                        
                        
        
                        </div> } */