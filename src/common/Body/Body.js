import React from 'react';
import cn from 'classnames'
import styles from './Body.css'

export const Body = ({children, className, ...props}) => {
  const classNames = cn('body', className, styles.container)
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
};
