import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

import { Sidebar } from '@Component/Sidebar'
import { StyledContainer } from './DefaultLayoutStyles'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <StyledContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledContainer>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
