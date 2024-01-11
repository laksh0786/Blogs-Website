import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';


function Content() {

    //Consume the data from the Context API
    const { posts, loading } = useContext(AppContext);

    return (
        <div className='w-11/12 max-w-[650px] flex flex-col gap-y-1 mt-[78px] mb-[17px]'>
            {
                loading ? (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (
                                <div>
                                    <p>No Posts Exists</p>
                                </div>
                            ) :
                            (
                                posts.map((post) => {
                                    return (
                                        <div key={post.id}>

                                            <h3 className='font-bold text-[18px] mb-[2px]'>{post.title}</h3>

                                            <p className='text-[12px] mb-[0.25px]'>
                                                By <span className='italic'>{post.author}</span> on 
                                                &nbsp;<span className='underline font-bold'>{post.category} </span>
                                            </p>

                                            <p className='text-[12px]'>
                                                Posted On <span>{post.date}</span>
                                            </p>

                                            <p className='text-sm mt-3 text-justify'>
                                                {post.content}
                                            </p>

                                            <div className='flex gap-x-3 mt-2'>
                                                {
                                                    post.tags.map((tag, index) => {
                                                        return (
                                                            <span className='text-blue-700 text-xs underline font-bold' key={index}>#{tag}</span>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <hr className='my-8'/>

                                        </div>
                                    )
                                })
                            )
                    )
            }
        </div>
    )
}

export default Content