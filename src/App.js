import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  // function to delete feedback/ratings. We'll have to 'prop-drill' all the way to FeedbackItem

  const deleteFeedback = (id) => {
    // Creating a warning popup to confirm delete action
    if (window.confirm('Do you want to delete this feedback forever?')) {
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }
    
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats data={feedbacks} />
        <FeedbackList  data={feedbacks}
        handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App 