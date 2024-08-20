import '../src/assets/css/App.css';
import Header from './layouts/header';
// import YoutubeList from './components/Youtube/list';
import Game from './lessons/Tictactoe/game';
// import PropsChild from './lessons/PropsChild/main';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                {/* <YoutubeList /> */}
                <Game />
                {/* PropsChild => tương tự như slot ở vuejs */}
                {/* <PropsChild>
                    <h1>Props Child</h1>
                    <p>Props Child is a component that receives props.children and renders it.</p>
                </PropsChild> */}
            </div>
        </div>
    );
}

export default App;
