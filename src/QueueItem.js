import { useContext, useEffect, useState } from 'react'
import { Context } from './Context'

function QueueItem({ data }) {
  const { global, setGlobal } = useContext(Context)
  const [timeLeft, setTimeLeft] = useState(data.preparation_time)

  useEffect(() => {
    // * decrease countdown

    if (timeLeft !== 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else {
      // * cleaning queue

      const newQueue = global.queue.filter(
        (item) => item.app_id !== data.app_id
      )

      setGlobal({
        ...global,
        queue: [...newQueue], // * delivered items deleted from queue list
        delivered: [...global.delivered, { ...data }], // * delivered list update
      })
    }
  }, [timeLeft])

  return (
    <section
      key={data.app_id}
      className="flex w-3/5 font-semibold justify-between"
    >
      <p>⏲ {data.name}</p>
      <p
        className={`${
          timeLeft < 6
            ? 'text-green-700'
            : timeLeft < 11
            ? 'text-yellow-500'
            : ''
        }`}
      >
        {timeLeft} seg
      </p>
    </section>
  )
}
export default QueueItem
