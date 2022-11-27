// TODO: add # of posts, and following numbers
export default function Info({ profilePic, firstName, lastName }) {
  return (
    <div className="flex flex-grow rounded-md flex-col gap-8 bg-gray-300 px-6 py-8">
      <div className="centered">
        <div className="avatar w-24 h-24 centered rounded-full border border-blackCoral">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div className="text-center text-2xl">
        <h3>
          {firstName} {lastName}
        </h3>
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
  )
}
