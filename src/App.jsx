import './App.css';
import Testimony from './Components/Testimony.jsx'
import './styles/testimony.css'
import Data from './data.js'



function App() {
  
  const testimonies = [];

  Data.forEach( (data,key) => {
    key=data.name; 
    testimonies.push(<Testimony key={key} {...data} />);
  });

  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonies}
      </div>
    </div>
  );
}

export default App;


