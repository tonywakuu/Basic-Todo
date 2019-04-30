import React from 'react';
import cn from 'classnames'
import styles from './Header.css'

export const Header = ({children, className, ...props}) => {
  const classNames = cn('header', className, styles.container)
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
};
