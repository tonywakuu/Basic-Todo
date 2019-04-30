import React, { Component } from 'react';
import cn from 'classnames'

import { Selector } from '../'

import styles from './SearchBar.css'

export class SearchBar extends Component {
  renderSelect() {
    const {
      options,
      onSelect,
      selected,
    } = this.props

    if (!options) {
      return null
    }

    return (
      <Selector
        value={selected}
        onSelect={onSelect}
        options={options}
      />
    )
  }

  render() {
    const {
      label,
      className,
      options,
      onSelect,
      ...otherProps
    } = this.props
    const classNames = cn('search-bar', className, styles.searchBar, { selectable: options })
    return (
      <div className={classNames}>
        <label>{label}</label>
        {this.renderSelect()}
        <input {...otherProps} />
      </div>
    )
  }
};
