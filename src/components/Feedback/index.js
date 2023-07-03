import {Component} from 'react'
import FeedbackItem from '../FeedbackItem'
import ThankYou from '../ThankYou'
import './index.css'

class Feedback extends Component {
  state = {onclick: false, className: 'head'}

  feedbackButton = () => {
    this.setState(prevState => ({onclick: !prevState.onclick}))
    this.setState({className: 'head1'})
  }

  render() {
    const {onclick, className} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="background">
        <div className="background1">
          <h1 className={className}>
            How satisfied are you with our
            <br /> customer support performance
          </h1>
          <ul className="ul">
            {onclick ? (
              <ThankYou loveEmojiUrl={loveEmojiUrl} />
            ) : (
              emojis.map(each => (
                <FeedbackItem
                  emojis={each}
                  key={each.id}
                  feedbackButton={this.feedbackButton}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
