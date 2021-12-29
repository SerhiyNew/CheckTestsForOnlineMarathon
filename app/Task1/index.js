import React, { Component } from 'react';

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/list`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          list: res,
        });
      });
  }
  render() {
    return (
      <>
        {!this.state.list ? (
          <div>Loading...</div>
        ) : (
          this.state.list.map(item => {
            return (
              <div key={item.id}>
                <div>id - {item.id}</div>
                <div>name - {item.name}</div>
                <div>note - {item.note}</div>
              </div>
            );
          })
        )}
      </>
    );
  }
}
