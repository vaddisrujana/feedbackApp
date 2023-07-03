import './index.css'

const ThankYou = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="back">
      <div className="back1">
        <img src={loveEmojiUrl} alt="love emoji" className="image1" />
        <h1>Thank You</h1>
      </div>
      <p>
        We will see your feedback to improve our customer support <br />{' '}
        performance.
      </p>
    </div>
  )
}
export default ThankYou
