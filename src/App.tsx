import { FC } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './scss/main.scss';

const App: FC = () => {
  return (
    <>
    <header>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
