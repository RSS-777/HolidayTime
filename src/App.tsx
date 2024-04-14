import { FC } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacts  from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import Reserve  from './pages/Reserve';
import Personal from './pages/Personal';
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
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/reserve' element={<Reserve />} />
          <Route path='/personal' element={<Personal />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
// export default function WrappedApp() {
//   return(
//     <Suspense fallback="...loading">
//       <App />
//     </Suspense>
//   )
// }
export default App
