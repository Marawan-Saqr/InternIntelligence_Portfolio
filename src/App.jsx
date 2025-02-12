import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header.jsx';
import Experince from './Components/Experince/Experince.jsx';
import Acheivments from './Components/Acheivments/Acheivments.jsx';
import About from './Components/About/About.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Testimonials from './Components/Testimonails/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import DownFooter from './Components/Down-footer/DownFooter.jsx';


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
    <Contact />
    <DownFooter />
    </div>
  )
}

export default App
