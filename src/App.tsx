import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import store from './store'
import NavHeader from './components/NavHeader'
function App() {
 
  const getError = ()=>{
    throw new Error('哈哈，我报错了～')
  }
  return (
    <Provider store={store}>
      <Router>
        <NavHeader />
        <button onClick={getError}>报错</button>
        <Route path = '/counter1' component={Counter1}/>
        <Route path = '/counter2' component={Counter2}/>
      </Router>
    </Provider>
  );
}
export default App;
