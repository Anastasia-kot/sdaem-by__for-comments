import { CatalogueState } from "../../../types/catalogue_data";

  
export let data: CatalogueState = { 
  items: [
    {
      id: 0,
      category: 'room',
      gold: false,
      image: [
        'https://s0.rbk.ru/v6_top_pics/media/img/5/60/756281458904605.jpg',
        'https://www.pufikhomes.com/wp-content/uploads/2019/06/sovremennaya-belaya-kvartira-dlya-devushki-v-starom-dome-moskvy-pufikhomes-1.jpg',
        'https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg',
        'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
        'https://n1s2.hsmedia.ru/58/65/e0/5865e06b01fea60c2ba969163769bee4/727x485_1_48b32eb3020992efb0ebe073e4f5aa3d@5000x3334_0xac120003_69286231626783910.jpg',

      ],

      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'Шабаны',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '3 (1+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },

      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }
    },
    {
      id: 1,
      category: 'room',
      gold: true,
      image: [
        'https://s0.rbk.ru/v6_top_pics/media/img/5/60/756281458904605.jpg',
        'https://www.pufikhomes.com/wp-content/uploads/2019/06/sovremennaya-belaya-kvartira-dlya-devushki-v-starom-dome-moskvy-pufikhomes-1.jpg',
        'https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg',
        'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
        'https://n1s2.hsmedia.ru/58/65/e0/5865e06b01fea60c2ba969163769bee4/727x485_1_48b32eb3020992efb0ebe073e4f5aa3d@5000x3334_0xac120003_69286231626783910.jpg',


      ],
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 15,


      addressFeatures: {
        address: 'Гродно, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'factory',
        city: 'Grodno'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },

      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      },

    },

    {
      id: 2,
      category: 'room',
      gold: false,

      image: 'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'factory',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '2 (1+1)',
        rooms: 3,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }
    },
    {
      id: 3, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,
      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'lenin',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '1',
        rooms: 1,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      gold: true,
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 4, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,


      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'lenin',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 2,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      gold: true,
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 5, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,
      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'partizan',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '1',
        rooms: 1,
        sizeAsMeters: 59


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      gold: true,
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 6, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      gold: true,

      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'partizan',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },

      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }
    },
    {
      id: 7, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,
      gold: true,


      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: '1may',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }
    },
    {
      id: 8, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      gold: true,
      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: '1may',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },


      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 9, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,
      gold: true,
      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: '1may',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 10, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      gold: true,


      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'soviet',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 11, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,


      gold: true,

      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'soviet',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 12, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      gold: true,

      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'Шабаны',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      },
      roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
    {
      id: 13, category: 'room',
      image: null,
      title: '4-комн. апартаменты на Грушевке',
      description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
      price: 65,

      gold: true,

      addressFeatures: {
        address: 'Минск, б-р Мулявина, д. 10',
        metro: 'Грушевка',
        district: 'Шабаны',
        city: 'Minsk'
      },

      roomFeatures: {
        sizeAsPeople: '4 (2+2)',
        rooms: 4,
        sizeAsMeters: 179


      },
      comfortFeatures: {
        gas: null,
        oven: null,
        coffeeMachine: null,
        microwave: null,
        dishes: null,
        dishwasher: null,
      }, roomOwner: {
        ownerStatus: 'Владелец',
        name: 'Dmitriy',
        phone: '+375(29) 291 - 14 - 44',
        email: 'vladimir6234@tut.by'
      }

    },
  ],
  totalCount: 13,
}