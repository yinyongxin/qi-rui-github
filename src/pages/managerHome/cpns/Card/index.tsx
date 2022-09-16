import * as React from 'react';

import { Card } from 'qirui-digitization-ui';
import ZLCardHeader from '../CardHeader';
import { useDrag, useDrop } from 'react-dnd';
import { changeColor } from '@/utils/tools/formatColor';

import styles from './styles.module.less';

interface ICardProps {
  id: number;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  info: any;
  type: string;
}
const ZLCard = (props: ICardProps) => {
  // state & props
  const { id, index, moveCard, info, type } = props;

  // other hooks
  let cardRef = React.useRef<any>(null);
  let [collectedProps, drag] = useDrag({
    type,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  let [, drop] = useDrop({
    accept: type,
    collect: () => ({}),
    hover(item: any, monitor: any) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const { top, bottom, left, right } =
        cardRef.current.getBoundingClientRect();
      const halfOfHoverHeight = (bottom - top) / 2;
      const halfOfHoverWidth = (right - left) / 2;
      const { y, x } = monitor.getClientOffset();
      const hoverClientY = y - top;
      const hoverClientX = x - left;
      if (
        (dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight) ||
        (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)
      ) {
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
      if (
        (dragIndex < hoverIndex && hoverClientX > halfOfHoverWidth) ||
        (dragIndex > hoverIndex && hoverClientX < halfOfHoverWidth)
      ) {
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  // handles
  const headerStyle = {
    color: 'var(--design-neutral-color-1)',
    paddingTop: '12px',
    paddingBottom: '16px',
  };
  const bodyStyle = {
    color: 'var(--design-neutral-color-2)',
    padding: '16px',
  };
  const opacity = collectedProps.isDragging ? 0 : 1;
  drag(cardRef);
  drop(cardRef);

  return (
    <div className={styles.zlCardWrapper} style={{ opacity }} ref={cardRef}>
      <Card
        title={<ZLCardHeader title={info.title} price={info.targetValue} />}
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
      >
        <ul className={styles.info}>
          <li className={styles.year}>
            <span>同比</span>
            <span style={{ color: changeColor(info.tongBi) }}>
              {info.tongBi}
            </span>
          </li>
          <li className={styles.ring}>
            <span>环比</span>
            <span style={{ color: changeColor(info.huanBi) }}>
              {info.huanBi}
            </span>
          </li>
          <li className={styles.target}>
            <span>目标达成率</span>
            <span>{info.targetRate}</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default ZLCard;
