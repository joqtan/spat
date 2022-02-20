import { useContext, useEffect, useState } from 'react'
import { Context } from './Context'

function QueueItem({ data }) {
  const { global, setGlobal } = useContext(Context)
  const [timeLeft, setTimeLeft] = useState(data.preparation_time)

  useEffect(() => {
    if (timeLeft !== 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else {
      const newQueue = global.queue.filter(
        (item) => item.app_id !== data.app_id
      )
      setGlobal({
        ...global,
        queue: [...newQueue],
        delivered: [...global.delivered, { ...data }],
      })
    }
  }, [timeLeft])

  return (
    <section key={data.app_id} className="flex space-x-2">
      <p>{data.name}</p>
      <p>{timeLeft}</p>
    </section>
  )
}
export default QueueItem
