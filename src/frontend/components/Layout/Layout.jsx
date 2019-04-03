import React from 'react'
import PropTypes from 'prop-types'
import style from './Layout.style'

const Layout = ({ children }) => (
  <div className={style.Layout}>
    <header className={style.header}>
      <h1 className={style.title}>Questionary</h1>
    </header>
    <div className={style.container}>{children}</div>
  </div>
)

Layout.defaultProps = {
  children: [],
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

export default Layout
