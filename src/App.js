import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App(props) {
  const dispatch = useDispatch()
  const { fetching, dog, error } = useSelector(state => state)
  const onRequestDog = () => dispatch({ type: "API_CALL_REQUEST" })
  return (
    <div className="App">
     <header className="App-header">
      <img src={dog || logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Dog Saga</h1>
    </header>
    {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
    </div>
  );
}

export default App;
