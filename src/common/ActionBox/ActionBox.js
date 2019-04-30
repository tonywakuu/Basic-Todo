import React from 'react';
import cn from 'classnames'
import styles from './ActionBox.css'

export const ActionBox = props => {
  const {
    children,
    className,
    ...otherProps
  } = props
  const classNames = cn('action-box', className, styles.container)
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  )
};
