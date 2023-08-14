import React from "react";

export default class ApiData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],

      dataIsLoaded: true,
    };
  }

  componentDidMount() {
    console.log("component is  mounting");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())

      .then((json) => {
        console.log("json result :", json);

        //

        this.setState({
          items: json,

          dataIsLoaded: true,
        });

        console.log("state values :", this.state.items);
      })

      .catch((err) => console.log("error", err));
  }

  render() {
    const { items, dataIsLoaded } = this.state;

    return (
      <div>
        <h2>API Data</h2>
      </div>
    );
  }
}
