import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import logo from './logo.svg'
import './App.css'
import ParallaxCarousel from './components/ParallaxCarousel'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ParallaxCarousel />
    </div>
    </ThemeProvider>
  )
}

export default App;
