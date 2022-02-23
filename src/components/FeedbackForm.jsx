import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

function FeedbackForm() {
  // Creating a default state for our form
  const [texts, setTexts] = useState('')

  // This function allows up to capture the changes in our input field and set it as the new state(Texts)
  const handleTextChange = (e) => {
    setTexts(() => e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>Please let know how you how we can better service you.</h2>
        {/* ToDo --- rating select component */}
        <div className="input-group">
          <input type="text" placeholder='Leave a review...' onChange={handleTextChange} value={texts} />
          <Button type='submit' >Submit</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
