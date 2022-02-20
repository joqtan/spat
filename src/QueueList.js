import { useContext } from 'react'
import { Context } from './Context'
import QueueItem from './QueueItem'

function QueueList() {
  const { global } = useContext(Context)
  return (
    <section className="bg-white rounded-md p-5 h-1/2 shadow-md shadow-gray-500 overflow-y-scroll">
      <p className="text-lg font-bold">On Queue</p>
      {global.queue.map((item) => (
        <QueueItem key={item.app_id} data={item} />
      ))}
    </section>
  )
}
export default QueueList
