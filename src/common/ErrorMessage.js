import React from 'react';

const style = {
  color: 'red'
}

export const ErrorMessage = ({error}) => {
  if (error) {
    return <p style={style}>{error}</p>
  } else {
    return null
  }
}
