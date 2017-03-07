import React from 'react';
import UserPicture from '../../../src/assets/images/user-pic.png';
import PostedImg from '../../../src/assets/images/posted-image.png';

class Tile extends React.Component {
  state = {
    score: 'scored 100%',
    timeSince: '1h',
  }
  render() {
    return (
      <div className='tile-main-container'>
        <div className='user-img-container'>
          <img src={UserPicture} alt='img'/>
        </div>
        <div className='content-container'>
          <div className='content'>
            <div className='tile-title-container'>
              <h4>Christopher Reece </h4><span className='score'>{this.state.score}</span> <span className='time-since'>{this.state.timeSince}</span>
            </div>
            <div className='tile-header-container'>
              <p>You made me swallow my gum! That's going to be in my digestive tract for seven years!</p>
            </div>
            <div className='tile-content-container'>
              <h3>The Ultimate Pilgrim Quiz</h3>
              <span>Sony</span>
            </div>
          </div>
          <img src={PostedImg} alt='img'/>
        </div>
      </div>
    );
  }
}

export default Tile;