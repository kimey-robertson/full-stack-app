import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Posts from '../Posts/Posts';
import RightSidebar from '../RightSidebar/RightSidebar';
import './MainDisplay.css';
import { useAppSelector } from "../../app/hooks";
import NoPosts from '../NoPosts/NoPosts';

export default function MainDisplay() {
  const posts = useAppSelector(state => state.posts);  


  // The idea here is that there is two side bars either side of the main display section, which are both fixed, just like the header.
  // The middle display section, however, moves along with the scroll. 
  return (
    <main>
        <div className='container-fluid' style={{height: '100%'}}>
            <div className='row' style={{height: '100%'}}>
                <div className='col-2 sidebar'>
                    <LeftSidebar />
                </div>

                <div className='col-8'>
                    {posts.onPosts === true && <Posts />}
                    {posts.onPosts === false && <NoPosts />}
                </div>
                <div className='col-2 sidebar'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    </main>
  )
}
