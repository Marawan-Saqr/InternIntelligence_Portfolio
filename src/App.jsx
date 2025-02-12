import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header.jsx';
import Experince from './Components/Experince/Experince.jsx';
import Acheivments from './Components/Acheivments/Acheivments.jsx';
import About from './Components/About/About.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Testimonials from './Components/Testimonails/Testimonials.jsx';


function App() {
  return (
    <div>
    <Container>
      <Header />
      <Experince />
      <Acheivments />
      <About />
      <Blogs />
      <Testimonials />
    </Container>
    </div>
  )
}

export default App
