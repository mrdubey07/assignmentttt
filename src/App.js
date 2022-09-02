
import './App.css';
import Issues from './components/Issues';

import FormCtxProvider from './context/FormCtxProvider';

function App() {
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <FormCtxProvider>
        <Issues />
      </FormCtxProvider>
    </div>
  );
}

export default App;
