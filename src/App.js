import profileImage from './img/ryflowerscopy.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Why Hello Pal, this is My React App</h1>
      <h2>Author: Ryan Marohn</h2>
      <h3>Is this even working though?</h3>
      <h4></h4>
      <img src={profileImage} alt="profile image"/>
    </div>
  );
}

export default App;
