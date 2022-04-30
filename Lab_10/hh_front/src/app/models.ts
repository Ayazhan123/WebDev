export interface Company {
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
}

export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: number;
}

export const companies = [
{
id: 1,
name: "АО \"Казахтелеком\"",
description: "АО \"Казахтелеком\" - крупнейшая телекоммуникационная компания Казахстана, имеет статус национального оператора связи.\r\nНАК \"Казахтелеком\" образована 17 июня 1994 года.\r\nОсновные офисы находятся в Астане и Алматы, региональные представительства - во всех частях Казахстана.\r\n \r\nАО \"Казахтелеком\" владеет Национальной информационной супермагистралью, которая представляет собой транспортное оптико-волоконное кольцо, соединяющее цифровыми потоками с высокой скоростью передачи данных крупные города Казахстана.",
city: "Астана",
address: "ул. Сауран, 12,"
},
{
id: 2,
name: "АО \"Эйр Астана\"",
description: "Авиакомпания \"Эйр Астана\" была зарегистрирована в 2001 году.\r\n\"Эйр Астана\" сертифицирована Европейским агентством авиационной безопасности (EASA) на выполнение технического обслуживания воздушных судов по требованиям директивы 145.",
city: "Алматы",
address: "ул. Закарпатская, 4-А"
},
{
id: 3,
name: "АО \"Kaspi Bank\"",
description: "АО \"Kaspi Bank\" - крупнейший банк Казахстана по размерам розничного кредитного портфеля и третий по размерам вкладов физических лиц.\r\n \r\nKaspi Bank активно развивает инновационные продукты и услуги. Одной из самых популярных услуг банка являются платежи онлайн и через платежные терминалы.\r\nСотрудниками банка являются выпускники мировых и ведущих казахстанских ВУЗов: Harvard, Oxford, КИМЭП, Казахстанско-Британский Технический Университет, КазГУ им. аль-Фараби и др.\r\n \r\nВ банке был создан и успешно работает корпоративный университет непрерывной системы обучения сотрудников. Партнерами в обучении и развитии персонала являются международные компании: Deloitte; Ernst & Young; PriceWaterhouseCoopers; Oxford Financial Training; Management Development Center; Global Education Provider и др.\r\nПринимая участие в бизнес-проектах, специалисты имеют возможность перенимать и использовать передовой опыт лидеров, имеющих опыт работы в ведущих зарубежных банках и финансовых организациях.\r\n \r\nСоздание команды мотивированных и высококвалифицированных специалистов является приоритетной целью АО \"Kaspi Bank\". Компания ценит в людях профессионализм, компетентность, способность работать в команде для достижения целей, стоящих перед динамично развивающимся банком.\r\n \r\nЕсли Вы заинтересованы в приобретении знаний, практических навыков и опыта работы, мы будем рады приветствовать Вас в числе наших сотрудников.",
city: "Алматы",
address: "ул. Наурызбай батыра, 154-А"
},
{
id: 4,
name: "Sulpak",
description: "ТОО \"Arena S\" представляет сеть магазинов \"Sulpak\".\r\n \r\nИстория бренда Sulpak началась в 1992 г.\r\nСегодня Sulpak - самая крупная розничная сеть магазинов бытовой техники и электроники, известная каждому казахстанцу. Наша розничная сеть насчитывает более 200 магазинов на территории Казахстана, 4 магазина в Кыргызской Республике.\r\nМы растем и развиваемся, расширяя свою географию. На сегодняшний день в Sulpak работает более 6 000 сотрудников. Все взаимоотношения в команде выстроены на принципах равенства, доверия и взаимоуважения, каждый открыт к общению, и Генеральный директор и работник склада.",
city: "Алматы",
address: "пр. Жибек Жолы, 135"
},
{
id: 5,
name: "Magnum Cash&Carry178 вакансий",
description: "ТОО \"Magnum Сash&Сarry\" (Kazakhstan) - крупнейшая динамично развивающаяся торгово-розничная сеть в Казахстане.\r\nОсновной деятельностью является реализация товаров широкого потребления.\r\nКомпания основана в 2007 году, в том же году был открыт первый магазин \"Magnum\".\r\n \r\nТОО \"Magnum Сash&Сarry\" это:\r\n- крупнейшие торговые комплексы в Алматы, Астане, Караганде, Шымкенте, Талдыкоргане и Петропавловске;\r\n- широкий ассортимент товаров, который представлен качественными и свежими продуктами питания, а также товарами для дома и семьи.",
city: "Алматы",
address: "мкр. Астана, 1/10"
}
]

