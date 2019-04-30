import React from 'react';
import cn from 'classnames'

import styles from './ButtonGroup.css'

export const ButtonGroup = ({options, selected, onPress, className}) => {
  const renderButton = el => {
    return (
      <button
        key={el.value}
        className={cn({selected: selected === el.value})}
        onClick={() => onPress(el.value)}
      >
        {el.option}
      </button>
    )
  }
  return (
    <div className={cn(styles.buttonGroup, className)}>
      {options.map(renderButton)}
    </div>
  )
}
