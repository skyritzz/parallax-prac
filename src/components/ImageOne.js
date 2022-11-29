import { Parallax } from 'react-parallax';
import forest from '../img/f2.jpg'

const ImageOne = () => ( 
    <Parallax className='image' bgImage={forest} strength={800}>
        <div className='content'>
            <span className='img-txt'>
                    A TRIP TO WOODS
            </span>
        </div>

    </Parallax>
);

export default ImageOne;