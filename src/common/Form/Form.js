import React from 'react';
import cn from 'classnames'

import styles from './Form.css'

export const Form = ({className, children, ...props}) => {
  return (
    <form
      {...props}
      className={cn(className, styles.form)}
    >
      {children}
    </form>
  )
};
