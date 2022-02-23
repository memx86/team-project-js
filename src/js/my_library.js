import { renderMarkup } from './film_card';
import Storage from './services/storage';

const test = [
  {
    adult: false,
    backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
    genre_ids: [35, 16, 10751, 10402],
    id: 438695,
    original_language: 'en',
    original_title: 'Sing 2',
    overview:
      'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
    popularity: 1772.382,
    poster_path: '/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
    release_date: '2021-12-01',
    title: 'Sing 2',
    video: false,
    vote_average: 8.2,
    vote_count: 1951,
  },
  {
    adult: false,
    backdrop_path: '/cTTggc927lEPCMsWUsdugSj6wAY.jpg',
    genre_ids: [28, 12],
    id: 335787,
    original_language: 'en',
    original_title: 'Uncharted',
    overview:
      'A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.',
    popularity: 1532.115,
    poster_path: '/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg',
    release_date: '2022-02-10',
    title: 'Uncharted',
    video: false,
    vote_average: 7.2,
    vote_count: 323,
  },
  {
    adult: false,
    backdrop_path: '/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg',
    genre_ids: [10751, 12, 35, 14],
    id: 585245,
    original_language: 'en',
    original_title: 'Clifford the Big Red Dog',
    overview:
      'As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.',
    popularity: 768.306,
    poster_path: '/oifhfVhUcuDjE61V5bS5dfShQrm.jpg',
    release_date: '2021-11-10',
    title: 'Clifford the Big Red Dog',
    video: false,
    vote_average: 7.3,
    vote_count: 1051,
  },
  {
    adult: false,
    backdrop_path: '/ejgC2lEmuGXiP0A1LvwNezUjNmt.jpg',
    genre_ids: [28, 12, 878],
    id: 406759,
    original_language: 'en',
    original_title: 'Moonfall',
    overview:
      'A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.',
    popularity: 443.509,
    poster_path: '/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
    release_date: '2022-02-03',
    title: 'Moonfall',
    video: false,
    vote_average: 5.9,
    vote_count: 148,
  },
  {
    adult: false,
    backdrop_path: '/iMFDOpE52wbT9GXYTvv4Em6QDhl.jpg',
    genre_ids: [16, 10751, 35, 14],
    id: 508947,
    original_language: 'en',
    original_title: 'Turning Red',
    overview:
      'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.',
    popularity: 343.305,
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    release_date: '2022-03-10',
    title: 'Turning Red',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/lqGqvmqHr8T2Ll8w7mzAtNshUpb.jpg',
    genre_ids: [28, 80, 18],
    id: 414906,
    original_language: 'en',
    original_title: 'The Batman',
    overview:
      'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
    popularity: 341.662,
    poster_path: '/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg',
    release_date: '2022-03-01',
    title: 'The Batman',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/5P0PtxIneLNMq7m0crF1R9Sjzpv.jpg',
    genre_ids: [27, 53],
    id: 610253,
    original_language: 'en',
    original_title: 'Halloween Kills',
    overview:
      "The nightmare isn't over as unstoppable killer Michael Myers escapes from Laurie Strode's trap to continue his ritual bloodbath. Injured and taken to the hospital, Laurie fights through the pain as she inspires residents of Haddonfield, to rise up against Myers. Taking matters into their own hands, the Strode women and other survivors form a vigilante mob to hunt down Michael and end his reign of terror once and for all.",
    popularity: 306.134,
    poster_path: '/qmJGd5IfURq8iPQ9KF3les47vFS.jpg',
    release_date: '2021-10-14',
    title: 'Halloween Kills',
    video: false,
    vote_average: 6.8,
    vote_count: 1547,
  },
  {
    adult: false,
    backdrop_path: '/vywOsCtQfZijVLMpde4tqD7Gloi.jpg',
    genre_ids: [28, 35, 99],
    id: 656663,
    original_language: 'en',
    original_title: 'Jackass Forever',
    overview:
      'Celebrate the joy of a perfectly executed shot to the groin as Johnny Knoxville, Steve-O and the rest of the gang return alongside some newcomers for one final round of hilarious, wildly absurd and often dangerous displays of stunts and comedy.',
    popularity: 238.549,
    poster_path: '/ruHDFumJfW7F2vEqTZEQQ9xT7CA.jpg',
    release_date: '2022-02-01',
    title: 'Jackass Forever',
    video: false,
    vote_average: 7,
    vote_count: 37,
  },
  {
    adult: false,
    backdrop_path: '/3GgkzCDq6KYpcmJmcOKh27hYRyj.jpg',
    genre_ids: [12, 16, 10751, 14],
    id: 588921,
    original_language: 'en',
    original_title: 'Ainbo: Spirit of the Amazon',
    overview:
      'An epic journey of a young hero and her Spirit Guides, \'Dillo\' a cute and humorous armadillo and "Vaca" a goofy oversized tapir, who embark on a quest to save their home in the spectacular Amazon Rainforest.',
    popularity: 216.476,
    poster_path: '/l8HyObVj8fPrzacAPtGWWLDhcfh.jpg',
    release_date: '2021-02-09',
    title: 'Ainbo: Spirit of the Amazon',
    video: false,
    vote_average: 7.2,
    vote_count: 281,
  },
  {
    adult: false,
    backdrop_path: '/9OE62lhp5FPNJMfKXodegVLjHUA.jpg',
    genre_ids: [16, 10751],
    id: 823609,
    original_language: 'en',
    original_title: 'Monster Family 2',
    overview:
      "To free Baba Yaga and Renfield from the clutches of Monster Hunter Mila Starr, the Wishbone Family once more transforms into a Vampire, Frankenstein's Monster, a Mummy and a Werewolf. Aided and abetted by their three pet bats, our Monster Family zooms around the world again to save their friends, make new monstrous acquaintances and finally come to the realization that ‘Nobody’s Perfect’ – even those with flaws can find happiness.",
    popularity: 209.52,
    poster_path: '/em2NLSbVj49NjpdqmaKYuqKYZET.jpg',
    release_date: '2021-01-13',
    title: 'Monster Family 2',
    video: false,
    vote_average: 7.1,
    vote_count: 28,
  },
  {
    adult: false,
    backdrop_path: '/hB4ibOHXm1Xl0IbuYVioktDGUWJ.jpg',
    genre_ids: [18, 35],
    id: 718032,
    original_language: 'en',
    original_title: 'Licorice Pizza',
    overview:
      'The story of Alana Kane and Gary Valentine growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.',
    popularity: 207.535,
    poster_path: '/jD98aUKHQZNAmrk0wQQ9wmNQPnP.jpg',
    release_date: '2021-11-26',
    title: 'Licorice Pizza',
    video: false,
    vote_average: 7.2,
    vote_count: 319,
  },
  {
    adult: false,
    backdrop_path: '/fbTxsnJcQwuwzCEu9VEiU9lV75Y.jpg',
    genre_ids: [28],
    id: 645788,
    original_language: 'en',
    original_title: 'The Protégé',
    overview:
      'Rescued as a child by the legendary assassin Moody and trained in the family business, Anna is the world’s most skilled contract killer. When Moody, the man who was like a father to her and taught her everything she needs to know about trust and survival, is brutally killed, Anna vows revenge. As she becomes entangled with an enigmatic killer whose attraction to her goes way beyond cat and mouse, their confrontation turns deadly and the loose ends of a life spent killing will weave themselves ever tighter.',
    popularity: 180.023,
    poster_path: '/o9FY8N5c8CXf22q8s4CmRRjAQJx.jpg',
    release_date: '2021-08-19',
    title: 'The Protégé',
    video: false,
    vote_average: 6.7,
    vote_count: 508,
  },
  {
    adult: false,
    backdrop_path: '/4kb7uR1UmXa33U6GB6F9xckFlhn.jpg',
    genre_ids: [18, 36],
    id: 614917,
    original_language: 'en',
    original_title: 'King Richard',
    overview:
      'The story of how Richard Williams served as a coach to his daughters Venus and Serena, who will soon become two of the most legendary tennis players in history.',
    popularity: 179.728,
    poster_path: '/2dfujXrxePtYJPiPHj1HkAFQvpu.jpg',
    release_date: '2021-11-18',
    title: 'King Richard',
    video: false,
    vote_average: 8.1,
    vote_count: 743,
  },
  {
    adult: false,
    backdrop_path: '/t9K8ycUBCplWiICDOKRNRYcEH9e.jpg',
    genre_ids: [16, 28, 12, 9648],
    id: 810693,
    original_language: 'ja',
    original_title: '劇場版 呪術廻戦 0',
    overview:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
    popularity: 132.867,
    poster_path: '/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg',
    release_date: '2021-02-24',
    title: 'Jujutsu Kaisen 0',
    video: false,
    vote_average: 7.3,
    vote_count: 16,
  },
  {
    adult: false,
    backdrop_path: '/8T7SS4jU7TmtqrUr45JgZASCTUP.jpg',
    genre_ids: [18, 35],
    id: 626735,
    original_language: 'en',
    original_title: 'Dog',
    overview:
      "An army ranger and his dog embark on a road trip along the Pacific Coast Highway to attend a friend's funeral.",
    popularity: 129.605,
    poster_path: '/zHQy4h36WwuCetKS7C3wcT1hkgA.jpg',
    release_date: '2022-02-17',
    title: 'Dog',
    video: false,
    vote_average: 6.5,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: '/w81qHqr1CdbdRco8jpmu6lXMqyk.jpg',
    genre_ids: [18],
    id: 766798,
    original_language: 'es',
    original_title: 'Madres paralelas',
    overview:
      'Two unmarried women who have become pregnant by accident and are about to give birth meet in a hospital room: Janis, middle-aged, unrepentant and happy; Ana, a teenager, remorseful and frightened.',
    popularity: 120.342,
    poster_path: '/gDaxYkYNbHuM2VlUazbcpnFZB6d.jpg',
    release_date: '2021-10-08',
    title: 'Parallel Mothers',
    video: false,
    vote_average: 6.8,
    vote_count: 343,
  },
  {
    adult: false,
    backdrop_path: '/6jRHaYJyje5RNS3L353udrPU3ME.jpg',
    genre_ids: [18],
    id: 554230,
    original_language: 'en',
    original_title: 'The Lost Daughter',
    overview:
      "A woman's seaside vacation takes a dark turn when her obsession with a young mother forces her to confront secrets from her past.",
    popularity: 104.357,
    poster_path: '/t1oLNRFixpFOVsyz1HCqCUW3wiW.jpg',
    release_date: '2021-12-16',
    title: 'The Lost Daughter',
    video: false,
    vote_average: 6.6,
    vote_count: 366,
  },
  {
    adult: false,
    backdrop_path: '/fdE7pXaGyaFI39dy3Fg59FSauNr.jpg',
    genre_ids: [18],
    id: 716612,
    original_language: 'en',
    original_title: 'Spencer',
    overview:
      'During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana decides to leave her marriage to Prince Charles.',
    popularity: 103.366,
    poster_path: '/7GcqdBKaMM9BWXWN07BirBMkcBF.jpg',
    release_date: '2021-11-04',
    title: 'Spencer',
    video: false,
    vote_average: 7.2,
    vote_count: 540,
  },
  {
    adult: false,
    backdrop_path: '/cFVgXPmF8UMGH67roYd4e3QaAHP.jpg',
    genre_ids: [878, 28, 80, 16],
    id: 655431,
    original_language: 'ja',
    original_title: 'PSYCHO-PASS サイコパス 3 FIRST INSPECTOR',
    overview:
      'Inspector Kei Mikhail Ignatov finds himself involved with an organization named Bifrost with the possibility of freeing his wife if he betrays Unit One. Koichi Azusawa coordinates an assault on the Public Safety Bureau tower using his hacker Obata, locking down the building and kidnapping Inspector Arata Shindo. Azusawa demands that governor Karina Komiya resign from her position.',
    popularity: 92.527,
    poster_path: '/m2RzGRMbdMUcp8S3PYtlPpHa83g.jpg',
    release_date: '2020-03-27',
    title: 'Psycho-Pass 3: First Inspector',
    video: false,
    vote_average: 7.7,
    vote_count: 54,
  },
  {
    adult: false,
    backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    genre_ids: [18, 80],
    id: 238,
    original_language: 'en',
    original_title: 'The Godfather',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    popularity: 91.147,
    poster_path: '/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg',
    release_date: '1972-03-14',
    title: 'The Godfather',
    video: false,
    vote_average: 8.7,
    vote_count: 15516,
  },
];
const storageWatched = new Storage(Storage.KEYS.WATCHED);
const storageQueue = new Storage(Storage.KEYS.QUEUED);
const watched = storageWatched.get();
const queue = storageQueue.get();

