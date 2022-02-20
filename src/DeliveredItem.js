function DeliveredItem({ data }) {
  return (
    <section key={data.app_id} className="flex space-x-2 font-semibold">
      <p>✔️ {data.name}</p>
    </section>
  )
}
export default DeliveredItem
