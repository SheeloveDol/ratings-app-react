import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

// need to create a 'provider' to wrap components in App.js
export const FeedbackProvider = ({ children }) => {
    // setting our state
    const [feedback, setFeedback] = useState(FeedbackData)

    // Setting up the 'edit' state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    // Function to edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Function to delete an item
    const deleteFeedback = (id) => {
        // Creating a warning popup to confirm delete action
        if (window.confirm('Do you want to delete this feedback forever?')) {
        setFeedback(feedback.filter(feedback => feedback.id !== id))
        }
        
    }


    // Function to add an item
    const addFeedback = (newFeedback) => {
        // uuidv4() as a unique id to the user created feedbacks
        newFeedback.id = uuidv4()
        setFeedback([ newFeedback, ...feedback ])
    }


    // Function to update an item
    const updateFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        )
    }


    // passing the feedback state into the components that need it
    return <FeedbackContext.Provider 
    value={{ 
        feedback, 
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext