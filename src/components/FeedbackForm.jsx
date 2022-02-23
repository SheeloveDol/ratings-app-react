import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

    function FeedbackForm({ handleAdd }) {

        // Creating a default state for our form
        const [texts, setTexts] = useState('')
        const [rating, setRating] = useState(10)
        const [btnDisabled, setBtnDisabled] = useState(true)
        const [message, setMessage] = useState('')

        // This function allows up to capture the changes in our input field and set it as the new state()
        const handleTextChange = (e) => {
            
            // Validation for a minimum of 15 characters before being able to submit a rating
            if (texts === '') {
                setBtnDisabled(true)
                setMessage(null)
            } else if (texts !== '' && texts.trim().length <= 15) {
                setMessage('A Review must be a minimum of 15 characters')
                setBtnDisabled(true)
            } else {
                setMessage(null)
                setBtnDisabled(false)
            }

            setTexts(() => e.target.value)
        }


        // Function to handle the submission of a completed feedback form
        const handleSubmit = (e) => {
            e.preventDefault()
            if(texts.trim().length > 15) {
                const newFeedback = {
                    text: texts,
                    rating,
                }
            handleAdd(newFeedback)

            // To clear textfield after submission
            setTexts('')
            }
        }


        return (
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>Please let us know how you how we can better service you.</h2>
                    <RatingSelect select={(rating) => setRating(rating)} />
                    <div className="input-group">
                        <input type="text" placeholder='Leave a review...' onChange={handleTextChange} value={texts} />
                        <Button type='submit' isDisabled={btnDisabled} >Submit</Button>
                    </div>
                    {message && <div className='message'>{message}</div>}
                </form>
            </Card>
        )
    }

    export default FeedbackForm