const refs = {
  myLibBtn: document.querySelector('[data-btn="myLibrary"]'),
  myLibA: document.querySelector('[data-a="myLibrary"]'),
  homeBtn: document.querySelector('[data-btn="home"]'),
  homeA: document.querySelector('[data-a="home"]'),
  watchedBtn: document.querySelector('[data-btn="watched"]'),
  queueBtn: document.querySelector('[data-btn="queue"]'),
  libBtnsContainer: document.querySelector('.buttons__container'),
  inputForm: document.querySelector('.header-form'),
  gallery: document.querySelector('.gallery'),
  header: document.querySelector('.header'),
};

function onClickMyLibBtn() {
  if (refs.myLibA.classList.contains('current')) {
    return;
  }
  changeClassA('current');
  changeClassBtn('btn--on', 'btn--off');
  refs.libBtnsContainer.classList.remove('opacity');
  refs.inputForm.classList.add('opacity');
  const on = setTimeout(() => {
    refs.libBtnsContainer.classList.remove('is-hidden');
    refs.inputForm.classList.add('is-hidden');
  }, 250);

  refs.gallery.innerHTML = '';
  refs.header.classList.add('myLib');
  if (!watched) {
    refs.gallery.innerHTML = 'img заглушка';
    return;
  }
  renderMarkup(watched);
}

