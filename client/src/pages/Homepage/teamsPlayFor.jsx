import React from 'react'
import { Link } from 'react-router-dom'

//pass in id of teams play for
export default function TeamsPlayFor() {
  const testData = [{team: "49ers", banner: 'https://preview.redd.it/nasqgycd7q681.jpg?auto=webp&s=f060c836481a3aaae3bd1d6b29a3ae0529bcfc0b'}, {team: "Warriors", banner: 'https://external-preview.redd.it/x_O3ZIY_JM225HtAXfeEOGTYQR_dizhetHXZWxgTrDo.jpg?auto=webp&s=2f49ab329900cbfaccf22e086d52840fa32f2d8b'}, {team: "Giants", banner: 'http://images6.fanpop.com/image/photos/38000000/Naruto-banner-anime-38006985-851-315.png'}]

  return (
    <div className="h-100 w-full drop-shadow-lg pb-10">
      <div className="pb-2">My Teams</div>
      {testData.map((data) => {
        return (
          // insert specific team id to link route later
          <Link to="/team">
            <div className="h-30 py-1 relative border-blackCoral">
              <img src={data.banner} alt="banner" className="rounded-lg h-full grayscale" />
              <div className="absolute left-0 top-0 bg-gradient-to-r from-blackCoral to-greenYellow/70 rounded-lg">
                {data.team}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
