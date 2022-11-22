import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamsPlayFor({ teamsPlayFor }) {
  return (
    <div className='teamsPlayFor'>
      {
        teamsPlayFor.map((team) => {
          <Link className="text-gray-800" to="/team">
            {team}
          </Link>
        })
      }
    </div>
  )
}