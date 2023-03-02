import logo from './logo.svg';
import './App.scss';
import LeftBar from './components/LeftBar/LeftBar';
import Content from './components/Content';
import RightBar from './components/RightBar';

function App() {
  return (
    <div className="body">
        <div className='body__left'><LeftBar/></div>
        <div className='body__content'><Content/></div>
        <div className='body__right'><RightBar/></div>

    </div>
  );
}

export default App;
