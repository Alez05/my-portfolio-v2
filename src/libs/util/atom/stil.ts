interface stilOptions {
  borderRadiusUnit?: 'px' | '%';
  unit?: 'px' | 'rem';
}

export const getStil = (obiect: Record<string, string | number | number[]>) => {
  const paddingList = (
    Array.isArray(obiect.padding) ? obiect.padding : [obiect.padding]
  ) as number[];

  const padding = obiect.padding
    ? paddingList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : '';

  const fontSize = obiect.fontSize ? `${Number(obiect.fontSize) / 16}rem` : '';

  const display = obiect.display ? `${obiect.display}` : '';

  const alignItems = obiect.alignItems ? `${obiect.alignItems}` : '';

  const justifyContent = obiect.justifyContent
    ? `${obiect.justifyContent}`
    : '';

  const alignContent = obiect.alignContent ? `${obiect.alignContent}` : '';

  const position = obiect.position ? `${obiect.position}` : '';

  const gapList = (
    Array.isArray(obiect.gap) ? obiect.gap : [obiect.gap]
  ) as number[];

  const gap = obiect.gap
    ? gapList
        .slice(0, 4)
        .map((n: number) => `${n / 16}rem`)
        .join(' ')
    : '';

  const width = obiect.width ? `${obiect.width}px` : '';

  const height = obiect.height ? `${obiect.height}px` : '';

  const flexDirection = obiect.flexDirection ? `${obiect.flexDirection}` : '';

  const flexWrap = obiect.flexWrap ? `${obiect.flexWrap}` : '';

  const borderRadius = () => {
    const unit = obiect.borderRadiusUnit || 'px';
    if (obiect.borderRadius) {
      if (typeof obiect.borderRadius === 'string') {
        return obiect.borderRadius;
      }
      if (Array.isArray(obiect.borderRadius)) {
        return (obiect.borderRadius as number[])
          .map((value) => `${value}${unit}`)
          .join(' ');
      }
      if (typeof obiect.borderRadius === 'number') {
        return `${obiect.borderRadius}${unit}`;
      }
    }
    return '';
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
    'flex-direction': flexDirection,
    'flex-wrap': flexWrap,
    'border-radius': borderRadius(),
  };
};
