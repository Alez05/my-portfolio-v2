type stilOptions = {
  borderRadiusUnit?: 'px' | '%'
  unit?: 'px' | 'rem'
}

export const toKebabCase = (property: string) =>
  `--${property.replace(/(.)([A-Z])/g, '$1-$2').toLowerCase()}`

export const getStil = (
  obiect: Record<string, string | number | number[] | boolean>
) => {
  // console.log(Object.keys(obiect).map(toKebabCase))

  const paddingList = (
    Array.isArray(obiect.padding) ? obiect.padding : [obiect.padding]
  ) as number[]

  // padding
  const padding = obiect.padding
    ? paddingList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : ''

  // fontSize
  const fontSize = obiect?.fontSize ? `${Number(obiect.fontSize) / 16}rem` : ''

  // display
  const display = obiect.display ? `${obiect.display}` : ''

  // alignItems
  const alignItems = obiect.alignItems ? `${obiect.alignItems}` : ''

  // justifyContent
  const justifyContent = obiect.justifyContent ? `${obiect.justifyContent}` : ''

  // justifyItems
  const justifyItems = obiect.justifyItems ? `${obiect.justifyItems}` : ''

  // alignContent
  const alignContent = obiect.alignContent ? `${obiect.alignContent}` : ''

  // position
  const position = obiect.position ? `${obiect.position}` : ''

  // gap
  const gapList = (
    Array.isArray(obiect.gap) ? obiect.gap : [obiect.gap]
  ) as number[]

  const gap = obiect.gap
    ? gapList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : ''

  // width
  const width = () => {
    if (typeof obiect.width === 'string') {
      return obiect.width
    } else if (typeof obiect.width === 'number') {
      return `${obiect.width}px`
    }
    return ''
  }

  // height
  const height = () => {
    if (typeof obiect.height === 'string') {
      return obiect.height
    } else if (typeof obiect.height === 'number') {
      return `${obiect.height}px`
    }
    return ''
  }

  // flexDirection
  const flexDirection = obiect.flexDirection ? `${obiect.flexDirection}` : ''

  // flexWrap
  const flexWrap = obiect.flexWrap ? `${obiect.flexWrap}` : ''

  // border
  const border = () => {
    if (typeof obiect.border === 'string') {
      return obiect.border
    }
    return ''
  }

  // borderRadius
  const borderRadius = () => {
    return typeof obiect.borderRadius === 'string' ? obiect.borderRadius : ''
  }

  // color
  const color = typeof obiect.color === 'string' ? obiect.color : ''

  // backgroundColor
  const backgroundColor =
    typeof obiect.backgroundColor === 'string' ? obiect.backgroundColor : ''

  //cursor
  const cursor = typeof obiect.cursor === 'string' ? obiect.cursor : ''

  //inset
  const insetList = (
    Array.isArray(obiect.inset) ? obiect.inset : [obiect.inset]
  ) as number[]

  const inset = insetList
    .filter((n: number) => typeof n === 'number')
    .slice(0, 4)
    .map((n: number) => `${n / 16}rem`)
    .join(' ')

  // float
  const float = typeof obiect.float === 'string' ? obiect.float : ''

  // grid-template-columns
  const gridTemplateColumns = () => {
    if (Array.isArray(obiect.gridTemplateColumns)) {
      return obiect.gridTemplateColumns.join(' ')
    } else if (typeof obiect.gridTemplateColumns === 'string') {
      return obiect.gridTemplateColumns
    }
    return ''
  }

  // grid-template-rows
  const gridTemplateRows = () => {
    if (Array.isArray(obiect.gridTemplateRows)) {
      return obiect.gridTemplateRows.join(' ')
    } else if (typeof obiect.gridTemplateRows === 'string') {
      return obiect.gridTemplateRows
    }
    return ''
  }

  //grid-auto-flow
  const gridFlow = obiect.gridFlow ? `${obiect.gridFlow}` : ''

  // grid-auto-columns
  const gridAutoColumn = obiect.gridAutoColumn ? `${obiect.gridAutoColumn}` : ''

  // grid-auto-rows
  const gridAutoRow = obiect.gridAutoRow ? `${obiect.gridAutoRow}` : ''

  // place-items
  const placeItems = obiect.placeITems ? `${obiect.placeItems}` : ''

  // place-content
  const placeContent = obiect.placeContent ? `${obiect.placeContent}` : ''

  // line-height
  const lineHeight = obiect.lineHeight ? `${obiect.lineHeight}` : ''

  //crossed/ underline text
  const textDecoration = () => {
    if (obiect.textDecoration === 'line-through') {
      return 'line-through'
    } else if (obiect.textDecoration === 'underline') {
      return 'underline'
    }
    return ''
  }

  // font-weight
  const fontWeight = () => {
    if (typeof obiect.fontWeight === 'string') {
      return obiect.fontWeight
    } else if (typeof obiect.fontWeight === 'number') {
      return obiect.fontWeight
    }
    return ''
  }

  // text-align
  const textAlign = obiect.textAlign ? `${obiect.textAlign}` : ''

  // letter-spacing
  const letterSpacing = obiect.letterSpacing ? `${obiect.letterSpacing}` : ''

  // z-index
  const zIndex = obiect.zIndex ? `${obiect.zIndex}` : ''

  // box-shadow
  const boxShadow = obiect.boxShadow ? `${obiect.boxShadow}` : ''

  // margin
  const margin = obiect.margin
    ? typeof obiect.margin === 'number'
      ? `${obiect.margin}px`
      : obiect.margin
    : ''

  // aspect
  const aspect = obiect.aspect ? `${obiect.aspect}` : ''

  // top
  const top = obiect.top ? `${obiect.top}` : ''

  //bottom
  const bottom = obiect.bottom ? `${obiect.bottom}` : ''

  // object-position
  const objectPosition = obiect.objectPosition ? `${obiect.objectPosition}` : ''

  // object-fit
  const objectFit = obiect.objectFit ? `${obiect.objectFit}` : ''

  return {
    '--padding': padding,
    '--font-size': fontSize,
    '--display': display,
    '--align-items': alignItems,
    '--justify-content': justifyContent,
    '--align-content': alignContent,
    '--position': position,
    '--gap': gap,
    '--width': width(),
    '--height': height(),
    '--flex-direction': flexDirection,
    '--flex-wrap': flexWrap,
    '--border-radius': borderRadius(),
    '--border': border(),
    '--color': color,
    '--background-color': backgroundColor,
    '--cursor': cursor,
    '--inset': inset,
    '--float': float,
    '--grid-template-columns': gridTemplateColumns(),
    '--grid-template-rows': gridTemplateRows(),
    '--justify-items': justifyItems,
    '--grid-auto-flow': gridFlow,
    '--grid-auto-columns': gridAutoColumn,
    '--grid-auto-rows': gridAutoRow,
    '--place-items': placeItems,
    '--place-content': placeContent,
    '--line-height': lineHeight,
    '--text-decoration': textDecoration(),
    '--font-weight': fontWeight(),
    '--text-align': textAlign,
    '--letter-spacing': letterSpacing,
    '--z-index': zIndex,
    '--box-shadow': boxShadow,
    '--margin': margin,
    '--aspect-ratio': aspect,
    '--top': top,
    '--bottom': bottom,
    '--object-position': objectPosition,
    '--object-fit': objectFit,
  }
}
