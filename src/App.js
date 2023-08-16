import Header from './parts/header';
import Footer from './parts/footer';
import Middle from './parts/middle';
import Jumbotron from './parts/jumbotron';
import End from './parts/end';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Middle/>
      <End/>
      <Footer/>
    </div>
  );
}

export default App;
