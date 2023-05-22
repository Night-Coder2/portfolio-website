import React, {FC} from 'react'

const playlist:FC = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <iframe className='border-[12] bg-gray-900'
                            src="https://open.spotify.com/embed/playlist/1YVsWmilcaK6jnMUKeY7mD?utm_source=generator"
                            width="100%" height="352" allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default playlist