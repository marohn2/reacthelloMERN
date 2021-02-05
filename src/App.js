import profileImage from './img/ryflowerscopy.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello this is My React App</h1>
      <h2>Author: Ryan Marohn</h2>
      <img src={profileImage} alt="profile image"/>
    </div>
  );
}

export default App;
