import React from 'react';
import cn from 'classnames'

import styles from './TextArea.css'

export const TextArea = props => {
  const {
    className,
    onChange,
    ...otherProps
  } = props

  const classNames = cn(styles.textArea, className)
  return (
    <textarea
      autoFocus
      className={classNames}
      onChange={e => onChange(e.target.value)}
      {...otherProps}
    />
  )
}
