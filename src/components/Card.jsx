import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const Card = (
    {
    className="",
    heading,
    profileImage,
    hashtags = [],
    createdAt = '',
    bgImage = '',
    feedbackEnabled = true,
    }
) => {

    const [likesCount, setLikesCount] = useState(0);
    const [disLikesCount, setDisLikesCount] = useState(0);

    const handleLikesCount = () => {
        setLikesCount(likesCount + 1);
        if(disLikesCount !== 0) {
            setDisLikesCount(disLikesCount - 1);
        }
    }

    const handleDislikesCount = () => {
        setDisLikesCount(disLikesCount + 1);
        if(likesCount !== 0) {
            setLikesCount(likesCount - 1);
        }
    }
    
    return (
        <>
            <div className={`text-white ${className} h-[450px] w-72 rounded-2xl flex py-4 flex-col px-6 bg-zinc-400 bg-opacity-10 backdrop-blur-md border border-gray-600`}>
                {profileImage && <img src={profileImage} alt='profile' className="w-16 h-16 rounded-full mb-4"/>}
                <h2 className='text-xl font-bold'>{heading || `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`}</h2>
                <div className='flex justify-start items-center flex-wrap mt-5 relative right-3'>
                    {hashtags &&
                        hashtags.map((hashtag, index) => (
                            <div 
                                key={index} 
                                className={`bg-zinc-950 bg-opacity-30 border border-gray-500 rounded-lg px-[8px] py-1 m-1`}
                            >
                                <p className='text-[13px]'>#{hashtag}</p> 
                            </div>    
                        ))
                    }
                </div>
                <p className='mt-3'>{createdAt || 'Today'}</p>

                {bgImage && (
                    <div className='w-full h-40 bg-black rounded-xl mt-2 overflow-hidden'>
                        <img src={bgImage} alt="bgImage" className='rounded-xl object-cover w-full h-full'/>
                    </div>
                )}

                {feedbackEnabled && 
                <div className='flex justify-between items-center w-full mt-5'>
                    <button className='bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center space-x-2 px-4 py-1 rounded-md shadow-lg transition-transform transform hover:scale-105' onClick={handleLikesCount}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span> {likesCount}</span>
                    </button>
                    <button className='bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center space-x-2 px-4 py-1 rounded-md shadow-lg transition-transform transform hover:scale-105' onClick={handleDislikesCount}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                        <span> {disLikesCount}</span>
                    </button>
                </div>
                || <p className='mt-5 text-center text-gray-400'>Feedback disabled</p>
                }
            </div>
        </>
    )
}

export default Card
