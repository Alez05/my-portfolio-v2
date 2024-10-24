import { getStil } from '@/libs/util'
import { TImage } from '@/libs/type'
import './image.css'
import { FlexBox } from '../flexbox'

export const Image = ({
  aspect = 'auto',
  height = '',
  width = '',
  alt,
  label,
  labelledBy,
  loading,
  src,
  srcset,
  testId,
  title,
  borderRadius = '',
}: TImage) => {
  const ariaLabel = label || `${alt}`

  const stil = getStil({
    width,
    height,
    aspect,
    borderRadius,
  }) as React.CSSProperties
  return (
    <FlexBox padding={20} width="auto">
      <img
        className="image"
        style={stil}
        alt={alt}
        aria-label={ariaLabel}
        aria-labelledby={labelledBy}
        data-testid={testId}
        src={src}
        srcSet={srcset}
        title={title}
        loading={loading}
      />
    </FlexBox>
  )
}
