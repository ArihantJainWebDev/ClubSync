import React from 'react'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Calender from '../../components/Calender/Calender'

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-dashboard'>
        <div className='dashboard-content'>
          <h1>Announcements</h1>
          <div className='dashboard-announcements'>
            <div className='announcement-card'>
              <div className='announcement-title'>Announcement: </div>
              <div className='announcement-date'>Date: 12/12/2021</div>
            </div>
            <div className='announcement-card'>
              <div className='announcement-title'>Announcement: </div>
              <div className='announcement-date'>Date: 12/12/2021</div>
            </div>
            <div className='announcement-card'>
              <div className='announcement-title'>Announcement: </div>
              <div className='announcement-date'>Date: 12/12/2021</div>
            </div>
          </div>
          <h1>Events</h1>
          <div className='dashboard-events'>
          <div className='event-card'>
              <div className='event-jpg'>
                <img src="./public/images/events/event1.jpg" alt="Event1" />
              </div>
              <div className='event-details'>
                <div className='event-title'>Event 1</div>
                <div className='event-description'>Event Description</div>
                <button>Join Event</button>
              </div>
            </div>
            <div className='event-card'>
              <div className='event-jpg'>
                <img src="./public/images/events/event7.jpg" alt="Event1" />
              </div>
              <div className='event-details'>
                <div className='event-title'>Event 1</div>
                <div className='event-description'>Event Description</div>
                <button>Join Event</button>
              </div>
            </div>
            <div className='event-card'>
              <div className='event-jpg'>
                <img src="./public/images/events/event3.jpg" alt="Event1" />
              </div>
              <div className='event-details'>
                <div className='event-title'>Event 1</div>
                <div className='event-description'>Event Description</div>
                <button>Join Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ele-calender'>
        <Calender />
      </div>
    </div>
  )
}

export default Dashboard
