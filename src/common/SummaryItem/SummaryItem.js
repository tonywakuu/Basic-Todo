import React from 'react';
import cn from 'classnames'

import styles from './SummaryItem.css'

export const SummaryItem = ({ title, content, className, small }) => {
  const classNames = cn('summary-item', styles.item, className, { small })

  return (
    <div className={classNames}>
      <span className="title">
        {title}
      </span>
      <span className="content">
        {content}
      </span>
    </div>
  )
}
