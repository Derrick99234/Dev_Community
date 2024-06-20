import { FaMagic, FaMobile, FaVideo } from 'react-icons/fa';

const chatAppFeatures = [
    { icon: <FaMagic />, title: 'Latest design', text: 'Easy to use app, attractive and intuitive design' },
    { icon: <FaMobile />, title: 'Fully responsive', text: 'You can use this app on your laptops, as well as your tablets and phone' },
    { icon: <FaVideo />, title: 'Video calls', text: 'Reach out to friends and family and see them using this feature' },
];

const Features = () => {
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-[30px] max-w-md mx-auto mb-2'>Our Application Provides The Best Features for Chatting</h2>
            <div className='flex items-center justify-center gap-3 md:flex-row flex-col'>
                {chatAppFeatures.map((feature, index) => (
                    <div key={index} className='flex items-center justify-center flex-col text-center'>
                        <div className='transition-all text-[30px] mb-2 bg-white shadow-lg p-[30px] rounded-xl text-blue hover:text-white hover:bg-blue'>
                            {feature.icon}
                        </div>

                        <h3 className='text-[20px] font-bold my-5'>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;