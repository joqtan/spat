import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import ItemCard from './ItemCard'
import ItemsDelivered from './ItemsDelivered'
import ItemsPool from './ItemsPool'
import ItemsQueue from './ItemsQueue'

function App() {
  const route = 'https://vending-machine-test.vercel.app/api/products'
  const [loadingPage, setloadingPage] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState({ state: false, msg: '' })

  useEffect(() => {
    LoadData()
  }, [])

  const LoadData = async () => {
    try {
      const res = await fetch(route)
      const { data } = await res.json()
      setData(data)
    } catch (error) {
      setError({ state: true, msg: error.toString() })
    }
  }

  useEffect(() => {
    data !== undefined && setloadingPage(false)
  }, [data])

  return (
    <>
      <div
        className={`w-screen bg-zinc-400 min-h-screen flex ${
          loadingPage ? 'items-center justify-center' : 'items-center'
        }`}
      >
        {/* fetch error? */}
        {error.state && <ErrorMessage msg={error.msg} />}

        {/* loading? */}
        {!error.state && loadingPage ? 'loading' : ''}

        {/* data🎉 */}
        {!error.state && !loadingPage && (
          <>
            <ItemsPool data={data} />
            <section>
              <ItemsQueue />
              <ItemsDelivered />
            </section>
          </>
        )}
      </div>
    </>
  )
}

export default App
