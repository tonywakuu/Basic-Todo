import React from 'react';
import cn from 'classnames'

import styles from './FloatBox.css'

export const FloatBox = ({children, className, title}) => {
  const renderTitle = (
    <div className="title">
      <h2>{title}</h2>
    </div>
  )
  const classNames = cn('float-box', className, styles.modal)
  return (
    <div className={classNames}>
      {title ? renderTitle : null }
      {children}
    </div>
  )
}
