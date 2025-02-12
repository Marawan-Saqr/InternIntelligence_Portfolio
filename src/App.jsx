import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header.jsx';
import Experince from './Components/Experince/Experince.jsx';
import Acheivments from './Components/Acheivments/Acheivments.jsx';
import About from './Components/About/About.jsx';


function App() {
  return (
    <div>
    <Container>
      <Header />
      <Experince />
      <Acheivments />
      <About />
    </Container>
    </div>
  )
}

export default App
