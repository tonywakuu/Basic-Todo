import React from 'react';
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './Button.css'

export const Button = props => {
  const {
    icon,
    children,
    wide,
    cancel,
    large,
    inactive,
    link,
    title,
    danger,
    confirm,
    text,
    className,
    search,
    ...otherProps
  } = props

  const miscClasses = {
    wide,
    large,
    cancel,
    danger,
    confirm,
    search,
    inactive,
  }

  const classNames = cn(
    'button',
    styles.button,
    { ...miscClasses },
    className,
  )

  const textClassNames = cn(
    'text-button',
    styles.textButton,
    { ...miscClasses },
    className,
  )

  const renderIcon = () => {
    if (icon) {
      return (
        <FontAwesome name={icon} />
      )
    } else {
      return null
    }
  }

  if (inactive) {
    return (
      <div
        className={classNames}
      >
        {renderIcon()}
        {children || title || 'Button'}
      </div>
    )
  } else if (link) {
    return (
      <NavLink
        to={link}
        {...otherProps}
        className={classNames}
      >
        {renderIcon()}
        {title || children}
      </NavLink>
    )
  } else if (text) {
    return (
      <span
        to={link}
        {...otherProps}
        className={textClassNames}
      >
        {title || children}
      </span>
    )
  } else {
    return (
      <button
        {...otherProps}
        className={classNames}
      >
        {renderIcon()}
        {title || children}
      </button>
    )
  }
}
