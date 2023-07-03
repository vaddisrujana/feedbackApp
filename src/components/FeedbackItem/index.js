import './index.css'

const FeedbackItem = props => {
  const {emojis, feedbackButton} = props
  const {name, imageUrl} = emojis

  return (
    <li>
      <button type="button" className="button" onClick={feedbackButton}>
        <img src={imageUrl} alt={name} className="image" />
      </button>

      <p className="para">{name}</p>
    </li>
  )
}

export default FeedbackItem
