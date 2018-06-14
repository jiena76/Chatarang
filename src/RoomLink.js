import React from 'react'
import { StyleSheet, css } from 'aphrodite';

class RoomLink extends Component{
  state = {
    rooms: {
      general: {
        name: "general",
        description: "Chat about anything!",
      },
      random: {
        name: "random",
        description: "Cat GIFs",
      },
      food: {
        name: "food",
        description: "Goodies",
      },
    }
  }

  handleClick = () => {

  }

  render(){
    return(
      <li className={`RoomLink ${css(styles.nav)}`}>
        <a
          herf="/"
          className={css(styles.link)}
          onClick={handleClick}
        ></a>
      </li>
    );
  }
}

export default RoomLink;

const styles = StyleSheet.create