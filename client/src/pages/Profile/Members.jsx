export default function Members({ memberData }) {
  console.log(memberData)
  return (
    <div className="text-center text-sm">
      {memberData?.map((member) => {
        return <h4 key={member.id}>{member.name}</h4>
      })}
    </div>
  )
}
