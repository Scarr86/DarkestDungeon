// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDld_PcYi1b_m1bWSnQQzas8v1IqJV9Omo',
    authDomain: 'darkest-dungeon-56880.firebaseapp.com',
    databaseURL: 'https://darkest-dungeon-56880-default-rtdb.firebaseio.com',
    projectId: 'darkest-dungeon-56880',
    storageBucket: 'darkest-dungeon-56880.appspot.com',
    messagingSenderId: '885547719130',
    appId: '1:885547719130:web:3f9424bdfa0bd6090a88e3',
  },

  heroList: {
    commonSkillsCamp: [
      { id: 11, name: 'Ободрение' },
      { id: 12, name: 'Лечение ран' },
      { id: 13, name: 'Душевный разговор' },
    ],
    heroes: [
      {
        id: 11,
        name: 'Антиквар',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%90%D0%BD%D1%82%D0%B8%D0%BA%D0%B2%D0%B0%D1%80',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Робкий выпад' },
          { id: 12, name: 'Едкие испарения' },
          { id: 13, name: 'Ложись!' },
          { id: 14, name: 'Слепящий порошок' },
          { id: 15, name: 'Укрепляющие благовония' },
          { id: 16, name: 'Бодрящие благовония' },
          { id: 17, name: 'Защити меня' },
        ],
        skillsCamp: [
          { id: 14, name: 'Пополнение запасов' },
          { id: 15, name: 'Поискать артефакт' },
          { id: 16, name: 'Подозрительные порошки' },
          { id: 17, name: 'Загадочное заклинание' },
        ],
      },
      {
        id: 12,
        name: 'Арбалетчица',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%90%D1%80%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D1%87%D0%B8%D1%86%D0%B0',
        hasCommonCampSkills: true,

        skillsHero: [
          { id: 11, name: 'Снайперский выстрел' },
          { id: 12, name: 'Подавляющий огонь' },
          { id: 13, name: 'Снайперская метка' },
          { id: 14, name: 'Боллы' },
          { id: 15, name: 'Выстрел вслепую' },
          { id: 16, name: 'Боевые бинты' },
          { id: 17, name: 'Сигнальный огонь' },
        ],
        skillsCamp: [
          { id: 14, name: 'Полевая форма' },
          { id: 15, name: 'План похода' },
          { id: 16, name: 'Новая тетива' },
          { id: 17, name: 'Очерёдность' },
        ],
      },
      {
        id: 13,
        name: 'Воитель',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%92%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
        hasCommonCampSkills: true,

        skillsHero: [
          { id: 11, name: 'Сокрушение' },
          { id: 12, name: 'Апперкот' },
          { id: 13, name: 'Рёв' },
          { id: 14, name: 'Защитник' },
          { id: 15, name: 'Воздаяние' },
          { id: 16, name: 'Команда' },
          { id: 17, name: 'Усилениеь' },
        ],
        skillsCamp: [
          { id: 14, name: 'Ремонт снаряжения' },
          { id: 15, name: 'Тактика' },
          { id: 16, name: 'Инструкция' },
          { id: 17, name: 'Тренировка с оружием' },
        ],
      },
      {
        id: 14,
        name: 'Весталка',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%92%D0%B5%D1%81%D1%82%D0%B0%D0%BB%D0%BA%D0%B0',
        hasCommonCampSkills: true,

        skillsHero: [
          { id: 11, name: 'Приговор' },
          { id: 12, name: 'Удар булавой' },
          { id: 13, name: 'Слепящий свет' },
          { id: 14, name: 'Божья милость' },
          { id: 15, name: 'Божественная поддержка' },
          { id: 16, name: 'Освещение' },
          { id: 17, name: 'Рука света' },
        ],
        skillsCamp: [
          { id: 14, name: 'Благословение' },
          { id: 15, name: 'Напев' },
          { id: 16, name: 'Молитва' },
          { id: 17, name: 'Святилище' },
        ],
      },
      {
        id: 15,
        name: 'Выродок',
        hasCommonCampSkills: true,

        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%92%D1%8B%D1%80%D0%BE%D0%B4%D0%BE%D0%BA',
        skillsHero: [
          { id: 11, name: 'Приговор' },
          { id: 12, name: 'Удар булавой' },
          { id: 13, name: 'Слепящий свет' },
          { id: 14, name: 'Божья милость' },
          { id: 15, name: 'Божественная поддержка' },
          { id: 16, name: 'Освещение' },
          { id: 17, name: 'Рука света' },
        ],
        skillsCamp: [
          { id: 14, name: 'Управление гневом' },
          { id: 15, name: 'Распалить' },
          { id: 16, name: 'Ускорение' },
          { id: 17, name: 'Кровь мистики' },
        ],
      },
      {
        id: 16,
        name: 'Дрессировщик',
        hasCommonCampSkills: true,

        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%94%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%80%D0%BE%D0%B2%D1%89%D0%B8%D0%BA',
        skillsHero: [
          { id: 11, name: 'Бросок гончей' },
          { id: 12, name: 'Наскок гончей' },
          { id: 13, name: 'Прицельный свист' },
          { id: 14, name: 'Губительный крик' },
          { id: 15, name: 'Сторожевой пёс' },
          { id: 16, name: 'Зализывание ран' },
          { id: 17, name: 'Блэкджек' },
        ],
        skillsCamp: [
          { id: 14, name: 'Надзор гончей' },
          { id: 15, name: 'Собакотерапия' },
          { id: 16, name: 'Друг человека' },
          { id: 17, name: 'Спустить гончую' },
        ],
      },
      {
        id: 17,
        name: 'Дикарка',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%94%D0%B8%D0%BA%D0%B0%D1%80%D0%BA%D0%B0',
        hasCommonCampSkills: true,

        skillsHero: [
          { id: 11, name: 'Глубокий рубец' },
          { id: 12, name: 'Железный лебедь' },
          { id: 13, name: 'Варварский вопль!' },
          { id: 14, name: 'Если кровоточит' },
          { id: 15, name: 'Прорыв' },
          { id: 16, name: 'Прилив адреналина' },
          { id: 17, name: 'Истечение кровью' },
        ],
        skillsCamp: [
          { id: 14, name: 'Боевой Транс' },
          { id: 15, name: 'Попойка' },
          { id: 16, name: 'Отвергнуть Богов' },
          { id: 17, name: '	Заточить Копье' },
        ],
      },
      {
        id: 18,
        name: 'Крестоносец',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%BD%D0%BE%D1%81%D0%B5%D1%86',
        hasCommonCampSkills: true,

        skillsHero: [
          { id: 11, name: 'Глубокий рубец' },
          { id: 12, name: 'Железный лебедь' },
          { id: 13, name: 'Варварский вопль!' },
          { id: 14, name: 'Если кровоточит' },
          { id: 15, name: 'Прорыв' },
          { id: 16, name: 'Прилив адреналина' },
          { id: 17, name: 'Истечение кровью' },
        ],
        skillsCamp: [
          { id: 14, name: 'Неустрашимый лидер' },
          { id: 15, name: 'Выстаивание' },
          { id: 16, name: 'Вдохновляющая речь' },
          { id: 17, name: 'Неусыпная стража' },
        ],
      },
      {
        id: 19,
        name: 'Могильная воровка',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D1%80%D0%BE%D0%B2%D0%BA%D0%B0',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Киркой в лицо' },
          { id: 12, name: 'Выпад' },
          { id: 13, name: 'Мерцающие кинжалы' },
          { id: 14, name: 'Уход в тень' },
          { id: 15, name: 'Бросок ножа' },
          { id: 16, name: 'Ядовитые дротики' },
          { id: 17, name: 'Подлый токсин' },
        ],
        skillsCamp: [
          { id: 14, name: 'Табакерка' },
          { id: 15, name: 'Висельные шутки' },
          { id: 16, name: 'Ночные прогулки' },
          { id: 17, name: 'Кража' },
        ],
      },
      {
        id: 20,
        name: 'Мушкетёр',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%9C%D1%83%D1%88%D0%BA%D0%B5%D1%82%D1%91%D1%80',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Прицельный выстрел' },
          { id: 12, name: 'Дымовая завеса' },
          { id: 13, name: 'Указать цель' },
          { id: 14, name: 'Картечь' },
          { id: 15, name: 'Пистолет' },
          { id: 16, name: 'Подлечить' },
          { id: 17, name: 'Выстрел навскидку' },
        ],
        skillsCamp: [
          { id: 14, name: 'Полевая форма' },
          { id: 15, name: 'План похода' },
          { id: 16, name: 'Чистка и смазка мушкета' },
          { id: 17, name: 'Очерёдность' },
        ],
      },
      {
        id: 21,
        name: 'Наёмник',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%9D%D0%B0%D1%91%D0%BC%D0%BD%D0%B8%D0%BA',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Вознаграждение' },
          { id: 12, name: 'Смертная метка' },
          { id: 13, name: 'Иди сюда' },
          { id: 14, name: 'Апперкот' },
          { id: 15, name: 'Светошумовая граната' },
          { id: 16, name: 'Добивание' },
          { id: 17, name: 'Шипы' },
        ],
        skillsCamp: [
          { id: 14, name: 'Вот как надо' },
          { id: 15, name: 'Выслеживание' },
          { id: 16, name: 'Плановый разгром' },
          { id: 17, name: 'Разведка впереди' },
        ],
      },
      {
        id: 22,
        name: 'Оккультист',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%9E%D0%BA%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%81%D1%82',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Жертвенный порез' },
          { id: 12, name: 'Бездонная артиллерия' },
          { id: 13, name: 'Ослабляющее проклятье' },
          { id: 14, name: 'Восстановление' },
          { id: 15, name: 'Проклятье уязвимости' },
          { id: 16, name: 'Руки из бездны' },
          { id: 17, name: 'Демоническая тяга' },
        ],
        skillsCamp: [
          { id: 14, name: 'Лишение надежды' },
          { id: 15, name: 'Тёмный ритуал' },
          { id: 16, name: 'Тёмная сила' },
          { id: 17, name: 'Тайный разговор' },
        ],
      },
      {
        id: 23,
        name: 'Прокажённый',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D0%B6%D1%91%D0%BD%D0%BD%D1%8B%D0%B9',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Рубец' },
          { id: 12, name: 'Сечка' },
          { id: 13, name: 'Очищение' },
          { id: 14, name: 'Месть' },
          { id: 15, name: 'Выдержка' },
          { id: 16, name: 'Обряд' },
          { id: 17, name: 'Запугивание' },
        ],
        skillsCamp: [
          { id: 14, name: 'Снять маску' },
          { id: 15, name: 'Кровавый покров' },
          { id: 16, name: 'Отражение' },
          { id: 17, name: 'Карантин' },
        ],
      },
      {
        id: 24,
        name: 'Разбойник',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%A0%D0%B0%D0%B7%D0%B1%D0%BE%D0%B9%D0%BD%D0%B8%D0%BA',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Глубокий порез' },
          { id: 12, name: 'Пистолетный выстрел' },
          { id: 13, name: 'Выстрел в упор' },
          { id: 14, name: 'Картечный залп' },
          { id: 15, name: 'Прицельный выстрел' },
          { id: 16, name: 'Боевой натиск' },
          { id: 17, name: 'Порез вены' },
        ],
        skillsCamp: [
          { id: 14, name: 'Висельные шутки' },
          { id: 15, name: 'Небывалое мастерство' },
          { id: 16, name: 'Чистка ружей' },
          { id: 17, name: 'Бандитское чувство' },
        ],
      },
      {
        id: 25,
        name: 'Самобичеватель',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%A1%D0%B0%D0%BC%D0%BE%D0%B1%D0%B8%D1%87%D0%B5%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C',
        hasCommonCampSkills: false,
        skillsHero: [
          { id: 11, name: 'Наказание' },
          { id: 12, name: 'Дождь из слез' },
          { id: 13, name: 'Кровопускание' },
          { id: 14, name: 'Возвращение' },
          { id: 15, name: 'Искупление' },
          { id: 16, name: 'Терпение' },
          { id: 17, name: 'Страдание' },
        ],
        skillsCamp: [
          { id: 14, name: 'Ярость бича' },
          { id: 15, name: 'Утешение бича' },
          { id: 16, name: 'Поцелуй бича' },
          { id: 17, name: 'Исцеление бичом' },
        ],
      },
      {
        id: 26,
        name: '	Чумной доктор',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%A7%D1%83%D0%BC%D0%BD%D0%BE%D0%B9_%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Чумная граната' },
          { id: 12, name: 'Боевая медицина' },
          { id: 13, name: 'Ободряющий пар' },
          { id: 14, name: 'Ослепляющий газ' },
          { id: 15, name: 'Ядовитый залп' },
          { id: 16, name: 'Порез' },
          { id: 17, name: 'Дезориентирующий залп' },
        ],
        skillsCamp: [
          { id: 14, name: 'Пиявки' },
          { id: 15, name: 'Самолечение' },
          { id: 16, name: 'Лекарство' },
          { id: 17, name: 'Экспериментальные пары' },
        ],
      },
      {
        id: 27,
        name: 'Шут',
        wiki: 'https://darkestdungeon.fandom.com/ru/wiki/%D0%A8%D1%83%D1%82',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Удар кинжалом' },
          { id: 12, name: 'Жатва' },
          { id: 13, name: 'Финал' },
          { id: 14, name: 'Соло' },
          { id: 15, name: 'Отрезать' },
          { id: 16, name: 'Боевая баллада' },
          { id: 17, name: 'Вдохновляющая мелодия' },
        ],
        skillsCamp: [
          { id: 14, name: 'Время назад' },
          { id: 15, name: 'У розы есть шипы' },
          { id: 16, name: 'Тигриный глаз' },
          { id: 17, name: 'Насмешка' },
        ],
      },
      {
        id: 28,
        name: 'Щитолом',
        wiki:
          'https://darkestdungeon.fandom.com/ru/wiki/%D0%A9%D0%B8%D1%82%D0%BE%D0%BB%D0%BE%D0%BC',
        hasCommonCampSkills: true,
        skillsHero: [
          { id: 11, name: 'Пробивание' },
          { id: 12, name: 'Ошеломление' },
          { id: 13, name: 'Змеиный поцелуй' },
          { id: 14, name: 'Пронзание' },
          { id: 15, name: 'Прокалывание' },
          { id: 16, name: 'Очарование' },
          { id: 17, name: 'Раскачивание змеи' },
        ],
        skillsCamp: [
          { id: 14, name: 'Змеиные глаза' },
          { id: 15, name: 'Змеиная кожа' },
          { id: 16, name: 'Песчаная буря' },
          { id: 17, name: 'Змеиные объятия' },
        ],
      },
    ],
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
