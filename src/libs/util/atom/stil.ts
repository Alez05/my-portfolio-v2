export const getStil = (obiect: Record<string, string | number>) => {
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

  return {
    '--padding': padding,
    '--font-size': fontSize,
    '--display': display,
    '--align-items': alignItems,
    '--justify-content': justifyContent,
    '--align-content': alignContent,
    '--position': position,
  };
};
