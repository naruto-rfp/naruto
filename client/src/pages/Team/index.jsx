/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useStore } from '../../lib/fastContext'
import ChangeBannerPic from './ChangeBannerPic'
import ChangeAvatarPic from './ChangeAvatarPic'
import TeamPost from './TeamPost'
import TeamEvent from './TeamEvent'
import EditIcon from '../../assets/icons/pen-to-square.svg'

export default function Team() {
  const { teamId } = useParams()
  const [activeTab, setActiveTab] = useState('posts')
  const [loading, setLoading] = useState(true)
  const [teamData, setTeamData] = useState(null)
  const [teamPosts, setTeamPosts] = useState([])
  const [teamEvents, setTeamEvents] = useState([])
  const [page, setPage] = useState(1)
  const [modal, setModal] = useStore('modal')
  const handleTabClick = (tab) => () => setActiveTab(tab)
  const changeBanner = useCallback(() => {
    setModal({
      ...modal,
      content: (
        <ChangeBannerPic updatePic={(url) => setTeamData({ ...teamData, teamBannerPic: url })} />
      ),
    })
  }, [modal, setModal, teamData])
  const changeAvatar = useCallback(() => {
    setModal({
      ...modal,
      content: (
        <ChangeAvatarPic updatePic={(url) => setTeamData({ ...teamData, teamAvatarPic: url })} />
      ),
    })
  }, [modal, setModal, teamData])

  const fetchData = async () => {
    const { data: team } = await axios.get(`/api/teams/${teamId}`)
    const { data: posts } = await axios.get(`/api/teams/${teamId}/posts?page=${page}`)
    const { data: events } = await axios.get(`/api/teams/${teamId}/events?page=${page}`)
    setTeamData(team[0])
    setTeamPosts(posts)
    setTeamEvents(events)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className="max-w-6xl mx-auto mt-12">
      <section className="py-6">
        <div onClick={changeBanner} className="h-[240px] overflow-hidden relative cursor-pointer">
          <img
            src={teamData.teamBannerPic}
            alt="team banner"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </section>

      <section className="py-6 flex flex-row gap-4">
        <div className="team team-group flex flex-col gap-8 bg-gradient-to-b from-blackCoral to-greenYellow">
          <div className="centered">
            <div onClick={changeAvatar} className="w-24 h-24 centered rounded-full cursor-pointer">
              <img src={teamData.teamAvatarPic} alt="Team Avatar" />
            </div>
          </div>
          <div className="text-center text-2xl">
            <h3>{teamData.name}</h3>
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

        <div className="coaches team-group bg-gradient-to-b from-blackCoral to-greenYellow">
          <div className="heading text-center">
            <h1 className="text-xl">Coaches</h1>
          </div>
        </div>

        <div className="members team-group bg-gradient-to-b from-blackCoral to-greenYellow">
          <div className="heading text-center">
            <h1 className="text-xl">Team Members</h1>
          </div>
        </div>

        <div className="fans team-group bg-gradient-to-b from-blackCoral to-greenYellow">
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
              {teamPosts.map((post) => (
                <TeamPost key={post.id} post={post} />
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="events mt-8 flex flex-col gap-8">
              {teamEvents.map((event) => (
                <TeamEvent key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
