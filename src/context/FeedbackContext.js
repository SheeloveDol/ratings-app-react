import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// need to create a 'provider' to wrap components in App.js
export const FeedbackProvider = ({ children }) => {
    // setting our state
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is the first item from context',
            rating: 9
        },
        {
            id: 2,
            text: 'This is the second item from context',
            rating: 10
        },
        {
            id: 3,
            text: 'This is the third item from context',
            rating: 7
        }
    ])

    const deleteFeedback = (id) => {
        // Creating a warning popup to confirm delete action
        if (window.confirm('Do you want to delete this feedback forever?')) {
        setFeedback(feedback.filter(feedback => feedback.id !== id))
        }
        
    }

    const addFeedback = (newFeedback) => {
        // uuidv4() as a unique id to the user created feedbacks
        newFeedback.id = uuidv4()
        setFeedback([ newFeedback, ...feedback])
    }


    // passing the feedback state into the components that need it
    return <FeedbackContext.Provider 
    value={{ 
        feedback, 
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext