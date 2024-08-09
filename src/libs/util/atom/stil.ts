interface stilOptions {
  borderRadiusUnit?: 'px' | '%';
  unit?: 'px' | 'rem';
}

export const getStil = (obiect: Record<string, string | number | number[]>) => {
  const paddingList = (
    Array.isArray(obiect.padding) ? obiect.padding : [obiect.padding]
  ) as number[];

  // padding
  const padding = obiect.padding
    ? paddingList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : '';

  // fontSize
  const fontSize = obiect.fontSize ? `${Number(obiect.fontSize) / 16}rem` : '';

  // display
  const display = obiect.display ? `${obiect.display}` : '';

  // alignItems
  const alignItems = obiect.alignItems ? `${obiect.alignItems}` : '';

  // justifyContent
  const justifyContent = obiect.justifyContent
    ? `${obiect.justifyContent}`
    : '';

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
  const width = obiect.width ? `${obiect.width}px` : '';

  // height
  const height = obiect.height ? `${obiect.height}px` : '';

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

  return {
    '--padding': padding,
    '--font-size': fontSize,
    '--display': display,
    '--align-items': alignItems,
    '--justify-content': justifyContent,
    '--align-content': alignContent,
    '--position': position,
    '--gap': gap,
    '--width': width,
    '--height': height,
    '--flex-direction': flexDirection,
    '--flex-wrap': flexWrap,
    '--border-radius': borderRadius(),
    '--border': border(),
  };
};
