import { useEffect, useState } from 'react'
import { Context } from './Context'

import Loading from './Loading'
import ErrorMessage from './ErrorMessage'
import ItemsList from './ItemsList'
import QueueList from './QueueList'
import DeliveredList from './DeliveredList'

function App() {
  const route = 'https://vending-machine-test.vercel.app/api/products'

  //*global state
  const [global, setGlobal] = useState({
    queue: [],
    delivered: [],
  })

  //* local state
  const [loadingPage, setloadingPage] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState({ state: false, msg: '' })

  useEffect(() => {
    LoadData()
  }, [])

  useEffect(() => {
    data !== undefined && setloadingPage(false)
  }, [data])

  // * fecthing function
  const LoadData = async () => {
    try {
      const res = await fetch(route)
      const { data } = await res.json()
      setData(data)
    } catch (error) {
      setError({ state: true, msg: error.toString() })
    }
  }

  return (
    <Context.Provider value={{ global, setGlobal }}>
      <div
        className={`w-full bg-zinc-400 h-screen  flex px-20 ${
          loadingPage ? 'items-center justify-center' : 'items-center'
        } font-sans`}
      >
        {/* fetch error? */}
        {error.state && <ErrorMessage msg={error.msg} />}

        {/* loading? */}
        {!error.state && loadingPage && <Loading />}

        {/* data🎉 */}
        {!error.state && !loadingPage && (
          <>
            <section className="w-1/2 flex justify-center">
              <ItemsList data={data} />
            </section>
            <section className="w-1/2 flex flex-col justify-between space-y-3 h-full py-10">
              <QueueList />
              <DeliveredList />
            </section>
          </>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
