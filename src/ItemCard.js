import { useContext } from 'react'
import { Context } from './Context'

function ItemCard({ data }) {
  const { global, setGlobal } = useContext(Context)

  const productHandler = () => {
    setGlobal({
      ...global,
      queue: [
        ...global.queue,
        {
          ...data,
          app_id: `${Math.random() * 1000}${data.id}`,
          time: data.preparation_time,
        },
      ],
    })
  }

  return (
    <>
      <section
        className="flex flex-col w-4/5 items-center bg-white rounded-md p-3 hover:cursor-pointer hover:shadow-md hover:shadow-gray-800 space-y-3"
        onClick={productHandler}
      >
        <header className="flex justify-center w-full">
          <p className="text-sm  w-11/12 text-center overflow-hidden whitespace-nowrap text-ellipsis">
            {data.name}
          </p>
        </header>
        <main>
          <img
            src={data.thumbnail}
            alt=""
            className="w-25 h-12 object-contain"
          />
        </main>
      </section>
    </>
  )
}
export default ItemCard
