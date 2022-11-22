import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamsFollow({ teamsFollow }) {
  return (
    <div className="teamsFollow">
      {
        teamsFollow.map((team) => {
          <Link className="text-gray-800" to="/team">
            {team}
          </Link>
        })
      }
    </div>
  )
}