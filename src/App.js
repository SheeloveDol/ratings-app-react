import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

// import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {
    // No longer need the code below because we are now using useContext for setting states
    // const [feedbacks, setFeedbacks] = useState(FeedbackData);


    // Function for adding a new feedback from a completed form
    

    // function to delete feedback/ratings. We'll have to 'prop-drill' all the way to FeedbackItem
    // Moving deleteFeedback function into our FeedbackContext.js file



    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm  />
                                <FeedbackStats />
                                <FeedbackList  />
                            </>
                        }
                        ></Route>
            
                        <Route path='/about' element={<AboutPage/>} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App 