import { FC } from 'react';
import { Container } from '../components/Container';
import { Titles } from '../components/Titles';
import { SliderBlock } from '../components/SliderBlock';
import { Relax } from '../components/Relax';
import { Feedback } from '../components/Feedback';
import upHillIcon from '../assets/images/home/uphill.png'; 

const Home: FC = () => {
    return (
        <Container>
            <section className='section1'>
                <span className='section1__anchor' id='up'></span>
                <Titles />
                <SliderBlock />
                <Relax />
                <Feedback />
                <a className='section1__link' href="#up">
                    <img className='section1__image' src={upHillIcon} alt="Up" />
                </a>
            </section>
        </Container>
    )
}

export default Home;