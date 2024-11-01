import { FlexBox, Link } from '../../atom'
import { TLinkGroup, TLinkConfig } from './linkgroup.type'

const LinkGroup = ({ links }: TLinkGroup) => {
  const linkArray = Array.isArray(links) ? links : [links]
  return (
    <FlexBox
      flexDirection="row"
      display="flex"
      width="auto"
      gap={20}
      padding={20}
      as="section"
    >
      {linkArray.map((link: TLinkConfig, index: number) => (
        <FlexBox key={link.id || index} as="div">
          <Link
            href={link.href}
            target={link.target}
            rel={link.target === '_blank' ? 'noopener noreferrer' : link.rel}
            title={link.title}
            color={link.color || 'var(--color-white)'}
            backgroundColor={link.backgroundColor || 'var(--color-danger)'}
            border={link.border || '1px solid var(--color-dark-grey)'}
            borderRadius={link.borderRadius || '5px'}
            width={link.width || '200px'}
            height={link.height || '60px'}
            boxShadow={link.boxShadow || '7px 7px 0 rgb(0, 0, 0)'}
            variant={link.variant}
            fontSize={link.fontSize || 16}
          >
            {link.text}
          </Link>
        </FlexBox>
      ))}
    </FlexBox>
  )
}

export default LinkGroup
