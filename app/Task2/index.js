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
    if (action === 'enter') {
      let newText = this.state.list.filter(el => el.id === id)[0].text;
      this.setState({ ...this.state, text: newText });
    } else {
      this.setState({ ...this.state, text: '' });
    }
  }

  render() {
    return (
      <>
        <div>
          {this.state.list.map(item => {
            return (
              <div
                onMouseEnter={() => {
                  this.mouseHoverHandler(item.id, 'enter');
                  // console.log('enter');
                }}
                onMouseLeave={() => {
                  this.mouseHoverHandler(item.id);
                  // console.log('leave');
                }}
                key={item.id}
                className='element'
              >
                id - {item.id}
              </div>
            );
          })}
        </div>
        <div className='text'>{this.state.text}</div>
      </>
    );
  }
}
