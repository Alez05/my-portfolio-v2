import Link from 'next/link'
import { FlexBox } from '../../atom'
import { TLinkGroup } from './linkgroup.type'
import { TLink } from '@/libs/type'

const LinkGroup = ({ links }: TLinkGroup) => {
  return (
    <FlexBox
      flexDirection="row"
      display="flex"
      width="auto"
      gap={20}
      padding={20}
    >
      {links.map((linkItem: TLink, index) => (
        <Link
          key={index}
          href={linkItem.href}
          target={linkItem.target}
          rel={
            linkItem.target === '_blank' ? 'noopener noreferrer' : linkItem.rel
          }
          color={linkItem.color}
          title={linkItem.title}
        />
      ))}
    </FlexBox>
  )
}

export default LinkGroup
