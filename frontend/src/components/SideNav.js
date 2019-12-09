import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { Route } from 'react-router-dom'

import React, { useRef, useState, useEffect } from 'react'

const routes = [
  'Home',
  'Current'
]

function getSelectionFromLocation(location) {
  const parts = location.pathname.split('/')
  const firstPartOfURL = parts[1]
  // Default to home if the first part is empty
  return firstPartOfURL === '' ? 'Home' : firstPartOfURL 
}

function SideNavComponent() {
  const [isExpanded, setExpanded] = useState(false)
  const divRef = useRef(null)

  useEffect(() => {
    // Check for clicks outside of nav
    const handleClick = event => {
      const div = divRef.current
      if (div && !div.contains(event.target)) {
        setExpanded(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div ref={divRef} className="nav-wrapper">
      <Route render={({ location, history }) => (
        <SideNav
          expanded={isExpanded}
          onSelect={(selected) => {
            const to = selected === 'Home' ? '/' : '/' + selected
            if (location.pathname !== to) {
              history.push(to)
            }
          }}
          onToggle={expanded => setExpanded(expanded)}
        >
          <Toggle />
          <Nav           title="The Vault" defaultSelected={getSelectionFromLocation(location)}>
            {routes.map(route => (
              <NavItem key={route} eventKey={route}>
                <NavIcon>
                  {/* <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>{route}</NavText>
              </NavItem>
            ))}
          </Nav>
        </SideNav>
      )} />
    </div>
  )
}

export default SideNavComponent