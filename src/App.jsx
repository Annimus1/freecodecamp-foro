import './App.css';
import Testimony from './Components/Testimony.jsx'
import './styles/testimony.css'
import Data from './data.js'



function App() {
  
  const testimonies = [];

  Data.forEach( (data) => {
      testimonies.push(<Testimony {...data} />);
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


/*
        <Testimony {...Data[2]} />

<Testimony 
          image = 'sarah'
          name = 'Sarah Chima'
          country = 'Nigeria'
          position = 'Software Engineer'
          brand = 'ChatDesk'
          testimony = "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />
        <Testimony 
          image = 'emma'
          name = 'Emma Bostian'
          country = 'Sweden'
          position = 'Software Engineer'
          brand = 'Spotify'
          testimony = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />

*/