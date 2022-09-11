import './App.css';
import NavigationBar from './Components/navigationBar/NavigationBar';
import Particles from './Components/Particles';
import Header from './Components/header/Header';
import AboutMe from './Components/aboutMe/AboutMe';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Header />
			<Particles />
			<AboutMe />
		</div>
	);
}

export default App;
