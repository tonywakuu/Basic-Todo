import React from 'react';
import cn from 'classnames'

// Components
import {
  TextArea,
} from '../../common'

import styles from './Input.css'

export const Input = props => {
  const {
    className,
    wide,
    value,
    onChange,
    label,
    type,
    ...otherProps
  } = props

  const checkbox = props.type === 'checkbox'

  const classNames = cn(
    'input',
    styles.input,
    className,
    {
      wide,
      checkbox,
      checked: checkbox && value,
    },
  )

  return (
    <div className={styles.container}>
      {label && (
        <label>
          {label}
        </label>
      )}

      {type === 'textarea' ? (
        <TextArea
          className={classNames}
          value={value || ''}
          onChange={onChange}
          {...otherProps}
        />
      ) : (
        <input
          className={classNames}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          type={type}
          {...otherProps}
        />
      )}
    </div>
  )
}
