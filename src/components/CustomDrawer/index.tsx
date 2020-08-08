import React, { useEffect, useState, Children } from 'react'

// Components
import Drawer from '@material-ui/core/Drawer'

// Interfaces & Types
type Anchor = 'top' | 'left' | 'bottom' | 'right'

interface CustomDrawerProps {
  children: React.ReactNode
  isOpen: boolean
  handleToggle: (open: boolean) => void
  anchor?: Anchor
}

const CustomDrawer: React.FC<CustomDrawerProps> = props => {
  const { children, isOpen, handleToggle, anchor } = props
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  useEffect(() => {
    setInternalIsOpen(isOpen)
  }, [isOpen])

  const internalHandleToggle = (open: boolean) => {
    setInternalIsOpen(open)
    handleToggle(open)
    return
  }

  return (
    <Drawer
      anchor={anchor}
      open={internalIsOpen}
      onClose={() => internalHandleToggle(false)}
    >
      {children}
    </Drawer>
  )
}

CustomDrawer.defaultProps = {
  anchor: 'left',
}

export default CustomDrawer
