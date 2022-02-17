import ItemCard from './ItemCard'

function ItemsPool({ data }) {
  return (
    <section className="grid grid-cols-4 gap-3 mx-10 w-1/2">
      {data.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </section>
  )
}
export default ItemsPool
