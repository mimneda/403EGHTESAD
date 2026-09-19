window.GENERAL_CLUSTERS_CONFIG = [
  {
    id: 'mabani',
    title: 'مبانی نظری در اسلام',
    maxUnits: 4,
    requiredCoursesCount: 2,
    description: '۴ واحد الزامی (اندیشه ۱ پیش‌نیاز اندیشه ۲ است)',
    courses: [
      { id: 'andisheh1', name: 'اندیشه اسلامی ۱', aliases: ['اندیشه اسلامی1 (مبدا و معاد)', 'اندیشه اسلامی ۱', 'انديشه اسلامي1 (مبدا و معاد)'], units: 2, isPrereqFor: 'andisheh2' },
      { id: 'andisheh2', name: 'اندیشه اسلامی ۲', aliases: ['اندیشه اسلامی 2 (نبوت و امامت)', 'اندیشه اسلامی ۲', 'انديشه اسلامي 2 (نبوت و امامت)'], units: 2, prereq: 'andisheh1' },
      { id: 'ensan', name: 'انسان در اسلام', aliases: ['انسان در اسلام'], units: 2 },
      { id: 'hoghoogh', name: 'حقوق اجتماعی و سیاسی در اسلام', aliases: ['حقوق اجتماعی و سیاسی در اسلام'], units: 2 }
    ]
  },
  {
    id: 'akhlagh',
    title: 'اخلاق اسلامی',
    maxUnits: 2,
    requiredCoursesCount: 1,
    description: '۲ واحد الزامی (فقط یک درس از این گرایش قابل اخذ است)',
    courses: [
      { id: 'falsafe_akhlagh', name: 'فلسفه اخلاق', aliases: ['فلسفه اخلاق ( با تكيه بر مباحث تربيتي )', 'فلسفه اخلاق ( با تکیه بر مباحث تربیتی )', 'فلسفه اخلاق'], units: 2 },
      { id: 'akhlagh_eslami', name: 'اخلاق اسلامی', aliases: ['اخلاق اسلامی', 'اخلاق اسلامي'], units: 2 },
      { id: 'aeen_zendegi', name: 'آیین زندگی', aliases: ['آيين زندگي (اخلاق كاربردي)', 'آیین زندگی (اخلاق کاربردی)', 'آیین زندگی'], units: 2 },
      { id: 'erfan_amali', name: 'عرفان عملی اسلام', aliases: ['عرفان عملي اسلام', 'عرفان عملی اسلام'], units: 2 }
    ]
  },
  {
    id: 'enghelab',
    title: 'انقلاب اسلامی',
    maxUnits: 2,
    requiredCoursesCount: 1,
    description: '۲ واحد الزامی (فقط یک درس از این گرایش قابل اخذ است)',
    courses: [
      { id: 'defa_moghaddas', name: 'آشنایی با دفاع مقدس', aliases: ['آشنایی با دفاع مقدس', 'آشنايي با دفاع مقدس'], units: 2 },
      { id: 'enghelab_eslami', name: 'انقلاب اسلامی ایران', aliases: ['انقلاب اسلامی ایران', 'انقلاب اسلامي ايران'], units: 2 },
      { id: 'ghanoon_asasi', name: 'آشنایی با قانون اساسی جمهوری اسلامی ایران', aliases: ['آشنایی با قانون اساسی جمهوری اسلامی ایران', 'آشنايي با قانون اساسي جمهوري اسلامي ايران'], units: 2 },
      { id: 'andisheh_siasi', name: 'اندیشه سیاسی امام خمینی', aliases: ['اندیشه سیاسی امام خمینی (ره)', 'انديشه سياسي امام خميني (ره)'], units: 2 }
    ]
  },
  {
    id: 'tarikh',
    title: 'تاریخ و تمدن اسلامی',
    maxUnits: 2,
    requiredCoursesCount: 1,
    description: '۲ واحد الزامی (فقط یک درس از این گرایش قابل اخذ است)',
    courses: [
      { id: 'farhang_tamadon', name: 'تاریخ فرهنگ و تمدن اسلامی', aliases: ['تاریخ فرهنگ و تمدن اسلامی', 'تاريخ فرهنگ و تمدن اسلامي'], units: 2 },
      { id: 'tarikh_tahlili', name: 'تاریخ تحلیلی صدر اسلام', aliases: ['تاریخ تحلیلی صدر اسلام', 'تاريخ تحليلي صدر اسلام'], units: 2 },
      { id: 'tarikh_emamat', name: 'تاریخ امامت', aliases: ['تاریخ امامت', 'تاريخ امامت'], units: 2 }
    ]
  },
  {
    id: 'manabe',
    title: 'آشنایی با منابع اسلامی',
    maxUnits: 2,
    requiredCoursesCount: 1,
    description: '۲ واحد الزامی (فقط یک درس از این گرایش قابل اخذ است)',
    courses: [
      { id: 'tafsir_quran', name: 'تفسیر موضوعی قرآن', aliases: ['تفسیر موضوعی قرآن', 'تفسير موضوعي قرآن'], units: 2 },
      { id: 'tafsir_nahj', name: 'تفسیر موضوعی نهج البلاغه', aliases: ['تفسیر موضوعی نهج البلاغه', 'تفسير موضوعي نهج البلاغه', 'تفسیر موضوعی نهج‌البلاغه'], units: 2 },
      { id: 'quran', name: 'قرآن', aliases: ['قرآن'], units: 0, disabledInChart: true, disabledNote: 'فعلاً حذف شده' }
    ]
  },
  {
    id: 'khanevadeh',
    title: 'دانش خانواده و جمعیت',
    maxUnits: 2,
    requiredCoursesCount: 1,
    description: '۲ واحد الزامی (مستقل از سقف دروس الهیات)',
    courses: [
      { id: 'danesh_khanevadeh', name: 'دانش خانواده و جمعیت', aliases: ['دانش خانواده و جمعیت', 'دانش خانواده و جمعيت'], units: 2 }
    ]
  }
];

