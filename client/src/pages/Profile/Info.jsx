// TODO: add # of posts, and following numbers
export default function Info({ profilePic, firstName, lastName }) {
  return (
    <div>
      <img className="w-30 h-30 rounded-full" src={profilePic} alt="" />
      Name: {firstName} {lastName}
    </div>
  )
}
