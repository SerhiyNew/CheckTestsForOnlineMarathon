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

  // mouseHoverHandler(id, action) {
  //   let textBlock = document.getElementById(`textBlock${id}`);
  //   if (action === 'enter') {
  //     textBlock.style.visibility = 'visible';
  //   } else {
  //     textBlock.style.visibility = 'hidden';
  //   }
  // }

  render() {
    return (
      <>
        {this.state.list.map(item => {
          return (
            <div
              key={item.id}
              className='element'
              onMouseEnter={() => {
                this.setState({
                  text: this.state.list.filter(obj => obj.id === item.id)[0]
                    .text,
                });
              }}
              onMouseLeave={() => {
                this.setState({
                  text: '',
                });
              }}
            >
              <div>id - {item.id}</div>
            </div>
          );
        })}
        <div className='text'>{this.state.text}</div>
      </>
    );
  }
}
