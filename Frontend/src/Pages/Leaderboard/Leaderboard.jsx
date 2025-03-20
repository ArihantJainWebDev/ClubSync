import React from 'react'
import './Leaderboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { FaTrophy } from "react-icons/fa";

const Leaderboard = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-leaderboard'>
        <h1>Leaderboard</h1>
        <div className='leaderboard-container'>
          <div className='leaderboard-top'>
            <div className='leaderboard-top-scorers'>
              <div className='leaderboard-top-scorer2'>
              <FaTrophy style={{ color: "gold", fontSize: "48px" }} />
                <div>
                  <p className='leaderboard-top-scorer-name'>Player 2</p>
                  <div className='leaderboard-top-scorer-score'>90</div>
                </div>
              </div>
              <div className='leaderboard-top-scorer1'>
              <FaTrophy style={{ color: "gold", fontSize: "64px" }} />
                <div>
                  <p className='leaderboard-top-scorer-name'>Player 1</p>
                  <div className='leaderboard-top-scorer-score'>100</div>
                </div>
              </div>
              <div className='leaderboard-top-scorer3'>
              <FaTrophy style={{ color: "gold", fontSize: "36px" }} />
                <div>
                  <p className='leaderboard-top-scorer-name'>Player 3</p>
                  <div className='leaderboard-top-scorer-score'>80</div>
                </div>
              </div>
            </div>
          </div>
          <div className='leaderboard-table'>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>Player 4</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Player 5</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Player 6</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Player 7</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Player 8</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Player 9</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Player 10</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
