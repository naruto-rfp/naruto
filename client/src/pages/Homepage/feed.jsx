import React, { useState } from 'react'
import Posts from './FeedComponents/Posts'
import Events from './FeedComponents/Events'

export default function Feed({ userId }) {

  const [activeTab, setActiveTab] = useState('posts')
  const toggleTab = function(tab) {
    setActiveTab(tab)
  }
  // axios get request
  return (
  //   <div className='feed'>
  //     <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
  // role="tablist">
  //       <li className={activeTab === 'posts' ? 'active' : ''} onClick={() => toggleTab('posts')}>Posts</li>
  //       <li className={activeTab === 'events' ? 'active' : ''} onClick={() => toggleTab('events')}>Events</li>
  //     </ul>
  //     <div className='content'>

  //     </div>
  //   </div>

//   <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
//     <li className="mr-2" >
//         <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" >Posts</a>
//     </li>
//     <li className="mr-2">
//         <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Events</a>
//     </li>
// </ul>

    <div>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
          "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Posts
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Events
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          {/* {
            posts.map((post) => {
              <Posts post={post}/>
            })
          } */}
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          {/* <div>
            {
              events.map((event) => {
                <Events event={event}/>
              })
            }
          </div> */}
          {/* pass down event comments and cheer for event modal */}
        </div>
      </div>
    </div>
  )
}
