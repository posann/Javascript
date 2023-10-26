import './App.css';
import Home from './pages/home';
import Header from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