function onClickMyHomeBtn() {
  if (refs.homeA.classList.contains('current')) {
    return;
  }
  changeClassA('current');
  refs.libBtnsContainer.classList.add('opacity');
  refs.inputForm.classList.remove('opacity');
  const on = setTimeout(() => {
    refs.libBtnsContainer.classList.add('is-hidden');
    refs.inputForm.classList.remove('is-hidden');
  }, 250);

  refs.header.classList.remove('myLib');
  refs.gallery.innerHTML = '';
}

function onClickMyWatchedBtn() {
  refs.gallery.innerHTML = '';
  changeClassBtn('btn--on', 'btn--off');
  if (!watched) {
    refs.gallery.innerHTML = 'img заглушка';
    return;
  }
  renderMarkup(watched);
}

function onClickMyQueueBtn() {
  refs.gallery.innerHTML = '';
  changeClassBtn('btn--off', 'btn--on');
  if (!queue) {
    refs.gallery.innerHTML = 'img заглушка';
    return;
  }
  renderMarkup(queue);
}

function changeClassBtn(add, remove) {
  refs.watchedBtn.classList.add(add);
  refs.watchedBtn.classList.remove(remove);
  refs.queueBtn.classList.add(remove);
  refs.queueBtn.classList.remove(add);
}

function changeClassA(csassA) {
  refs.myLibA.classList.toggle(csassA);
  refs.homeA.classList.toggle(csassA);
}

export default function myLibrary() {
  refs.myLibBtn.addEventListener('click', onClickMyLibBtn);
  refs.homeBtn.addEventListener('click', onClickMyHomeBtn);
  refs.watchedBtn.addEventListener('click', onClickMyWatchedBtn);
  refs.queueBtn.addEventListener('click', onClickMyQueueBtn);
}
