import { useStore } from '../../lib/fastContext'

export default function Home() {
  const [modal, setModal] = useStore('modal')
  const handleClick = () => {
    setModal({
      ...modal,
      content: (
        <div className="bg-black text-white">
          <h1>Test</h1>
        </div>
      ),
    })
  }

  return (
    <div className="text-black">
      <div>home page here</div>
      <div>
        <button type="button" onClick={handleClick} className="px-4 py-2 bg-sky-500">
          Open Modal
        </button>
      </div>
    </div>
  )
}
