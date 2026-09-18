import Link from 'next/link';

const heroes = [
  {
    id: '3a',
    href: '/hero-a',
    name: 'Спліт: текст ліворуч, фото праворуч',
    note: 'Найбезпечніший апгрейд: фото з’являється одразу, але заголовок лишається головним.',
  },
  {
    id: '3b',
    href: '/hero-b',
    name: 'Фото на весь екран, заголовок поверх',
    note: 'Найемоційніший вхід: спершу інтер’єр, потім слова. Картки напрямків наїжджають на фото знизу.',
  },
  {
    id: '3c',
    href: '/hero-c',
    name: 'Диптих «проєкт / реалізація»',
    note: 'Заголовок розрізаний по двох половинах, рядок про стик лягає точно на шов.',
  },
];

const full = [
  { id: '1a', href: '/full/v1a', name: 'Тихий люкс', note: 'Та сама айдентика, вичищена типографіка й сітка. Темна база, мідний акцент.' },
  { id: '1b', href: '/full/v1b', name: 'Світлий редакційний', note: 'Кремова база, серифна типографіка, портфоліо рядками-кейсами як у глянці.' },
  { id: '1c', href: '/full/v1c', name: 'Каталог', note: 'Дисплейний шрифт, кресленнєві пунктири, фільтри й калькулятор кошторису.' },
  { id: '2a', href: '/full/v2a', name: 'Дві половини', note: 'Architects / Builds як вертикальний спліт по всій сторінці, зшитий бронзовою смугою.' },
  { id: '2b', href: '/full/v2b', name: 'Тепла глина', note: 'Теракота, м’які радіуси, «до / після» й обличчя команди. Фото команди — плейсхолдери.' },
  { id: '2c', href: '/full/v2c', name: 'Прозорий процес', note: 'Графік робіт і структура бюджету замість фото над фолдом.' },
];

export default function Index() {
  return (
    <main className="index">
      <h1 className="index__title">Hub Remontu — напрямки редизайну</h1>
      <p className="index__lede">
        Внизу — шість повних сторінок (турів 1 і 2) і три подачі одного героя для напрямку «Дві половини». Копірайт у
        трійці героїв однаковий, змінюється тільки подача.
      </p>

      <h2 className="index__section">Повні сторінки</h2>
      <div className="index__grid">
        {full.map((v) => (
          <Link href={v.href} className="indexCard" key={v.id}>
            <span className="indexCard__id">{v.id}</span>
            <span className="indexCard__name">{v.name}</span>
            <span className="indexCard__note">{v.note}</span>
            <span className="indexCard__go">Відкрити →</span>
          </Link>
        ))}
      </div>

      <h2 className="index__section">Варіанти героя (розвиток 2a)</h2>
      <div className="index__grid">
        {heroes.map((v) => (
          <Link href={v.href} className="indexCard" key={v.id}>
            <span className="indexCard__id">{v.id}</span>
            <span className="indexCard__name">{v.name}</span>
            <span className="indexCard__note">{v.note}</span>
            <span className="indexCard__go">Відкрити →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
