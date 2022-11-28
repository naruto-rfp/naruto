import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function TeamsPlayFor({ userId }) {
  const testData = [{id: 242, name: 'Stim', members: 20, fans: 100, banner:'https://media.istockphoto.com/id/1312143573/photo/football-soccer-ball-on-grass-field-on-stadium.jpg?b=1&s=170667a&w=0&k=20&c=ViNtenxvaAYV64EriIYK4L5B1MH8-M0KvN81u0Ax3qk='}, {id: 820, name: 'Solarbreeze', members: 15, fans:150, banner: 'https://media.istockphoto.com/id/1332278067/photo/ice-hockey-rink-arena-professional-player-shooting-the-puck-with-hockey-stick-focus-on-3d.jpg?b=1&s=170667a&w=0&k=20&c=c4TysigadbnEPZlKpm957NrrlW7qRPjNGTZFlXHdoBI='}]

  const [allUserTeams, setAllUserTeams] = useState([])

  useEffect(() => {
    axios.get(`/api/members/teams/${userId}`).then((res) => {
      axios
        .get('/api/teams/allrelated', { params: res.data })
        .then((resp) => setAllUserTeams(resp.data))
    })
  }, [])

  return (
    <div className="h-1/3 w-full drop-shadow-lg pb-10 overflow-y-auto">
      <div className="bg-gradient-to-r from-blackCoral to-greenYellow text-white pb-3 text-center">Teams Play For</div>
      {/* hardcoded test data instead of allUserTeams state */}
      {testData.map((data) => {
        return (
          <Link to={`/team/${data.id}`}>
            <div className="h-30 py-1 relative border-blackCoral">
              <img src={data.banner} alt="banner" className="h-20 w-full overflow-hidden rounded-sm" />
              <div className="absolute left-10 top-5 flex flex-col">
                <div className=" text-white font-bold">{data.name}</div>
                <div className="text-white text-sm">{data.members} Members {data.fans} Fans</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
