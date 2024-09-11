type stilOptions = {
  borderRadiusUnit?: 'px' | '%';
  unit?: 'px' | 'rem';
};

export const toKebabCase = (property: string) =>
  `--${property.replace(/(.)([A-Z])/g, '$1-$2').toLowerCase()}`;

export const getStil = (
  obiect: Record<string, string | number | number[] | boolean>
) => {
  const paddingList = (
    Array.isArray(obiect.padding) ? obiect.padding : [obiect.padding]
  ) as number[];

  console.log(Object.keys(obiect).map(toKebabCase));

  // padding
  const padding = obiect.padding
    ? paddingList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : '';

  // fontSize
  const fontSize = obiect?.fontSize ? `${Number(obiect.fontSize) / 16}rem` : '';

  // display
  const display = obiect.display ? `${obiect.display}` : '';

  // alignItems
  const alignItems = obiect.alignItems ? `${obiect.alignItems}` : '';

  // justifyContent
  const justifyContent = obiect.justifyContent
    ? `${obiect.justifyContent}`
    : '';

  // justifyItems
  const justifyItems = obiect.justifyItems ? `${obiect.justifyItems}` : '';

  // alignContent
  const alignContent = obiect.alignContent ? `${obiect.alignContent}` : '';

  // position
  const position = obiect.position ? `${obiect.position}` : '';

  // gap
  const gapList = (
    Array.isArray(obiect.gap) ? obiect.gap : [obiect.gap]
  ) as number[];

  const gap = obiect.gap
    ? gapList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : '';

  // width
  const width = () => {
    if (typeof obiect.width === 'string') {
      return obiect.width;
    } else if (typeof obiect.width === 'number') {
      return `${obiect.width}px`;
    }
    return '';
  };

  // height
  const height = () => {
    if (typeof obiect.height === 'string') {
      return obiect.height;
    } else if (typeof obiect.height === 'number') {
      return `${obiect.height}px`;
    }
    return '';
  };

  // flexDirection
  const flexDirection = obiect.flexDirection ? `${obiect.flexDirection}` : '';

  // flexWrap
  const flexWrap = obiect.flexWrap ? `${obiect.flexWrap}` : '';

  // border
  const border = () => {
    if (typeof obiect.border === 'string') {
      return obiect.border;
    }
    return '';
  };

  // borderRadius
  const borderRadius = () => {
    return typeof obiect.borderRadius === 'string' ? obiect.borderRadius : '';
  };

  // color
  const color = typeof obiect.color === 'string' ? obiect.color : '';

  // backgroundColor
  const backgroundColor =
    typeof obiect.backgroundColor === 'string' ? obiect.backgroundColor : '';

  //cursor
  const cursor = typeof obiect.cursor === 'string' ? obiect.cursor : '';

  //inset
  const insetList = (
    Array.isArray(obiect.inset) ? obiect.inset : [obiect.inset]
  ) as number[];

  const inset = insetList
    .filter((n: number) => typeof n === 'number')
    .slice(0, 4)
    .map((n: number) => `${n / 16}rem`)
    .join(' ');

  // float
  const float = typeof obiect.float === 'string' ? obiect.float : '';

  // grid-template-columns
  const gridColumn = () => {
    if (Array.isArray(obiect.gridColumn)) {
      return obiect.gridColumn.join(' ');
    } else if (typeof obiect.gridColumn === 'string') {
      return obiect.gridColumn;
    }
    return '';
  };

  // grid-template-rows
  const gridRow = () => {
    if (Array.isArray(obiect.gridRow)) {
      return obiect.gridRow.join(' ');
    } else if (typeof obiect.gridRow === 'string') {
      return obiect.gridRow;
    }
    return '';
  };

  //grid-auto-flow
  const gridFlow = obiect.gridFlow ? `${obiect.gridFlow}` : '';

  // grid-auto-columns
  const gridAutoColumn = obiect.gridAutoColumn
    ? `${obiect.gridAutoColumn}`
    : '';

  // grid-auto-rows
  const gridAutoRow = obiect.gridAutoRow ? `${obiect.gridAutoRow}` : '';

  // place-items
  const placeItems = obiect.placeITems ? `${obiect.placeItems}` : '';

  // place-content
  const placeContent = obiect.placeContent ? `${obiect.placeContent}` : '';

  // line-height
  const lineHeight = obiect.lineHeight ? `${obiect.lineHeight}` : '';

  //crossed/ underline text
  const textDecoration = () => {
    if (obiect.textDecoration === 'line-through') {
      return 'line-through';
    } else if (obiect.textDecoration === 'underline') {
      return 'underline';
    }
    return '';
  };

  // font-weight
  const fontWeight = () => {
    if (typeof obiect.fontWeight === 'string') {
      return obiect.fontWeight;
    } else if (typeof obiect.fontWeight === 'number') {
      return obiect.fontWeight;
    }
    return '';
  };

  // text-align
  const textAlign = obiect.textAlign ? `${obiect.textAlign}` : '';

  // letter-spacing
  const letterSpacing = obiect.letterSpacing ? `${obiect.letterSpacing}` : '';

  // z-index
  const zIndex = obiect.zIndex ? `${obiect.zIndex}` : '';

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
    '--grid-template-columns': gridColumn(),
    '--grid-template-rows': gridRow(),
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
  };
};
