import React from 'react'
import './Clubs.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Clubs = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-clubs'>
        <h1>Clubs</h1>
        <div className='clubs-container'>
          <div className='club-card'>
            <div className='club-title'>Club 1</div>
            <div className='club-description'>Club Description</div>
            <button>Join Club</button>
          </div>
          <div className='club-card'>
            <div className='club-title'>Club 2</div>
            <div className='club-description'>Club Description</div>
            <button>Join Club</button>
          </div>
          <div className='club-card'>
            <div className='club-title'>Club 3</div>
            <div className='club-description'>Club Description</div>
            <button>Join Club</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clubs