/**
 * داده‌های دروس عمومی (معارف اسلامی) استخراج شده از OMOMI (2).xlsx
 * به همراه خوشه‌بندی، تفکیک جنسیت و امتحانات پایان‌ترم
 */
window.GENERAL_COURSES_DATA = [
  {
    "id": 500,
    "code": "2301003_24",
    "name": "اندیشه اسلامی1 (مبدا و معاد)",
    "rawName": "انديشه اسلامي1 (مبدا و معاد)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "مختاری محمود",
    "sessions": [
      {
        "day": "شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 501,
    "code": "2301003_25",
    "name": "اندیشه اسلامی1 (مبدا و معاد)",
    "rawName": "انديشه اسلامي1 (مبدا و معاد)",
    "units": 2,
    "capacity": 30,
    "registered": 13,
    "gender": "آقا",
    "instructor": "طوسی سعیدی مسعود",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 502,
    "code": "2301003_26",
    "name": "اندیشه اسلامی1 (مبدا و معاد)",
    "rawName": "انديشه اسلامي1 (مبدا و معاد)",
    "units": 2,
    "capacity": 30,
    "registered": 11,
    "gender": "خانم",
    "instructor": "عرب زاده متین السادات",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 503,
    "code": "2301004_01",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "ثابت مستعان",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 504,
    "code": "2301004_02",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "ولیی احمد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 505,
    "code": "2301004_03",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "شیروانی محمد",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 506,
    "code": "2301004_04",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "ثابت مستعان",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 507,
    "code": "2301004_05",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "شیروانی محمد",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 508,
    "code": "2301004_06",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "ایمانی خوشخو محمدرسول",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 509,
    "code": "2301004_07",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 19,
    "gender": "خانم",
    "instructor": "جعفری سوده",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 510,
    "code": "2301004_08",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 31,
    "registered": 31,
    "gender": "خانم",
    "instructor": "عرب زاده متین السادات",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 511,
    "code": "2301004_09",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "کریمی لاسکی محمد",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 512,
    "code": "2301004_10",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "اخباراتی حمیده",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 513,
    "code": "2301004_11",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 18,
    "gender": "خانم",
    "instructor": "اخباراتی حمیده",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 514,
    "code": "2301004_12",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "حسینی سیده زینب",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 515,
    "code": "2301004_13",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "حسینی سیده زینب",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 516,
    "code": "2301004_14",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 29,
    "gender": "خانم",
    "instructor": "صداقت علی",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 517,
    "code": "2301004_15",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "چنگی آشتیانی مهری",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 518,
    "code": "2301004_16",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "چنگی آشتیانی مهری",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 519,
    "code": "2301004_17",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 31,
    "registered": 31,
    "gender": "آقا",
    "instructor": "افتخاری علی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 520,
    "code": "2301004_18",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "افتخاری علی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 521,
    "code": "2301004_23",
    "name": "اندیشه اسلامی 2 (نبوت و امامت)",
    "rawName": "انديشه اسلامي 2 (نبوت و امامت)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "عرب زاده متین السادات",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "08:00-10:00"
    },
    "cluster": "mabani",
    "prerequisites": "اندیشه اسلامی ۱",
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 522,
    "code": "2301005_01",
    "name": "اندیشه سیاسی امام خمینی (ره)",
    "rawName": "انديشه سياسي امام خميني (ره)",
    "units": 2,
    "capacity": 30,
    "registered": 4,
    "gender": "خانم",
    "instructor": "جلالی اصل هادی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 523,
    "code": "2301008_01",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 20,
    "gender": "خانم",
    "instructor": "قاسمی علی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 524,
    "code": "2301008_02",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 6,
    "gender": "آقا",
    "instructor": "قاسمی علی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 525,
    "code": "2301008_03",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 5,
    "gender": "خانم",
    "instructor": "نیکونهاد حامد",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 526,
    "code": "2301008_04",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 1,
    "gender": "آقا",
    "instructor": "نیکونهاد حامد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 527,
    "code": "2301008_05",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 2,
    "gender": "آقا",
    "instructor": "نیکونهاد حامد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 528,
    "code": "2301008_06",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 21,
    "gender": "خانم",
    "instructor": "نورایی مهدی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 529,
    "code": "2301008_07",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "آقا",
    "instructor": "نورایی مهدی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 530,
    "code": "2301008_08",
    "name": "آشنایی با قانون اساسی جمهوری اسلامی ایران",
    "rawName": "آشنايي با قانون اساسي جمهوري اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "آقا",
    "instructor": "کیاست حمیدرضا",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 531,
    "code": "2301009_04",
    "name": "آیین زندگی (اخلاق کاربردی)",
    "rawName": "آيين زندگي (اخلاق كاربردي)",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "نوروزی اقبالی محمدجواد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 532,
    "code": "2301009_05",
    "name": "آیین زندگی (اخلاق کاربردی)",
    "rawName": "آيين زندگي (اخلاق كاربردي)",
    "units": 2,
    "capacity": 30,
    "registered": 28,
    "gender": "آقا",
    "instructor": "نوروزی اقبالی محمدجواد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 533,
    "code": "2301011_01",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 5,
    "gender": "آقا",
    "instructor": "زارع خفری ایوب",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 534,
    "code": "2301011_02",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "خانم",
    "instructor": "زارع خفری ایوب",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 535,
    "code": "2301011_03",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 6,
    "gender": "آقا",
    "instructor": "زارع خفری ایوب",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 536,
    "code": "2301011_04",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 4,
    "gender": "خانم",
    "instructor": "زارع خفری ایوب",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 537,
    "code": "2301011_05",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 5,
    "gender": "آقا",
    "instructor": "میرزائی نوکابادی عباس",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 538,
    "code": "2301011_06",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 6,
    "gender": "آقا",
    "instructor": "میرزائی نوکابادی عباس",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 539,
    "code": "2301011_07",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 3,
    "gender": "آقا",
    "instructor": "میرزائی نوکابادی عباس",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 540,
    "code": "2301011_08",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 6,
    "gender": "خانم",
    "instructor": "توانا مینا",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 541,
    "code": "2301011_09",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 10,
    "gender": "خانم",
    "instructor": "توانا مینا",
    "sessions": [
      {
        "day": "شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 542,
    "code": "2301011_10",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 10,
    "gender": "خانم",
    "instructor": "توانا مینا",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 543,
    "code": "2301011_11",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 13,
    "gender": "خانم",
    "instructor": "توانا مینا",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 544,
    "code": "2301011_12",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 3,
    "gender": "آقا",
    "instructor": "زارع خفری ایوب",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 545,
    "code": "2301011_13",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 12,
    "gender": "خانم",
    "instructor": "موسوی سیدمحمدمهدی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 546,
    "code": "2301011_14",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 14,
    "gender": "خانم",
    "instructor": "موسوی سیدمحمدمهدی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 547,
    "code": "2301011_20",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 23,
    "gender": "آقا",
    "instructor": "جعفری شیاده سیدمحمدمهدی",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 548,
    "code": "2301011_21",
    "name": "تاریخ تحلیلی صدر اسلام",
    "rawName": "تاريخ تحليلي صدر اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 19,
    "gender": "خانم",
    "instructor": "جعفری شیاده سیدمحمدمهدی",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "13:00-15:00"
    },
    "cluster": "tarikh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 549,
    "code": "2301013_01",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 9,
    "gender": "خانم",
    "instructor": "خاتمی منصوره السادات",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 550,
    "code": "2301013_02",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 12,
    "gender": "خانم",
    "instructor": "خاتمی منصوره السادات",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 551,
    "code": "2301013_04",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "خانم",
    "instructor": "بشارتی زهرا",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 552,
    "code": "2301013_05",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 6,
    "gender": "آقا",
    "instructor": "رضازاده یونس",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 553,
    "code": "2301013_06",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 5,
    "gender": "آقا",
    "instructor": "رضازاده یونس",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 554,
    "code": "2301013_07",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 9,
    "gender": "خانم",
    "instructor": "عابدین نسب شیما",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 555,
    "code": "2301013_08",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 29,
    "gender": "خانم",
    "instructor": "عابدین نسب شیما",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 556,
    "code": "2301013_09",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 4,
    "gender": "خانم",
    "instructor": "عابدین نسب شیما",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 557,
    "code": "2301013_10",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 1,
    "gender": "خانم",
    "instructor": "عابدین نسب شیما",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 558,
    "code": "2301013_11",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "آقا",
    "instructor": "صاحب الامری محمدجواد",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 559,
    "code": "2301013_12",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "حسین نژاد علی اکبر",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 560,
    "code": "2301013_13",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "خانم",
    "instructor": "حسین نژاد علی اکبر",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 561,
    "code": "2301013_14",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "خانم",
    "instructor": "عزتی فاطمه زهرا",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 562,
    "code": "2301013_15",
    "name": "تفسیر موضوعی قرآن",
    "rawName": "تفسير موضوعي قرآن",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "خانم",
    "instructor": "سلیمانی محمدجواد",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 563,
    "code": "2301014_01",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 10,
    "gender": "خانم",
    "instructor": "محصص مرضیه",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 564,
    "code": "2301014_02",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 22,
    "gender": "آقا",
    "instructor": "باباپورگل‌افشانی محمدمهدی",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 565,
    "code": "2301014_03",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "باباپورگل‌افشانی محمدمهدی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 566,
    "code": "2301014_04",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 19,
    "gender": "خانم",
    "instructor": "باباپورگل‌افشانی محمدمهدی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 567,
    "code": "2301014_05",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "مختلط",
    "instructor": "قاسمی خطیر نبی اله",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 568,
    "code": "2301014_06",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 10,
    "gender": "خانم",
    "instructor": "مبلغ نرگس سادات",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 569,
    "code": "2301014_07",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "خانم",
    "instructor": "مبلغ نرگس سادات",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 570,
    "code": "2301014_08",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 16,
    "gender": "خانم",
    "instructor": "مبلغ نرگس سادات",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 571,
    "code": "2301014_09",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 4,
    "gender": "آقا",
    "instructor": "صاحب الامری محمدجواد",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 572,
    "code": "2301014_10",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "مختلط",
    "instructor": "قاسمی خطیر نبی اله",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 573,
    "code": "2301014_11",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 14,
    "gender": "خانم",
    "instructor": "خضری سیدمحمدرضا",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 574,
    "code": "2301014_12",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 11,
    "gender": "آقا",
    "instructor": "خضری سیدمحمدرضا",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 575,
    "code": "2301014_13",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "خضری سیدمحمدرضا",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 576,
    "code": "2301014_14",
    "name": "تفسیر موضوعی نهج البلاغه",
    "rawName": "تفسير موضوعي نهج البلاغه",
    "units": 2,
    "capacity": 30,
    "registered": 17,
    "gender": "آقا",
    "instructor": "قائمی خرق سیدمحسن",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "13:00-15:00"
    },
    "cluster": "manabe",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 577,
    "code": "2301016_01",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 13,
    "gender": "آقا",
    "instructor": "هاشمی علی آبادی سیداحمد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 578,
    "code": "2301016_02",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 20,
    "gender": "آقا",
    "instructor": "هاشمی علی آبادی سیداحمد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 579,
    "code": "2301016_03",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 11,
    "gender": "آقا",
    "instructor": "هاشمی علی آبادی سیداحمد",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 580,
    "code": "2301016_04",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 18,
    "gender": "آقا",
    "instructor": "عادلی قاسم",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 581,
    "code": "2301016_05",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 15,
    "gender": "آقا",
    "instructor": "عادلی قاسم",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 582,
    "code": "2301016_06",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 18,
    "gender": "آقا",
    "instructor": "عادلی قاسم",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 583,
    "code": "2301016_07",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "حسین نژاد علی اکبر",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 584,
    "code": "2301016_08",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 31,
    "registered": 31,
    "gender": "آقا",
    "instructor": "کاکوئی علی اکبر",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 585,
    "code": "2301016_09",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 5,
    "gender": "خانم",
    "instructor": "شیخ سفلی انسیه",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 586,
    "code": "2301016_10",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 10,
    "gender": "خانم",
    "instructor": "شیخ سفلی انسیه",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 587,
    "code": "2301016_11",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 7,
    "gender": "آقا",
    "instructor": "طایران امین اله",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 588,
    "code": "2301016_12",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 7,
    "gender": "آقا",
    "instructor": "طایران امین اله",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 589,
    "code": "2301016_13",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 3,
    "gender": "آقا",
    "instructor": "طایران امین اله",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 590,
    "code": "2301016_14",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "خانم",
    "instructor": "علیخانی الهه",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 591,
    "code": "2301016_15",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 22,
    "gender": "خانم",
    "instructor": "علیخانی الهه",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 592,
    "code": "2301016_16",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 12,
    "gender": "آقا",
    "instructor": "میر محمد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 593,
    "code": "2301016_17",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 13,
    "gender": "آقا",
    "instructor": "میر محمد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 594,
    "code": "2301016_18",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 17,
    "gender": "خانم",
    "instructor": "مصباحی مقدم ساعده",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 595,
    "code": "2301016_19",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 16,
    "gender": "خانم",
    "instructor": "مصباحی مقدم ساعده",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 596,
    "code": "2301016_20",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "آقا",
    "instructor": "یوسفی طاها مهدی",
    "sessions": [
      {
        "day": "شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 597,
    "code": "2301016_21",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 20,
    "gender": "خانم",
    "instructor": "شیخ سفلی انسیه",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 598,
    "code": "2301016_22",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 30,
    "registered": 23,
    "gender": "خانم",
    "instructor": "شیخ سفلی انسیه",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 599,
    "code": "2301016_23",
    "name": "دانش خانواده و جمعیت",
    "rawName": "دانش خانواده و جمعيت",
    "units": 2,
    "capacity": 31,
    "registered": 31,
    "gender": "خانم",
    "instructor": "وجدانی فاطمه",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.05",
      "time": "10:00-12:00"
    },
    "cluster": "khanevadeh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 600,
    "code": "2301017_01",
    "name": "عرفان عملی اسلام",
    "rawName": "عرفان عملي اسلام",
    "units": 2,
    "capacity": 32,
    "registered": 32,
    "gender": "خانم",
    "instructor": "شاکرنژاد احمد",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 601,
    "code": "2301017_02",
    "name": "عرفان عملی اسلام",
    "rawName": "عرفان عملي اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 19,
    "gender": "آقا",
    "instructor": "شاکرنژاد احمد",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 602,
    "code": "2301017_03",
    "name": "عرفان عملی اسلام",
    "rawName": "عرفان عملي اسلام",
    "units": 2,
    "capacity": 30,
    "registered": 30,
    "gender": "آقا",
    "instructor": "کاکوئی علی اکبر",
    "sessions": [
      {
        "day": "چهارشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 603,
    "code": "2301018_01",
    "name": "فلسفه اخلاق ( با تکیه بر مباحث تربیتی )",
    "rawName": "فلسفه اخلاق ( با تكيه بر مباحث تربيتي )",
    "units": 2,
    "capacity": 30,
    "registered": 21,
    "gender": "آقا",
    "instructor": "دهقان سیمکانی رحیم",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 604,
    "code": "2301018_02",
    "name": "فلسفه اخلاق ( با تکیه بر مباحث تربیتی )",
    "rawName": "فلسفه اخلاق ( با تكيه بر مباحث تربيتي )",
    "units": 2,
    "capacity": 31,
    "registered": 31,
    "gender": "خانم",
    "instructor": "دهقان سیمکانی رحیم",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "08:00-10:00"
    },
    "cluster": "akhlagh",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 605,
    "code": "2301020_01",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 16,
    "gender": "خانم",
    "instructor": "قاسمی علی",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 606,
    "code": "2301020_02",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 1,
    "gender": "آقا",
    "instructor": "قاسمی علی",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 607,
    "code": "2301020_03",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 3,
    "gender": "آقا",
    "instructor": "مرندی سیدمحمدرضا",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 608,
    "code": "2301020_04",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 27,
    "gender": "آقا",
    "instructor": "حاجیان مهدی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 609,
    "code": "2301020_05",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "آقا",
    "instructor": "سمنون مرتضی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "08:00-10:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 610,
    "code": "2301020_06",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 3,
    "gender": "خانم",
    "instructor": "سمنون مرتضی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 611,
    "code": "2301020_07",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "آقا",
    "instructor": "سمنون مرتضی",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 612,
    "code": "2301020_08",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 5,
    "gender": "خانم",
    "instructor": "کتابی امیرعلی",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 613,
    "code": "2301020_09",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "آقا",
    "instructor": "کتابی امیرعلی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 614,
    "code": "2301020_10",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 8,
    "gender": "خانم",
    "instructor": "کتابی امیرعلی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 615,
    "code": "2301020_11",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 1,
    "gender": "آقا",
    "instructor": "کتابی امیرعلی",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 616,
    "code": "2301020_12",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 14,
    "gender": "خانم",
    "instructor": "ربیعی کهندانی محمد",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 617,
    "code": "2301020_13",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 4,
    "gender": "آقا",
    "instructor": "ربیعی کهندانی محمد",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 618,
    "code": "2301020_14",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 0,
    "gender": "خانم",
    "instructor": "باقری قلعه سری اکرم",
    "sessions": [
      {
        "day": "شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 619,
    "code": "2301020_15",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 1,
    "gender": "خانم",
    "instructor": "باقری قلعه سری اکرم",
    "sessions": [
      {
        "day": "شنبه",
        "time": "13:00-15:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 620,
    "code": "2301020_16",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 22,
    "gender": "آقا",
    "instructor": "حاجیان مهدی",
    "sessions": [
      {
        "day": "دوشنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 621,
    "code": "2301020_17",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 17,
    "gender": "آقا",
    "instructor": "حاجیان مهدی",
    "sessions": [
      {
        "day": "سه‌شنبه",
        "time": "10:00-12:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  },
  {
    "id": 622,
    "code": "2301020_18",
    "name": "انقلاب اسلامی ایران",
    "rawName": "انقلاب اسلامي ايران",
    "units": 2,
    "capacity": 30,
    "registered": 2,
    "gender": "خانم",
    "instructor": "سمنون مرتضی",
    "sessions": [
      {
        "day": "یک‌شنبه",
        "time": "15:00-17:00"
      }
    ],
    "exam": {
      "date": "1405.11.07",
      "time": "10:00-12:00"
    },
    "cluster": "enghelab",
    "prerequisites": null,
    "corequisites": "ندارد",
    "isGeneral": true,
    "isEntry403Allowed": true,
    "priority": 4,
    "category": "general"
  }
];
