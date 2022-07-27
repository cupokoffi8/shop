import Image from 'next/image';
import images from '../assets';

const Loader = () => (
  <div style={{ marginTop: '-100px' }} className="flexCenter w-ull">
    <Image src={images.loader} alt="loader" width={100} objectFit="contain" />
  </div>
);

export default Loader;
