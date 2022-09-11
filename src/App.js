import './App.css';
import NavigationBar from './Components/navigationBar/NavigationBar';
import Particles from './Components/Particles';
import Header from './Components/header/Header';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Header />
			<Particles />
		</div>
	);
}

export default App;
