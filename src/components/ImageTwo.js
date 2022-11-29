import { Parallax } from 'react-parallax';
import red from '../img/f5.jpg'

const ImageTwo = () => ( 
    <Parallax className='image' bgImage={red} strength={800}>
        <div className='content'>
            <span className='img-txt'>
                    A TRIP TO WOODS
            </span>
        </div>

    </Parallax>
);

export default ImageTwo;