import './nav.css'
import navLinksData from '../../../../../content/navLinksData.json'
import { TNavProps } from './nav.type'
import ClientNav from './[client-nav]/clientnav'
import { FlexBox } from '@/libs/ui/atom'

const NavBar = ({ navLinks = [] }: TNavProps) => {
  return (
    <FlexBox as="header" position="fixed" top="0" zIndex={50} width="100%">
      <FlexBox
        as="div"
        display="flex"
        justifyContent="center"
        padding={10}
        width="100%"
        position="relative"
        backgroundColor="white"
      >
        <span className="logo">alexwebdev</span>
        <ClientNav navLinks={navLinks.length > 0 ? navLinks : navLinksData} />
      </FlexBox>
    </FlexBox>
  )
}

export default NavBar
