import React from 'react'
import {BiComment} from "react-icons/bi"
import {AiOutlineShareAlt , AiFillCaretDown} from "react-icons/ai"
import {FaRegBookmark} from "react-icons/fa"
import {BiUpvote} from "react-icons/bi"
const forumData = {
    accountId: '98767-888-78767',
    username: 'tanaypratap',
    name: 'Tanay Pratap',
    picUrl: 'http://bit.ly/42Zm7tM',
    posts: [
      {
        postId: '36635-787-65778',
        username: 'tanaypratap',
        name: 'Tanay Pratap',
        picUrl: 'http://bit.ly/42Zm7tM',
        post: 'Join InvactHQ for MBA',
        postDescription:
          'Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact.',
        upvotes: 350,
        downvotes: 50,
        tags: ['mba', 'business', 'bootcamp'],
        createdAt: '2023-06-24T12:00:00Z',
        comments: [
          {
            commentId: '89898-856-87576',
            username: 'ashwin4real',
            picUrl: 'http://bit.ly/42Zm7tM',
            likes: 0,
            comment: 'Interested',
            createdAt: '2023-06-24T12:01:00Z',
          },
        ],
        isBookmarked: false,
      },
      {
        postId: '36698-343-321232',
        username: 'trishajain',
        name: 'Trisha Jain',
        picUrl: 'http://bit.ly/42Zm7tM',
        post: 'Can I learn HTML, CSS, and JavaScript in 1 year?',
        postDescription:
          'I am looking to make my career in web development and want to learn these technologies. Can I learn these in 1 year and get a job?',
        upvotes: 150,
        downvotes: 0,
        tags: ['html', 'javascript', 'web development'],
        createdAt: '2023-06-24T12:54:00Z',
        comments: [],
        isBookmarked: false,
      },
    ]
  }

const Question = () => {
  return (
    <div className='Questions'>
      <h2>Latest Post</h2>
      <div className='upvote_btn'>
      <ul className='Question_post'>
      <div className='upvote_section'>
         <BiUpvote/> 
         <p>45</p>
         <AiFillCaretDown/>
        </div>
         {forumData.posts.map(post => (
            <li className='post_items'>
                <div className='post_profile'>
                 <img src = {post.picUrl} width= "30" height= "30"/>
                <h5>Posted by @{post.username}</h5>
                </div>
             
            <h4>{post.post}</h4>
            <div className='post_tags'>
                {post.tags.map(val => (
                    <button>{val}</button>
                ))}
            </div>
            <p>{post.postDescription}</p>
            <hr/>
            <div className='post_btn'>
                <BiComment/>
                <AiOutlineShareAlt/>
                <FaRegBookmark/>
            </div>
            <br/>
            <br/>
            </li>
         ))}
         </ul>
      </div>
       
    </div>
    
  )
}

export default Question