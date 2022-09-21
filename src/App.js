import Header from "./components/Header";
import MainContent from "./components/MainContent"
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="App-body">
        <MainContent />
      </section>
    </div>
    </Router>
  );
}

export default App;
