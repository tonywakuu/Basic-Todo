import React, { Component } from 'react';
import cn from 'classnames'

import styles from './Selector.css'

export class Selector extends Component {
  renderOption(option) {
    const { keyExtractor } = this.props
    const key = keyExtractor ? keyExtractor(option) : option.key || option.value || option
    /**
     * Only checked against undefined so that the value can be null/0/''.
     * If value is undefined, entire option is used
     * @type {string}
     */
    const value = option.value === undefined ? option : option.value
    const display = option.display || value

    return (
      <option
        key={key}
        value={value}
      >
        {display}
      </option>
    )
  }

  renderSelect() {
    const {
      selected,
      onSelect,
      options,
    } = this.props

    return (
      <select
        className={styles.select}
        value={selected}
        onChange={e => onSelect(e.target.value)}
      >
        {options.map(this.renderOption.bind(this))}
      </select>
    )
  }

  render() {
    const {
      label,
      className,
      wide,
      options,
      ...otherProps
    } = this.props

    if (label) {
      const classNames = cn('select', className, styles.container, { wide })
      return (
        <div
          className={classNames}
          {...otherProps}
        >
          <label>{label}</label>
          {this.renderSelect()}
        </div>
      )
    } else {
      return this.renderSelect()
    }
  }
};
