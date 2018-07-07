import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const SignOut = ({signOut}) => {
  return(
    <button className={css(styles.button)} onClick={signOut}>
      <i className="fas fa-sign-out-alt"></i>
    </button>
  );
}

export default SignOut;

// when both className and css stylesheet is added:
// className={`MessageForm ${css(styles.form)}`}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    border: 0,
    padding: 0,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
      cursor: 'pointer',
    },
  },
})