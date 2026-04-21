import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fc3f16f612744a8bfdee4a40e7c1be5')
            console.log(response)
            setArticles(response.data.articles)
          
        } 
        
        getArticles()


    }, [])

    const handleChange = (e) => {
            console.log(e.target.value)
        }
const handleSubmit = async (e) => {
    try {
        e.preventDefault()
    }
    catch (error) {
        console.log(error, 'error handle submit')
}
}

    return (
        <div>
            <form action="">
                <input onChange={handleChange} />
                <button variant="primary">Pencarian</button>
            </form>

            <nav>
                <ul>
            {articles.map(article => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )

            })}
                </ul>
            </nav>
        </div>
    )
}

export default NewsList;