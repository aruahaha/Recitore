import React from 'react'
import RemoveReview from './RemoveReview'

const UserReviews = ({ reviews }) => {
    return (
        <div className='flex flex-col gap-10'>
            <div>
                <div className='flex flex-col bg-nav lg:w-full rounded-3xl py-5 px-5 text-nav-text'>
                    <div className='flex flex-col gap-5 '>
                        <h1 className='text-2xl font-bold'>Your Reviews</h1>
                        {reviews.map((item, index) => (
                            <div key={index}>
                                {item.reviews.length > 0 && (
                                    <>
                                        <h1 className='text-3xl font-bold'>{item.recipeName}</h1>
                                        <div className='flex flex-col text-nav rounded-lg  gap-5'>
                                            {item.reviews.map((review) => (
                                                <div key={review._id} className='p-2 bg-bgColor border-nav-text border-2 rounded-2xl flex flex-col gap-2'>
                                                    <h1 className='text-xl font-bold'>{review.name}</h1>
                                                    <p className='text-lg'>{review.review}</p>
                                                    <RemoveReview recipeId={item.recipeId} reviewId={review._id} />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReviews
