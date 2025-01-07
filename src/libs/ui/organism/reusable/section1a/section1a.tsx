import { FlexBox } from '@/libs/ui/atom'
import { LinkGroup, TTextGroup } from '@/libs/ui/molecule'
import { TSection1a } from './section1a.type'
import './section1a.css'

const Section1a = ({
  description,
  linkUnu,
  linkDoi,
  linkTextUnu,
  linkTextDoi,
  linkTitleUnu,
  linkTitleDoi,
  subtitle,
  title,
}: TSection1a) => {
  return (
    <FlexBox padding={40}>
      <FlexBox
        as="section"
        display="flex"
        boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
        width="auto"
        padding={50}
        gap={40}
      >
        <TTextGroup
          content={[
            {
              content: title,
              as: 'h1',
              fontSize: 40,
              fontWeight: 700,
            },
            {
              content: subtitle,
              as: 'h2',
              fontSize: 24,
              fontWeight: 600,
            },
            {
              content: description,
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '2px',
            },
          ]}
        />
        <LinkGroup
          links={[
            {
              href: linkUnu || '',
              target: '_blank',
              title: linkTitleUnu,
              text: linkTextUnu || 'Contact me',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-black)',
            },
            {
              href: linkDoi || '',
              target: '_blank',
              title: linkTitleDoi,
              text: linkTextDoi || 'Read more..',
            },
          ]}
        />
      </FlexBox>
    </FlexBox>
  )
}

export default Section1a
