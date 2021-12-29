import React, { Component } from 'react';

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: 'hidden text 1',
        },
        {
          id: 2,
          text: 'hidden text 2',
        },
        {
          id: 3,
          text: 'hidden text 3',
        },
      ],
      text: '',
    };
  }

  mouseHoverHandler(id, action) {
    let textBlock = document.getElementById(`textBlock${id}`);
    if (action === 'enter') {
      textBlock.style.visibility = 'visible';
    } else {
      textBlock.style.visibility = 'hidden';
    }
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => {
          return (
            <div
              key={item.id}
              className='element'
              onMouseEnter={() => {
                this.mouseHoverHandler(item.id, 'enter');
              }}
              onMouseLeave={() => {
                this.mouseHoverHandler(item.id);
              }}
            >
              <div id={`block${item.id}`}>{item.id}</div>
              <div
                style={{ visibility: 'hidden' }}
                id={`textBlock${item.id}`}
                className='text'
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
