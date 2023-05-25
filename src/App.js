import Nav from './pages/header/Nav';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import './style.css';

function App() {
  return (
    <div className='App'>
      <div className="container">
        <Nav />
      </div>
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
