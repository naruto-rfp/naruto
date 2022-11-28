import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function TeamsFollow({ userId }) {
  const testData = [{id: 558, name: 'Tres-Zap', members: 20, fans: 250, banner:'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'}]

  const userIdTest = 702

  const [teamsFollow, setTeamsFollow] = useState([])

  useEffect(() => {
    axios.get(`/api/fans/teams/${userIdTest}`).then((res) => {
      axios
        .get('/api/teams/allrelated', { params: res.data })
        .then((resp) => setTeamsFollow(resp.data))
    })
  }, [])

  return (
    <div className="h-1/3 w-full drop-shadow-lg pt-6 overflow-y-auto">
      <div className="bg-gradient-to-r from-blackCoral to-greenYellow text-white pb-3 text-center">Teams Follow</div>
      {/* hardcoded test data instead of teamsFollow state */}
      {testData.map((team) => {
        return (
          <Link to={`/team/${team.id}`}>
            <div className="h-30 py-1 relative">
              <img src={team.banner} alt="banner" className="h-20 w-full overflow-hidden rounded-sm" />
              <div className="absolute left-10 top-5 flex flex-col">
                <div className="text-white font-bold">{team.name}</div>
                <div className="text-white text-sm">{team.members} Members {team.fans} Fans</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
