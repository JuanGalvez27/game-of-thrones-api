import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react'
import MainCard from './components/MainCard/MainCard';

function App() {
  const [showCards, setShowCards] = useState(false)
  const [books, setBooks] = useState([])
  
  const URL = 'https://anapioficeandfire.com/api/books/'

  const fetchData = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setBooks(data))
  }

  const handleShowCards = () => {
    setShowCards(true)
    fetchData()
  }

  return (
    <div className="App">
      <Header />
      <button onClick={handleShowCards} >Fetch Data</button>
      {showCards 
        ? (<div className='cards-container'>
            {books.map(book => {
              return <MainCard key={book.name} book={book} />
            })}
          </div>) 
        : null} 
    </div>
  );
}

export default App;
