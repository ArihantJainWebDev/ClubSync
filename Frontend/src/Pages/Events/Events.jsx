import React from 'react'
import './Events.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Calendar1Icon } from 'lucide-react'

const Events = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-events'>
        <h1>Events</h1>
        <div className='events-container'>
          <h2>🔴 Live Events</h2>
          <div className='live-events'>
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
          <h2 className='upcoming-event-header'><Calendar1Icon />{" "}Upcoming Events</h2>
          <div className='upcoming-events'>
          <div className='event-card'>
              <div className='event-jpg'>
                <img src="./public/images/events/event4.jpg" alt="Event1" />
              </div>
              <div className='event-details'>
                <div className='event-title'>Event 1</div>
                <div className='event-description'>Event Description</div>
                <button>Join Event</button>
              </div>
            </div>
            <div className='event-card'>
              <div className='event-jpg'>
                <img src="./public/images/events/event5.jpg" alt="Event1" />
              </div>
              <div className='event-details'>
                <div className='event-title'>Event 1</div>
                <div className='event-description'>Event Description</div>
                <button>Join Event</button>
              </div>
            </div>
            <div className='event-card'>
              <div className='event-jpg'>
                <img src="./public/images/events/event6.jpg" alt="Event1" />
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
    </div>
  )
}

export default Events
