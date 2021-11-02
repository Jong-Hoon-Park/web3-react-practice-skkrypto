import {ColoredButton, ConnectButton} from "./components/Button";
import {useWeb3React} from "@web3-react/core";
import { injectedConnector } from "./connectors";
import CountGet from "./components/CounterGet";
import CounterInc from "./components/CounterInc";
import CounterDec from "./components/CounterDec";





function App() {
  const {chainId, account, activate, active} = useWeb3React()
  const onClick = () => {
    activate(injectedConnector);
  };
  return (
    <div>
      <div>Chain Id: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>
          Connected!
        </div>

      ): (
        <button onClick = {onClick}style={{color:"white",backgroundColor:"green"}}>connect</button>

      )}
      <CountGet/>
      <CounterInc/>
      <CounterDec/>

    </div>
  );
}

export default App;
