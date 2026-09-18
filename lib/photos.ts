/* Every photo the site shows, in one place.
 *
 * Source files live in public/images/backgrounds. `pos` is the objectPosition
 * that keeps the subject in frame when the photo is cropped into a tile —
 * it is per-photo data, not theme, so it travels with the photo. Always set,
 * so consumers never need a fallback.
 *
 * Duplicates in the folder are deliberately not listed: about-1.png is a
 * smaller IMG_4546, about-2.png a smaller IMG_4540, main-bg.png a wide crop of
 * IMG_4543, about-3.png a smaller about-3.JPEG. The higher-resolution file wins,
 * so ten distinct rooms cover all fourteen files.
 */
export type Photo = { src: string; alt: string; pos: string };

const dir = '/images/backgrounds';

export const photos = {
  livingPendants: {
    src: `${dir}/IMG_4539.JPEG`,
    alt: 'Вітальня з кутовим диваном, підвісними світильниками та обідньою зоною',
    pos: '50% 50%',
  },
  fireplace: {
    src: `${dir}/IMG_4540.JPEG`,
    alt: 'Вітальня з каміном, картиною та круглим обіднім столом',
    pos: '40% 50%',
  },
  kitchenMarble: {
    src: `${dir}/IMG_4541.JPEG`,
    alt: 'Кухня з мармуровим фартухом і вбудованою технікою',
    pos: '55% 50%',
  },
  loungeColumn: {
    src: `${dir}/IMG_4542.JPEG`,
    alt: 'Зона відпочинку з рейковою стіною та текстильною колоною',
    pos: '35% 50%',
  },
  livingGreenery: {
    src: `${dir}/IMG_4543.JPEG`,
    alt: 'Вітальня-студія з озелененням над обіднім столом',
    pos: '50% 55%',
  },
  kitchenOval: {
    src: `${dir}/IMG_4545.JPEG`,
    alt: 'Кухня з овальним обіднім столом і зеленими стільцями',
    pos: '50% 55%',
  },
  kitchenIsland: {
    src: `${dir}/IMG_4546.JPEG`,
    alt: 'Кухонний острів з барними стільцями біля панорамного вікна',
    pos: '50% 50%',
  },
  kitchenBar: {
    src: `${dir}/IMG_4547.JPEG`,
    alt: 'Кухонна стіна з барною стійкою та зеленими стільцями',
    pos: '45% 55%',
  },
  livingOpenPlan: {
    src: `${dir}/IMG_4550.JPEG`,
    alt: 'Відкрите планування: диван у вітальні та кухня з дерев’яними фасадами',
    pos: '50% 45%',
  },
  livingTv: {
    src: `${dir}/about-3.JPEG`,
    alt: 'Вітальня з ТВ-зоною, дерев’яними панелями та озелененням',
    pos: '50% 50%',
  },
} satisfies Record<string, Photo>;
