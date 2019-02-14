import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4em;
  background: floralwhite;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #907163;
`;

const RedButton = styled.button`
color: white;
cursor: pointer;
background-color: #e34234;
line-height: normal;
margin: 1% 1% 1% 1%;
padding: 0.5% 1% 0.5% 1%;
font-weight: 100;
border: transparent;
border-radius: 3px;
font-size: 16px;
text-decoration: one;
`
const BlackButton = styled.button`
color: white;
cursor: pointer;
background-color: black;
line-height: normal;
margin: 1% 1% 1% 1%;
padding: 0.5% 1% 0.5% 1%;
font-weight: 100;
border: transparent;
border-radius: 3px;
font-size: 16px;
text-decoration: one;
`

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = (n) => {
    this.setState({ count: this.state.count + n });
  }

  decrement = (n) => {
    this.setState({ count: this.state.count - n });
  }

  render() {
    return (
      <Wrapper>
      <Title>The counter is currently {this.state.count}</Title>
      <BlackButton onClick={() => this.decrement(1)}>
        -
      </BlackButton>
      <RedButton onClick={() => this.increment(1)}>
        +
      </RedButton>
      </Wrapper>
    )
  }
}
export default Count;
