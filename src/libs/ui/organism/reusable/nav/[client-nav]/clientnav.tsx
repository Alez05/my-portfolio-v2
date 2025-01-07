'use client'
import { useEffect, useState } from 'react'
import { TNavProps } from '../nav.type'
import { FlexBox } from '@/libs/ui/atom'
import Link from '@/libs/ui/atom/link/link'
import '../nav.css'

const ClientNav = ({ navLinks = [] }: TNavProps) => {
  const [currentPath, setCurrentPath] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])
  return (
    <FlexBox
      as="nav"
      display="flex"
      gap={20}
      justifyContent="flex-end"
      position="relative"
      width="100%"
      padding={25}
      flexDirection="row"
    >
      {navLinks.map((link) =>
        link.path && link.name ? (
          <Link
            key={link.path}
            href={link.path}
            color={currentPath === link.path ? 'black' : ''}
            fontSize={20}
            padding={10}
            fontWeight="bold"
            aria-current={currentPath === link.path ? 'page' : undefined}
            className="nav-link"
          >
            {link.name}
          </Link>
        ) : null
      )}
    </FlexBox>
  )
}

export default ClientNav
