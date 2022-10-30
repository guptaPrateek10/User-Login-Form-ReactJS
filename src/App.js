import './App.css';
import { UsereLoginUsingEvent } from './programs/usereLoginUsingEvent';
import { UsereLoginUsingUseRef } from './programs/UserLoginUsingUseRef';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <UsereLoginUsingEvent/>
        {/* <UsereLoginUsingUseRef/> */}
       {/* <UsereLoginUsingUseRef/> */}
      </header>
    </div>
  );
}

export default App;
