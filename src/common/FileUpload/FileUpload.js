import React from 'react';
import FontAwesome from 'react-fontawesome'
import cn from 'classnames'

// Components
import { Line } from 'react-progress-bar.js'

import styles from './FileUpload.css'

export const FileUpload = props => {
  const {
    text,
    button,
    wide,
    large,
    confirm,
    inactive,
    progress,
    id,
    title,
    icon,
    onUpload,
  } = props

  const miscClasses = {
    text,
    button,
    wide,
    large,
    confirm,
    inactive,
  }

  const labelClass = cn('label', styles.label, { ...miscClasses })

  if (inactive && progress) {
    const options = {
      color: '#0392f5',
      trailColor: '#cae2f2',
      strokeWidth: 2,
      duration: 150,
    }
    return (
      <div className={styles.loader}>
        <Line
          options={options}
          progress={progress}
          className="progress-bar"
        />
      </div>
    )
  }



  return (
    <div className={cn('file-upload', styles.fileUpload)}>
      <label className={labelClass} htmlFor={id || 'upload'}>
        {icon && (
          <FontAwesome name={icon} />
        )}
        {title}
      </label>

      {!inactive && (
        <input
          id={id || 'upload'}
          type="file"
          accept="image/jpeg,image/png"
          onChange={e => onUpload(e.target.files[0])}
        />
      )}
    </div>
  )
}
