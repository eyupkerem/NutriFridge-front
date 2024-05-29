import { Toaster } from 'react-hot-toast';
import './App.css';
import Router from "./router"

function App() {
  return (
    <>
    <Router/>
    <Toaster position='top-center'/>
    </>
  );
}

export default App;
