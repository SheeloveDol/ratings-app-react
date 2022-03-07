import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>A very nice little project to further my understanding of React.js</p>
                <p>Version: 1.0.1</p>

                <p>
                    <Link to="/">Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
