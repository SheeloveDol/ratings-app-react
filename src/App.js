import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);


    // Function for adding a new feedback from a completed form
    const addFeedback = (newFeedback) => {
        // uuidv4() as a unique id to the user created feedbacks
        newFeedback.id = uuidv4()
        setFeedbacks([ newFeedback, ...feedbacks])
    }


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
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats data={feedbacks} />
                <FeedbackList  data={feedbacks} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App 