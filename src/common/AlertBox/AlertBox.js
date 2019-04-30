import React from 'react';
import FontAwesome from 'react-fontawesome'
import cn from 'classnames'

import styles from './AlertBox.css'

export const AlertBox = ({children, className}) => {
  const classNames = cn([styles.alertBox, className])
  return (
    <h4 className={classNames}>
      <FontAwesome name="exclamation-circle" />
      {children}
    </h4>
  )
};
