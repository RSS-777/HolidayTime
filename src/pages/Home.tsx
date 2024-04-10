import { FC } from 'react';
import { Container } from '../components/Container';
import { Titles } from '../components/Titles';
import { SliderBlock } from '../components/SliderBlock';
import { Relax } from '../components/Relax';

const Home: FC = () => {
    return (
        <Container>
            <section className='section1'>
                <Titles />
                <SliderBlock />
                <Relax />
            </section>
        </Container>
    )
}

export default Home;