import { useState } from 'react'
import banner from '../../assets/img/naruto_banner.webp'
import UserIcon from '../../assets/icons/user.svg'
import EditIcon from '../../assets/icons/pen-to-square.svg'

export default function Team() {
  const [activeTab, setActiveTab] = useState('posts')
  const handleTabClick = (tab) => () => setActiveTab(tab)

  return (
    <main className="max-w-6xl mx-auto mt-12">
      <section className="py-6">
        <div className="h-[240px] overflow-hidden relative">
          <img src={banner} alt="Naruto" className="absolute inset-0 object-cover w-full h-full" />
        </div>
      </section>

      <section className="py-6 flex flex-row gap-4">
        <div className="team team-group flex flex-col gap-8 bg-gray-300">
          <div className="centered">
            <div className="avatar w-24 h-24 centered rounded-full border border-blackCoral">
              <UserIcon width={48} height={48} />
            </div>
          </div>
          <div className="text-center text-2xl">
            <h3>Team Name</h3>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-col font-medium">
              <span className="text-xl">Posts</span>
              <span className="mt-2 text-2xl tect-center">498</span>
            </div>
            <div className="flex flex-col font-medium">
              <span className="text-xl">Followers</span>
              <span className="mt-2 text-2xl text-center">3</span>
            </div>
          </div>
        </div>

        <div className="coaches team-group bg-rose-400">
          <div className="heading text-center">
            <h1 className="text-xl">Coaches</h1>
          </div>
        </div>

        <div className="members team-group bg-rose-400">
          <div className="heading text-center">
            <h1 className="text-xl">Team Members</h1>
          </div>
        </div>

        <div className="fans team-group bg-rose-400">
          <div className="heading text-center">
            <h1 className="text-xl">Fans</h1>
          </div>
        </div>
      </section>

      <section className="about py-6">
        <div className="px-6 py-8 rounded-md bg-gray-300">
          <div className="heading">
            <h3 className="text-2xl font-medium">About</h3>
          </div>

          <div className="body flex flex-row gap-16">
            <div className="mt-2 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet
              aliquam id diam maecenas. Amet nisl suscipit adipiscing bibendum est ultricies
              integer. Sit amet luctus venenatis lectus magna fringilla. Eget gravida cum sociis
              natoque penatibus.
            </div>

            <div>
              <button
                type="button"
                className="btn flex flex-row gap-2 rounded-md border bg-gray-300 border-gray-800 hover:bg-gray-800 hover:text-white hover:fill-white"
              >
                <EditIcon width={24} height={24} />
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="feed py-8 pb-24">
        <div className="feed-header flex flex-row">
          <div className="tabs flex-grow font-medium text-center text-gray-600 border-b border-gray-400">
            <div className="flex flex-wrap -mb-px">
              <button className="tab mr-2" onClick={handleTabClick('posts')} type="button">
                {activeTab === 'posts' ? (
                  <div
                    className="inline-block p-4 cursor-pointer text-blue-500 rounded-t-lg border-b-4 border-blue-500"
                    aria-current="page"
                  >
                    Posts
                  </div>
                ) : (
                  <div className="inline-block p-4 cursor-pointer rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-blue-500">
                    Posts
                  </div>
                )}
              </button>
              <button className="tab mr-2" onClick={handleTabClick('events')} type="button">
                {activeTab === 'events' ? (
                  <div
                    className="inline-block p-4 cursor-pointer text-blue-500 rounded-t-lg border-b-4 border-blue-500"
                    aria-current="page"
                  >
                    Events
                  </div>
                ) : (
                  <div className="inline-block p-4 cursor-pointer rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-blue-500">
                    Events
                  </div>
                )}
              </button>
            </div>
          </div>

          <div className="px-4">
            <button
              type="button"
              className="btn rounded-md border border-gray-800 hover:bg-gray-200"
            >
              New {activeTab === 'posts' ? 'Post' : 'Event'}
            </button>
          </div>
        </div>

        <div className="feed-content">
          {activeTab === 'posts' && (
            <div className="posts mt-8 flex flex-col gap-8">
              <div className="post px-4 py-6 max-w-4xl rounded-md bg-gray-100">
                <div className="post-header flex flex-row gap-4">
                  <div className="avatar w-12 h-12 centered rounded-full border border-blackCoral">
                    <UserIcon width={24} height={24} />
                  </div>
                  <div className="post-info flex flex-col">
                    <div className="post-author">
                      <span className="font-medium">Author</span>
                    </div>
                    <div className="post-date">
                      <span className="text-gray-600">Date</span>
                    </div>
                  </div>
                </div>

                <div className="post-body mt-4">
                  <div className="post-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit
                      amet aliquam id diam maecenas. Amet nisl suscipit adipiscing bibendum est
                      ultricies integer. Sit amet luctus venenatis lectus magna fringilla. Eget
                      gravida cum sociis natoque penatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="post px-4 py-6 max-w-4xl rounded-md bg-gray-100">
                <div className="post-header flex flex-row gap-4">
                  <div className="avatar w-12 h-12 centered rounded-full border border-blackCoral">
                    <UserIcon width={24} height={24} />
                  </div>
                  <div className="post-info flex flex-col">
                    <div className="post-author">
                      <span className="font-medium">Author</span>
                    </div>
                    <div className="post-date">
                      <span className="text-gray-600">Date</span>
                    </div>
                  </div>
                </div>

                <div className="post-body mt-4">
                  <div className="post-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit
                      amet aliquam id diam maecenas. Amet nisl suscipit adipiscing bibendum est
                      ultricies integer. Sit amet luctus venenatis lectus magna fringilla. Eget
                      gravida cum sociis natoque penatibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="events mt-8 flex flex-col gap-8">
              <div className="event px-4 py-6 max-w-4xl rounded-md bg-gray-100">
                <div className="event-header flex flex-row gap-4">
                  <div className="avatar w-12 h-12 centered rounded-full border border-blackCoral">
                    <UserIcon width={24} height={24} />
                  </div>
                  <div className="event-info flex flex-col">
                    <div className="event-author">
                      <span className="font-medium">Author</span>
                    </div>
                    <div className="event-date">
                      <span className="text-gray-600">Date</span>
                    </div>
                  </div>
                </div>

                <div className="event-body mt-4">
                  <div className="event-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum
                      non. Ante metus dictum at tempor commodo ullamcorper a lacus. Elementum
                      sagittis vitae et leo duis ut diam quam nulla. Faucibus et molestie ac feugiat
                      sed lectus vestibulum mattis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="event px-4 py-6 max-w-4xl rounded-md bg-gray-100">
                <div className="event-header flex flex-row gap-4">
                  <div className="avatar w-12 h-12 centered rounded-full border border-blackCoral">
                    <UserIcon width={24} height={24} />
                  </div>
                  <div className="event-info flex flex-col">
                    <div className="event-author">
                      <span className="font-medium">Author</span>
                    </div>
                    <div className="event-date">
                      <span className="text-gray-600">Date</span>
                    </div>
                  </div>
                </div>

                <div className="event-body mt-4">
                  <div className="event-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum
                      non. Ante metus dictum at tempor commodo ullamcorper a lacus. Elementum
                      sagittis vitae et leo duis ut diam quam nulla. Faucibus et molestie ac feugiat
                      sed lectus vestibulum mattis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