export const vacancies = [
  {
id: 1,
name: "Продавец-кассир",
description: "Мы предлагаем нашим сотрудникам:\r\n\r\nОформление согласно ТК РК;\r\nБесплатный обед;\r\nПремии;\r\nГрафик работы: 5/2 с 08:00 до 17:00, и с 11:00 до 20:00, и с 14:00 до 23:00 в каждое из этого времени. (подработки возможны), возможен график 2/2 после 23:00 выдаем дорожные;\r\nСтабильный заработок, постоянную работа;\r\nРаботу в успешной, развивающийся компании. Мы постоянно растём, на сегодняшний день:40 действующих филиалов в Казахстане;\r\nКонкурсы для сотрудников: призовые места награждаются ценными подарками. Скучно точно не будет!\r\nПодробное, всестороннее обучение – это поможет тебе получить необходимые знания, развивать навыки продажи и консультирования и стремиться вверх по карьерной лестнице.\r\nОбязанности:\r\n\r\nКонсультирование клиентов по приобретаемым товарам в нашем магазине;\r\nВыкладка товара на витрины согласно стандартам компании;\r\nПроверка на наличие ценников;\r\nПроверка акционного товара;\r\nРабота с паллетами;\r\nУчастие в инвентаризациях;\r\nХорошая физическая форма, подвижность.\r\nНаши пожелания:\r\n\r\nЖелание работать в сфере продаж;\r\nСреднее специальное/неполное высшее (заочное)/высшее образование;\r\nМы заинтересованы в сотрудниках с активной жизненной позицией, которые быстро обучаются, нацелены на развитие;\r\nЖелателен опыт продаж, но если его нет, то мы всему научим.\r\nНачни работать ПРОДАВЦОМ в магазинах «Мagnum Сash&Сarry» прямо сейчас!",
salary: 130000,
company: 5
},
{
id: 2,
name: "Контролер службы безопасности",
description: "В нашей команде вам предстоит:\r\n\r\nОбеспечение контрольно-пропускного режима в помещении Компании и общественного порядка.\r\nРабота по взаимодействию с посетителями и контрагентами Компании при их посещении ТК.\r\nВажно, чтобы у вас были:\r\n\r\nСреднее специальное/неполное высшее/высшее образование;\r\nЖелание работать в сфере продаж;\r\nАктивная жизненная позиция;\r\nВысокая обучаемость, нацеленность на развитие;\r\nГрамотная речь, доброжелательность и вежливость в общении;\r\nУмение работать в команде, готовность к взаимопомощи.\r\nЭто будет плюсом!\r\n\r\nОпыт работы, но если его нет, то мы всему научим;",
salary: 150000,
company: 5
},
{
id: 3,
name: "Охранник (контролёр)",
description: "Мы предлагаем:\r\n\r\nОфициальную зарплату 100 000 тг. на руки\r\nДружный коллектив\r\nБрендированную форму\r\nГрафик: 5/2\r\nОбязанности:\r\n\r\nОбеспечение безопасности в магазине\r\nЗнание и соблюдение должностной инструкции сотрудника охраны\r\nСоблюдение контрольно-пропускного режима\r\nТребования:\r\n\r\nОтветственность\r\nДисциплинированность\r\nПунктуальность\r\nИсполнительность\r\nВежливость",
salary: 100000,
company: 4
},
{
id: 4,
name: "Контент-менеджер интернет-магазина",
description: "SULPAK – лидер по продажам бытовой технике и электронике.\r\n\r\nСегодня Sulpak – это 196 магазинов в 103 городах и поселках Казахстана и Кыргызской Республики.\r\n\r\nМы всегда открыты для талантливых, энергичных и людей.\r\n\r\nНа данный момент у нас открыта вакансия Контент-менеджера в Интернет магазине.\r\n\r\nЧтобы вступить в наши ряды - у тебе должны быть:\r\n\r\nЗнания следующих программ: Photoshop, Notepad++\r\nЗнание HTML, CSS.\r\nЗнание Microsoft Office\r\nЗнание казахского языка ОБЯЗАТЕЛЬНО\r\nНавыки написания статей и обзоров\r\nЕсли ты знаешь все вышеперечисленное, тогда в нашей команде у тебя будет следующий функционал:\r\n\r\nЗаполнение на сайте Интернет магазина карточек товаров\r\nОформление описания карточек товаров\r\nНаписание статей и обзоров\r\nГрафическое и текстовое оформление промо-активностей\r\nМодерирование вопросов и комментариев на страницах товара\r\nРабота с Маркет-плейс.\r\nОформление акций и написание коротких акционных текстов\r\nВ свою очередь мы предлагаем тебе:\r\n\r\nСтремительный карьерный рост.\r\nДружный коллектив.\r\nОфициальное трудоустройство.\r\nПросторный офис в БЦ \"Жибек Жолы\".\r\nСтань частью нашей команды!",
salary: 150000,
company: 4
},
{
id: 5,
name: "Приемосдатчик багажа",
description: "АО \"Эйр Астана\" объявляет набор на должность приемосдатчика багажа в городе Нур-Султан.\r\n\r\nЭйр Астана в 9-ый раз признана лучшей авиакомпанией Центральной Азии благодаря нашей приверженности высоким стандартам. Приглашаем в команду уверенных в себе, любящих свою работу и готовых стать частью большого коллектива!\r\nОбязанности:\r\n\r\nАккуратно комплектовать багаж по направлениям с помощь системы Amadeus Baggage Reconciliation System (BRS)\r\nПроизводить комплектацию средств пакетирования и багажных телег багажом в соответствии с полученными инструкциями и правилами авиакомпании\r\nПри необходимости производить погрузку и выгрузку пассажирского багажа в/из воздушного судна\r\nОбеспечивать своевременную загрузку трансфертного багажа.\r\nКонтролировать правильное размещение багажа на весах при регистрации на регистрационной стойке\r\nУсловия :\r\n\r\nГрафик работы сменный 2/2\r\nСкидка на внутренние и международные перелеты Air Astana и Fly Arystan, а также наших партнеров для сотрудника и семьи\r\nСкидки у наших партнеров (отели, гостиницы, рестораны, фитнес)\r\nМедицинское страхование, пенсионные отчисления\r\nТребования :\r\n\r\nСреднее-профессиональное (предпочтительно авиационное) образование\r\nМожно без опыта. Обучение на рабочем месте 1-4 недель.\r\nВладение казахским и русским языками на разговорном уровне (говорить, понимать), английский язык желателен (начальный уровень)\r\nЛичные качества :\r\n\r\nДобросовестность\r\nСоблюдение сроков\r\nПунктуальность\r\nЧестность\r\nЖелание расти и развиваться в компании",
salary: 160000,
company: 2
},
{
id: 6,
name: "Старший финансовый аналитик",
description: "Обязанности:\r\n\r\nОбеспечивать своевременность и правильность подготовки отчетов, справок, писем и других документов, касающихся деятельности АО «Эйр Астана» по финансовым вопросам.\r\nАнализировать отклонения и выявлять причины отклонений по статьям бюджета как в разрезе отдельных департаментов, так и по авиакомпании в целом\r\nАнализировать производственные показатели, влияющих на финансовую производительность авиакомпани\r\nКонсолидация бюджета доходов и расходов по авиакомпании, осуществление контроля по его исполнению\r\nАнализ прибыльности маршрутов\r\nПодготовка сравнительного анализа деятельности компании по индустрии\r\nГотовить ежемесячные отчеты по производительности авиакомпании для руководства и акционера с пояснением причин основных отклонений.\r\nСвоевременно отвечать на запросы других подразделений авиакомпании по вопросам бюджетного планирования и порядка финансирования\r\nГотовить отчеты по капитальным затратам авиакомпании в разрезе кост центров на ежемесячной основе\r\nОрганизовать процессы по торговле квотами (EU ETS) .\r\nПрезентация основных план-фактных отклонений доходов и расходов в разрезе кост центров на собрании руководства компании на ежемесячной основе\r\nЕжемесячная проверка корректности отражения статей фактических доходов, расходов и балансовых счетов бухгалтерией. Выявление причин основных отклонений, исправление ошибок\r\nРазрабатывать рекомендации по улучшению бюджетного планирования авиакомпании\r\nСодействовать при проведении независимой аудиторской проверки, при необходимости\r\nГотовить ответы на официальные запросы организаций, регламентирующих деятельность авиакомпании\r\nВыполнять дополнительные поручения непосредственного руководителя\r\nТребования:\r\n\r\nОбразование - высшее финансовое\r\nПредыдущий опыт по специальности - 2 года и более.\r\nФункциональные знания - МСФО, управленческий учет, бюджетирование.\r\nПродвинутые навыки владения MS Excel - обязательно, опыт работы с ERP системами - предпочтительно.\r\nВладение языками: русский - свободно, английский - advanced, казахский - предпочтительно.\r\nЛичностные компетенции - аналитические навыки, эффективная коммуникация",
salary: 400000,
company: 2
},
{
id: 7,
name: "Kaspi Гид",
description: "Станьте Kaspi Гидом, который открывает новые возможности нашим любимым клиентам.\r\n\r\nKaspi.kz – это место, где необыкновенные люди собираются вместе, чтобы проявить свои лучшие качества, как в работе, так и в жизни. Мы всегда ценим людей, которые стремятся к знаниям и великим победам, именно поэтому работа у нас – это шанс реализовать свой потенциал.\r\n\r\nОт Вас требуется:\r\n\r\nОбразование высшее/ среднее специальное, высшее неоконченное (4 курс, с возможностью работать полноценный рабочий день, с 9:00 до 18:00)\r\nСпециальность: любая\r\nОпыт работы в сфере обслуживания клиентов и/или продаж не менее 3 месяцев\r\nУмение найти подход к каждому клиенту\r\nУмение доступным языком излагать необходимую информацию клиенту\r\nПриветливость и доброжелательность\r\nБольшим преимуществом будет:\r\n\r\nЗнание казахского и русского языков в совершенстве\r\nЛичный опыт использования приложения Kaspi.kz\r\nВам предстоит:\r\n\r\nОбучать и вдохновлять клиентов пользоваться сервисом Kaspi.kz\r\nПомогать клиентам находить ответы на их вопросы\r\nДемонстрировать, как сервисы Kaspi.kz могут сделать жизнь проще, удобнее и быстрее\r\nВам предлагается:\r\n\r\nСтать частью команды Kaspi\r\nПолучать восторженные отзывы наших клиентов\r\nВозможность обучаться и первым узнавать о всех изменениях на Kaspi.kz\r\nПрофессиональное развитие и карьерный рост\r\nКачественное обучение и поддержку для быстрого успеха\r\nКомфортные условия труда, хорошо оборудованное рабочее место\r\nДостойный уровень заработной платы + ежемесячные бонусы по результатам работы\r\nОтделение подбираем по месту жительства",
salary: 200000,
company: 3
},
{
id: 8,
name: "Менеджер продаж",
description: "У вас есть желание развиваться в банковской сфере и влиять на собственный доход? Вы готовы принимать вызовы и ищите интересную, динамичную работу? Присоединяйтесь к команде Kaspi!\r\n\r\nОт Вас требуется:\r\n\r\nОбразование высшее (желательно финансы/экономика)\r\nУмение сосредотачиваться на потребности клиента;\r\nУмение доступным языком объяснить клиенту выгоды и преимущества банковского продукта;\r\nВысокие коммуникативные навыки и активность;\r\nНастойчивость в достижении целей.\r\nБольшим преимуществом будет:\r\n\r\nВладение навыками делового общения;\r\nОпыт работы в сфере продаж;\r\nВам предстоит:\r\n\r\nВести клиентскую базу по юридическим и физическим лицам;\r\nОказывать помощь и заботу клиентам в решении их проблем;\r\nВыстраивать коммуникации с ответственными лицами компаний - партнеров;\r\nВыявлять потребность клиентов и предлагать решения, исходя из их потребности;\r\nМы предлагаем:\r\n\r\nВозможность стать частью профессиональной дружной команды Kaspi;\r\nРазвитие и карьерный рост;\r\nИнтересные цели и задачи;\r\nКомфортные условия труда, хорошо оборудованное рабочее место;\r\nДостойный уровень заработной платы и ежемесячные премии по результатам работы.\r\nТип занятости\r\n\r\nПолная занятость, полный день",
salary: 180000,
company: 3
},
{
id: 9,
name: "Бухгалтер Службы учета налогов",
description: "Обязанности:\r\nВедение местных налогов по филиалу ( расчет местных налогов и платежей; начисление и выравнивание налогов и платежей; заполнение и отправка форм налоговой отчетности в УГД РК;\r\nПереписка по вопросам налогообложения с УГД РК и сторонними организациями;\r\nЗаполнение регистров, согласно Налоговой учетной политике АО \"Казахтелеком\";\r\nВыполнение заданий, связанных непосредственно с выполняемой работой данного участка) \r\nТребования:\r\nОбразование высшее экономическое;\r\nСтаж работы специальности неменее 3 лет.\r\nОпыт работы по учету ТМЗ\r\nSAP, LN, МСФО",
salary: 230000,
company: 1
},
{
id: 10,
name: "Начальник Служба технической поддержки",
description: "Обязанности:\r\nДля организации работ по ремонту и обслуживанию всех типов низковольтного и высоковольтного энергооборудования (ТП, РУ-10/0,4 кВ, КЛ-10/0,4 кВ, ЭПУ, ИБП, АКБ, ДГА, климатехника), устранению повреждений на электроустановках, техническому надзору при реконструкции и модернизации электроустановок и для руководства техническим персоналом Службы технической поддержки в г.Алматы, Нур-Султан, Актобе, Атырау\r\n\r\nТребования:\r\nВысшее образование по специальности Электроснабжение, Электроэнергетика\r\nСтаж работы в сфере электроэнергетики и телекоммуникаций не менее 15 лет, 5 группа по электробезопасности (до и свыше 1000 В",
salary: 300000,
company: 1
}
]

export interface AuthToken {
    token: string;
}