import { useState } from 'react'
import './App.css'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  console.log(data)

  const handleDelete = (id) => {
    setPeople(people.filter((p) => p.id !== id))
    
  }

  return (
    <div className='container'>
      <h1 className='head'>Birthday Party App</h1>
      <p className='para'>
        <span
          className='length'
          style={people.length === 0 ? { color: 'red' } : { color: 'green' }}
        >
          {people.length}
        </span>
        Birthday Party
      </p>
      <input
        type='text'
        className='search'
        placeholder='Search by name...'
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase()
          const filteredPeople = data.filter(person =>
            person.name.toLowerCase().includes(searchTerm)
          )
          setPeople(filteredPeople)
        }}
      />

      <div className='people'>
        {people.map((person) => {
          const { age, id, image, name } = person
          return (
            <div className='person' key={id}>
              <img src={image} alt={name} className='person-image' />
              <div className='person-info'>
                <h4 className='person-name'>{name}</h4>
                <p className='person-age'>Age: {age}</p>
              </div>
              <i className="bi bi-trash-fill del" onClick={() => handleDelete(id)}></i>
            </div>
          );
        })}
      </div>

      <div className='buttons'>
        {people.length >= 1 && (
          <button className='btn' onClick={() => setPeople([])}>
            Clear All
          </button>
        )}
        {people.length === 0 && (
          <button className='btn' onClick={() => setPeople(data)}>
            Refresh
          </button>
        )}
      </div>

      {/* Show how many members deleted if not full, else show nothing */}
      {people.length !== data.length && (
        <p className='para'>
          <span className='length'>{data.length - people.length}</span> member{data.length - people.length > 1 ? 's' : ''} deleted
        </p>
      )}

      <p className='footer'>Made with ❤️ by Manoj kumar</p>
      <p className='footer'>© 2023 Birthday Party App</p>
      <p className='footer'>All rights reserved</p>
    </div>
  );
}

export default App