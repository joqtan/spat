function ItemCard({ data }) {
  return (
    <>
      <section className="flex flex-col font-sans w-3/5 items-center bg-white rounded-md p-3 justify-between ">
        <header className="flex justify-center w-full">
          <p className="text-sm w-11/12 text-center overflow-hidden whitespace-nowrap text-ellipsis">
            {data.name}
          </p>
        </header>
        <main>
          <img
            src={data.thumbnail}
            alt=""
            className="w-24 h-12 object-contain"
          />
        </main>
      </section>
    </>
  )
}
export default ItemCard
