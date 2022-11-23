import RadarChart from './RadarChart'

export default function Profile() {
  return (
    <section className="h-full justify-center">
      <div className="text-gray-600 body-font">
        <div className="flex justify-center items-center flex-wrap mb-10">
          <img
            className="h-64"
            src="https://timelinecovers.pro/facebook-cover/download/manchester-united-fc-facebook-cover.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="items-center text-center bg-darkBlueGray rounded-lg h-96">
            Name, Info here
          </div>
          <div className="border-solid border-2 border-indigo-600 items-center text-center h-96">
            <RadarChart />
          </div>
          <div className="items-center text-center h-96">Followers</div>
          <div className="items-center text-center h-96">Members</div>
        </div>
        <div className="flex justify-center items-center flex-wrap mt-10">About here.</div>
      </div>
    </section>
  )
}
