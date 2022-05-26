import NavigationBar from './components/navbar'
import foodimage from './images/home-screen-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <NavigationBar/>
        <div>
        <img src={foodimage} className="frontImage" alt='Front food' width="500" height="400"/>
      </div>
      </body>
    </div>
  );
}

export default App;
