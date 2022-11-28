export default function TeamEvent({ event }) {
  return (
    <div className="event px-4 py-6 max-w-4xl rounded-md bg-gray-100">
      <div className="event-title mt-4">
        <h2 className="text-2xl font-medium">{event.name}</h2>
      </div>

      <div className="event-date">
        <span className="text-gray-600">{new Date(event.date).toLocaleDateString()}</span>
      </div>

      <div className="event-location mt-2">
        <span className="text-gray-600">{event.location}</span>
      </div>

      <div className="event-body mt-2">
        <div className="event-content">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  )
}
