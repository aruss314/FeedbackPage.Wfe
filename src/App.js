import './App.css';
import MainContainer from './containers/MainContainer';
import { ToastContainer } from 'react-toastify';
import Container  from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid className="App-header">
      <ToastContainer />
      <MainContainer />
    </Container>
  );
}

export default App;
