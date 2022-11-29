import { Parallax } from 'react-parallax';
import road from '../img/f1.jpg'

const ImageThree = () => ( 
    <Parallax className='image' bgImage={road} strength={800}>
        <div className='content'>
            <span className='img-txt'>
                    A TRIP TO WOODS
            </span>
        </div>

    </Parallax>
);

export default ImageThree;