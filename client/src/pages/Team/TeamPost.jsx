import UserIcon from '../../assets/icons/user.svg'

export default function TeamPost({ post }) {
  return (
    <div className="post px-4 py-6 max-w-4xl rounded-md bg-gray-100">
      <div className="post-header flex flex-row gap-4">
        <div className="avatar w-12 h-12 centered rounded-full border border-blackCoral">
          <UserIcon width={24} height={24} />
        </div>
        <div className="post-info flex flex-col">
          <div className="post-author">
            <span className="font-medium">John Doe</span>
          </div>
          <div className="post-date">
            <span className="text-gray-600">11/26/22</span>
          </div>
        </div>
      </div>

      <div className="post-title mt-4">
        <h2 className="text-xl font-medium">{post.title}</h2>
      </div>

      <div className="post-body mt-2">
        <div className="post-content">
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  )
}
