import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamsFollow() { //pass in teamsFollow

  const testData = [{team: "49ers", banner: 'https://preview.redd.it/nasqgycd7q681.jpg?auto=webp&s=f060c836481a3aaae3bd1d6b29a3ae0529bcfc0b'}, {team: "Warriors", banner: 'https://external-preview.redd.it/x_O3ZIY_JM225HtAXfeEOGTYQR_dizhetHXZWxgTrDo.jpg?auto=webp&s=2f49ab329900cbfaccf22e086d52840fa32f2d8b'}, {team: "Giants", banner: 'http://images6.fanpop.com/image/photos/38000000/Naruto-banner-anime-38006985-851-315.png'}]

  return (
    <div className="h-100 w-full drop-shadow-lg">
      <div className="pb-2">Following</div>
      {testData.map((data) => {
        return (
          // add link route to the specific team id
          <Link to="/team">
            <div className="h-30 py-1 relative">
              <img src={data.banner} className="rounded-lg h-full grayscale"/>
              <div className="absolute left-0 top-0 bg-gradient-to-r from-blackCoral to-greenYellow/70 rounded-lg">{data.team}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
