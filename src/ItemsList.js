import ItemCard from './ItemCard'

function ItemsList({ data }) {
  return (
    <section className="grid grid-cols-3 gap-3 mx-10">
      {data.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </section>
  )
}
export default ItemsList
