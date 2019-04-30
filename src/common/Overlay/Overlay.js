import React from 'react';
import cn from 'classnames'
import styles from './Overlay.css'

export const Overlay = props => {
  const {
    className,
    active,
    ...otherProps
  } = props
  const classNames = cn(styles.overlay, className, { active })
  return (
    <div
      className={classNames}
      {...otherProps}
    />
  )
}
