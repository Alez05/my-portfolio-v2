import './gridbox.css';
import { getStil } from '@/libs/util';

const GridBox = ({
  display = '',
  children,
  gridTemplateColumns = '',
  gridTemplateRows = '',
  gridGap = 0,
  justifyItems = '',
  alignContent = '',
  alignItems = '',
  justifyContent = '',
  gridAutoFlow = '',
  gridAutoColumns = '',
  gridAutoRows = '',
  placeContent = '',
  placeItems = '',
}: TGridBox) => {
  const stil = getStil({
    display,
    gtc: gridTemplateColumns,
    gtr: gridTemplateRows,
    gridGap,
    justifyItems,
    alignContent,
    alignItems,
    justifyContent,
    gac: gridAutoColumns,
    gar: gridAutoRows,
    gaf: gridAutoFlow,
    placeContent,
    placeItems,
  }) as React.CSSProperties;
  return (
    <div
      className='gridbox'
      style={stil}
    >
      {children}
    </div>
  );
};
export default GridBox;
