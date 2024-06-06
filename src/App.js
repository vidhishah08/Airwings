import './App.css';
import Fifth_Component from './Components/Fifth_Component';
import FirstComonent from './Components/FirstComonent';
import Footer from './Components/Footer';
import Fourth_Component from './Components/Fouth_Component';
import Header from './Components/Header';
import Second_Component from './Components/Second_Component';
import Sixth_Component from './Components/Sixth_Component';
import Third_Component from './Components/Third_Component';

function App() {
  return (
    <div className="App font-sans ">
        <Header></Header>
        <FirstComonent></FirstComonent>
        <Second_Component></Second_Component>
        <Third_Component></Third_Component>
        <Fourth_Component></Fourth_Component>
        <Fifth_Component></Fifth_Component>
        <Sixth_Component></Sixth_Component>
        <Footer></Footer>
    </div>
  );
}

export default App;
