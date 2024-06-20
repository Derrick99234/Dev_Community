import newsletter from '../../assets/newsletter.png';
import Button from '../Button';

const NewsLetter = () => {
    return (
        <div className='mb-6 mt-[40px]'>
            <h2 className='text-center font-bold text-[30px] max-w-md mx-auto mb-2'>Subscribe To Receive Updates</h2>
            <div className='w-full flex items-start justify-center flex-wrap md:items-center md:justify-between md:flex-nowrap gap-8'>
                <img src={newsletter} alt="Newletter" className="w-full h-[400px] object-contain" />

                <div className="w-full flex items-start justify-center gap-4 md:gap-7 flex-col">
                    <h1 className="text-[26px] font-bold">Start Chatting with friends and families, anywhere, anytime</h1>
                    <form>
                        <div className='mb-[20px] flex items-start justify-start gap-2 flex-col w-full'>
                            <input type="text" placeholder='Enter your name' className='border p-2 w-full' required/>
                            <input type="email" placeholder='Enter your email' className='border p-2 w-full' required/>
                        </div>
                        <Button>
                            Start chatting now
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;