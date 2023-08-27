import './index.css'

const eventsList = props => {
  const {user, clickEvent} = props
  const {imageUrl, name, location, id} = user

  const onclick = () => {
    clickEvent(id)
  }

  return (
    <li onClick={onclick}>
      <button type="button">
        <img src={imageUrl} alt="event" className="image" />
        <p className="heading12">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default eventsList
