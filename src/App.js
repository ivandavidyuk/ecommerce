import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductCard } from './pages/ProductCard';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';

function App() {
    return (
        <>
            <Router basename='/e-shop'>
                <Header/>
                <main className='main'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/product/:id' element={<ProductCard />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
