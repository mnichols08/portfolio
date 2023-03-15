import Header from './components/Header.component';
import Footer from './components/Footer.component';
function App({Element}) {
  return (
    <div className="App">
      <Header />
      <Element />
      <Footer />
    </div>
  );
}

export default App;
