import React, { useState, useEffect } from 'react';
import './App.css';
import web3 from './utils/web3';
import Form1 from './components/Form1'
import 'bootstrap/dist/css/bootstrap.min.css';

//import LendingPlatformContract from './final/artifacts/contracts/Lock.sol/LendingPlatform.json'; // Path to your compiled contract JSON

function App() {
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);

      // const networkId = await web3.eth.net.getId();


      // const deployedNetwork = LendingPlatformContract.networks[networkId];
      // const contractInstance = new web3.eth.Contract(
      //   LendingPlatformContract.abi,
      //   deployedNetwork && deployedNetwork.address
      // );
      // setContract(contractInstance);
    };

    init();
  }, []);

  

  return (
    <div className="App">
      <h1>Lending Platform</h1>
      <p>Connected Account: {accounts[0]}</p>
      <div className='page'>
      <div className='Header'>
        <h1 id='MainHead'>QuickBroker</h1>
        <h3 id='Balance'>Balance: 100 ETH</h3>
      </div>

      <div className='Body'>
        <Form1></Form1>
      </div>
      
      <div className='Footer'>
        <h3>Max Interest: 10 %</h3>
        <h3>Min Interest: 1 %</h3>
      </div>
    </div>
    </div>
  );
}

export default App;
