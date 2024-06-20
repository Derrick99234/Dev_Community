
import Button from '../Button';
import heroBg from '../../assets/herobg.png';

const Hero = () => {
    return (
        <div className='w-full flex items-start justify-center flex-wrap md:items-center md:justify-between md:flex-nowrap gap-8'>
            <div className="w-full flex items-start justify-center gap-4 md:gap-7 flex-col">
                <h1 className="text-[26px] md:text-[40px] font-bold">Start Chatting with friends and families, anywhere, anytime</h1>
                <p>Great software that allows you to chat with anyone, anywhere, anytime without interruption</p>
                <Button>
                    Start chatting now
                </Button>
            </div>
            <img src={heroBg} alt="Hero" className="w-full h-[400px] object-contain" />
        </div>
    );
}

export default Hero;