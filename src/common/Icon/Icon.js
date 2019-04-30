import React from 'react';
import FontAwesome from 'react-fontawesome'
import cn from 'classnames'
import styles from './Icon.css'

export const Icon = props => {
  const {
    button,
    iconStyle,
    backgroundStyle,
    className,
    children,
    external,
    add,
    edit,
    cancel,
    save,
    small,
    ...otherProps
  } = props

  const isButton = (
    button
    || external
    || add
    || edit
    || save
    || cancel
  )

  const classNames = cn(
    'icon',
    styles.icon,
    className,
    {
      button: isButton,
      edit,
      cancel,
      add,
      save,
      small,
      external
    },
  )

  const iconName = (
    props.name
    || (edit && 'pencil')
    || (cancel && 'times')
    || (save && 'floppy-o')
    || (external && 'external-link')
    || (add && 'plus')
  )

  if (edit) {
    return (
      <div
        className={classNames}
        style={backgroundStyle}
        {...otherProps}
      >
        <FontAwesome name={iconName} style={iconStyle}/>
      </div>
    )
  }

  return (
    <div
      className={classNames}
      style={backgroundStyle}
      {...otherProps}
    >
      { children || <FontAwesome name={iconName} style={iconStyle}/> }

    </div>
  )
};
