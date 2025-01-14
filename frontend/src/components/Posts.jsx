import React, {useState} from 'react'

import Img01 from '../assets/images/img01.jpg'
import Img02 from '../assets/images/img02.jpg'
import Img03 from '../assets/images/img03.jpg'
import Img04 from '../assets/images/img04.jpg'

import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Img01,
        category: 'Business',
        title: 'This is Post 1',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look.',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Img02,
        category: 'Technology',
        title: 'This is Post 2',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look.',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Img03,
        category: 'Education',
        title: 'This is Post 3',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look.',
        authorID: 3
    },
    {
        id: '4',
        thumbnail: Img04,
        category: 'Art',
        title: 'This is Post 4',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look.',
        authorID: 11
    }
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className='posts'>
            <div className="container posts__container">
                {posts.map(
                    ({id, thumbnail, category, title, desc, authorID}) => 
                    <PostItem key={id} postID={id} thumbnail={thumbnail} 
                    category={category} title={title} description={desc} 
                    authorID={authorID} 
                    />
                )}
            </div>
        </section>
    )
}

export default Posts