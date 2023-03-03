import logo from './logo.svg';
import './App.scss';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar';
import Home from './components/Home';


function App() {
  return (
    <div className="body">
        <div className='body__left'><LeftBar/></div>
        <div className='body__content'><Home/></div>
        <div className='body__right'><RightBar/></div>

    </div>
  );
}

export default App;
