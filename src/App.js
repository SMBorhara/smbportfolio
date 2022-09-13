import './App.css';
import NavigationBar from './Components/navigationBar/NavigationBar';
import Particles from './Components/Particles';
import Header from './Components/header/Header';
import AboutMe from './Components/aboutMe/AboutMe';
import Technologies from './Components/tech/Technologies';
import Portfolio from './Components/portfolio/Portfolio';
import ContactMe from './Components/contactMe/ContactMe';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Header />
			<Particles />
			<AboutMe />
			<Technologies />
			<Portfolio />
			<ContactMe />
		</div>
	);
}

export default App;
