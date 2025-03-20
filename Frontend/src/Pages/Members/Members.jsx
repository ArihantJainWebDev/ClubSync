import React from 'react'
import './Members.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Members = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-members'>
        <h1>Members</h1>
        <div className='members-container'>
          <div className='member-card'>
            <div>
              <table>
                <tr>
                  <td className='member-name'>John Doe</td>
                  <td className='member-email'>
                    jdsbvdhjbvajhvfdb@gmail.com
                  </td>
                  <td className='member-role'>Admin</td>
                  <td className='member-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae.</td>
                </tr>
              </table>
              <div className='member-actions'>
                <button>✏️ Edit</button>
                <button>🗑️ Delete</button>
              </div>
            </div>
            <hr />
            <div>
              <table>
                <tr>
                  <td className='member-name'>John Doe</td>
                  <td className='member-email'>
                    jdsbvdhjbvajhvfdb@gmail.com
                  </td>
                  <td className='member-role'>Admin</td>
                  <td className='member-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae.</td>
                </tr>
              </table>
              <div className='member-actions'>
                <button>✏️ Edit</button>
                <button>🗑️ Delete</button>
              </div>
            </div>
            <hr />
            <div>
              <table>
                <tr>
                  <td className='member-name'>John Doe</td>
                  <td className='member-email'>
                    jdsbvdhjbvajhvfdb@gmail.com
                  </td>
                  <td className='member-role'>Admin</td>
                  <td className='member-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae.</td>
                </tr>
              </table>
              <div className='member-actions'>
                <button>✏️ Edit</button>
                <button>🗑️ Delete</button>
              </div>
            </div>
            <hr />
            <div>
              <table>
                <tr>
                  <td className='member-name'>John Doe</td>
                  <td className='member-email'>
                    jdsbvdhjbvajhvfdb@gmail.com
                  </td>
                  <td className='member-role'>Admin</td>
                  <td className='member-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae.</td>
                </tr>
              </table>
              <div className='member-actions'>
                <button>✏️ Edit</button>
                <button>🗑️ Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
