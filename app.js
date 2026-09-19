/**
 * سامانه تعاملی انتخاب واحد و زمان‌بندی هفتگی دانشکده اقتصاد
 * نسخه ویژه دانشجویان ورودی ۴۰۳ همراه با اولویت‌بندی، تابلو راهنما و تقویم ردیفی امتحانات بهمن ۱۴۰۵
 */

(function () {
  'use strict';

  // --- پیکربندی روزهای هفته برای جدول کلاسی ---
  const DAYS_ORDER = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه'];
  
  // اسلات‌های زمانی مشخص شده توسط کاربر
  const TIME_SLOTS = [
    { id: '08-10', label: '۰۸:۰۰ تا ۱۰:۰۰', start: '08:00', end: '10:00', isBreak: false },
    { id: '10-12', label: '۱۰:۰۰ تا ۱۲:۰۰', start: '10:00', end: '12:00', isBreak: false },
    { id: '12-13', label: '۱۲:۰۰ تا ۱۳:۰۰', start: '12:00', end: '13:00', isBreak: true, title: 'استراحت و ناهار' },
    { id: '13-15', label: '۱۳:۰۰ تا ۱۵:۰۰', start: '13:00', end: '15:00', isBreak: false },
    { id: '15-17', label: '۱۵:۰۰ تا ۱۷:۰۰', start: '15:00', end: '17:00', isBreak: false },
    { id: '17-19', label: '۱۷:۰۰ تا ۱۹:۰۰', start: '17:00', end: '19:00', isBreak: false }
  ];

  // تقویم رسمی و ردیفی امتحانات بهمن ۱۴۰۵ (بر اساس تقویم آپلود شده و نکات کاربر)
  const EXAM_CALENDAR_DAYS = [
    { date: '1405.11.01', dayName: 'پنج‌شنبه', title: '۱ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'پیش از آغاز امتحانات تخصصی' },
    { date: '1405.11.02', dayName: 'جمعه', title: '۲ بهمن ۱۴۰۵', isHoliday: true, isGeneral: false, note: 'تعطیل پایان هفته' },
    { date: '1405.11.03', dayName: 'شنبه', title: '۳ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'آغاز امتحانات پایان‌ترم دانشکده' },
    { date: '1405.11.04', dayName: 'یک‌شنبه', title: '۴ بهمن ۱۴۰۵', isHoliday: true, isGeneral: false, note: '🔴 تعطیل رسمی — توقف آزمون‌های دانشکده' },
    { date: '1405.11.05', dayName: 'دوشنبه', title: '۵ بهمن ۱۴۰۵', isHoliday: false, isGeneral: true, note: '🔵 امتحانات دروس عمومی دانشگاه' },
    { date: '1405.11.06', dayName: 'سه‌شنبه', title: '۶ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'روز امتحانی دانشکده' },
    { date: '1405.11.07', dayName: 'چهارشنبه', title: '۷ بهمن ۱۴۰۵', isHoliday: false, isGeneral: true, note: '🔵 امتحانات دروس عمومی دانشگاه' },
    { date: '1405.11.08', dayName: 'پنج‌شنبه', title: '۸ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'فرجه و پایان هفته' },
    { date: '1405.11.09', dayName: 'جمعه', title: '۹ بهمن ۱۴۰۵', isHoliday: true, isGeneral: false, note: 'تعطیل پایان هفته' },
    { date: '1405.11.10', dayName: 'شنبه', title: '۱۰ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'روز امتحانی دانشکده' },
    { date: '1405.11.11', dayName: 'یک‌شنبه', title: '۱۱ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'روز امتحانی دانشکده' },
    { date: '1405.11.12', dayName: 'دوشنبه', title: '۱۲ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'روز امتحانی دانشکده' },
    { date: '1405.11.13', dayName: 'سه‌شنبه', title: '۱۳ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'روز امتحانی دانشکده' },
    { date: '1405.11.14', dayName: 'چهارشنبه', title: '۱۴ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'روز امتحانی دانشکده' },
    { date: '1405.11.15', dayName: 'پنج‌شنبه', title: '۱۵ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'فرجه مطالعه' },
    { date: '1405.11.16', dayName: 'جمعه', title: '۱۶ بهمن ۱۴۰۵', isHoliday: true, isGeneral: false, note: 'تعطیل پایان هفته' },
    { date: '1405.11.17', dayName: 'شنبه', title: '۱۷ بهمن ۱۴۰۵', isHoliday: false, isGeneral: false, note: 'پایان امتحانات دانشکده اقتصاد' }
  ];

  let economicsCourses = window.COURSES_DATA || [];
  let generalCourses = window.GENERAL_COURSES_DATA || [];
  let allCourses = [...economicsCourses, ...generalCourses];
  let selectedCourses = [];
  let activeInspectorCourse = null;
  let currentSearch = '';
  let activeFilter = 'all'; // 'all', 'term5', 'elective', 'other', 'selected', 'general'
  let currentViewMode = 'daily'; // 'daily' یا 'matrix'
  let examCalendarFilter = 'myExams'; // 'myExams' یا 'all'
  let isHonorStudent = true; // ۹۰ درصد دانشجویان معدل الف هستند (سقف ۲۴ واحد)
  let activeMobileTab = 'catalog'; // 'catalog', 'schedule', 'exams', 'guide'
  let activeMobileDay = 'all'; // 'all' یا 'شنبه', 'یک‌شنبه', ...
  let deviceMode = 'auto'; // 'auto', 'mobile', 'desktop'

  // متغیرهای وضعیت دروس عمومی و معارف
  let studentGender = localStorage.getItem('student_gender') || 'خانم';
  let passedGeneralCourses = []; // شناسه‌های دروس گذرانده شده مانند 'andisheh1'
  let activeGeneralClusterFilter = 'all'; // فیلتر خوشه انتخابی: 'all', 'mabani', 'akhlagh', ...

  // --- توابع کمکی تبدیل اعداد و رشته‌ها ---
  function toPersianDigits(num) {
    if (num === null || num === undefined) return '';
    const pDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/\d/g, d => pDigits[d]);
  }

  function normalizeName(name) {
    return (name || '').replace(/\s+/g, ' ').trim();
  }

  // اضافه کردن ایموجی تاج 👑 برای استاد نگین تاجی و استاد اکبری
  function formatInstructor(name) {
    if (!name) return 'نامشخص';
    if (name.includes('نگين تاجي') || name.includes('نگین تاجی') || name.includes('اكبري') || name.includes('اکبری')) {
      return `${name} 👑`;
    }
    return name;
  }

  // ذخیره‌سازی و بازیابی وضعیت
  function saveState() {
    try {
      const ids = selectedCourses.map(c => c.id);
      localStorage.setItem('selected_courses_v2', JSON.stringify(ids));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem('selected_courses_v2');
      if (raw) {
        const ids = JSON.parse(raw);
        selectedCourses = allCourses.filter(c => ids.includes(c.id) && c.isEntry403Allowed);
      }
      const savedHonor = localStorage.getItem('is_honor_student');
      if (savedHonor !== null) {
        isHonorStudent = savedHonor === 'true';
      }
      const savedGender = localStorage.getItem('student_gender');
      if (savedGender) {
        studentGender = savedGender;
      }
      const rawPassed = localStorage.getItem('passed_general_courses');
      if (rawPassed) {
        passedGeneralCourses = JSON.parse(rawPassed);
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
      selectedCourses = [];
    }
  }

  // --- سیستم نمایش پیام موقت (Toast) ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let label = '[اطلاعیه]';
    if (type === 'warning') label = '[هشدار]';
    if (type === 'error') label = '[خطای سامانه]';
    if (type === 'success') label = '[تأیید]';

    toast.innerHTML = `<span class="toast-label">${label}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // --- بررسی همپوشانی بازه‌های زمانی ---
  function timeToMinutes(tStr) {
    const parts = (tStr || '').split(':').map(Number);
    if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return 0;
    return parts[0] * 60 + parts[1];
  }

  function timesOverlap(startA, endA, startB, endB) {
    const sA = timeToMinutes(startA);
    const eA = timeToMinutes(endA);
    const sB = timeToMinutes(startB);
    const eB = timeToMinutes(endB);
    return Math.max(sA, sB) < Math.min(eA, eB);
  }

  function sessionMatchesSlot(sessionTime, slot) {
    if (!sessionTime) return false;
    const [sStart, sEnd] = sessionTime.split('-');
    if (!sStart || !sEnd) return false;
    return timesOverlap(sStart, sEnd, slot.start, slot.end);
  }

  // --- تحلیل تداخل‌های امتحانی و کلاسی ---
  function analyzeConflicts() {
    const examConflicts = [];
    const classConflicts = [];

    // ۱. بررسی تداخل امتحانات
    const examsByDate = {};
    selectedCourses.forEach(c => {
      if (c.exam && c.exam.date) {
        const d = c.exam.date;
        if (!examsByDate[d]) examsByDate[d] = [];
        examsByDate[d].push(c);
      }
    });

    Object.keys(examsByDate).forEach(date => {
      const list = examsByDate[date];
      if (list.length > 1) {
        let exactSameHour = false;
        const sameHourPairs = [];

        for (let i = 0; i < list.length; i++) {
          for (let j = i + 1; j < list.length; j++) {
            const timeA = list[i].exam.time;
            const timeB = list[j].exam.time;
            if (timeA && timeB) {
              const [sA, eA] = timeA.split('-');
              const [sB, eB] = timeB.split('-');
              if (timesOverlap(sA, eA, sB, eB)) {
                exactSameHour = true;
                sameHourPairs.push([list[i], list[j]]);
              }
            }
          }
        }

        if (exactSameHour) {
          sameHourPairs.forEach(([cA, cB]) => {
            examConflicts.push({
              level: 'danger',
              date: date,
              courses: [cA, cB],
              message: `حضور همزمان در دو سالن امتحانی؟ مگه تقسیم میتوز کنی! («${cA.name}» و «${cB.name}» در ساعت ${toPersianDigits(cA.exam.time)} تاریخ ${toPersianDigits(date)})`
            });
          });
        } else {
          examConflicts.push({
            level: 'warning',
            date: date,
            courses: list,
            message: `خداحافظی رسمی با خواب؛ رسماً رد دادی! دو امتحان در تاریخ ${toPersianDigits(date)} (${list.map(c => c.name).join(' و ')}).`
          });
        }
      }
    });

    // ۲. بررسی تداخل کلاس‌ها در طول هفته
    for (let i = 0; i < selectedCourses.length; i++) {
      for (let j = i + 1; j < selectedCourses.length; j++) {
        const cA = selectedCourses[i];
        const cB = selectedCourses[j];

        cA.sessions.forEach(sA => {
          cB.sessions.forEach(sB => {
            if (sA.day === sB.day) {
              const [startA, endA] = (sA.time || '').split('-');
              const [startB, endB] = (sB.time || '').split('-');
              if (timesOverlap(startA, endA, startB, endB)) {
                classConflicts.push({
                  day: sA.day,
                  timeA: sA.time,
                  timeB: sB.time,
                  courses: [cA, cB]
                });
              }
            }
          });
        });
      }
    }

    return { examConflicts, classConflicts };
  }

  // --- توابع و قواعد اعتبارسنجی خوشه‌های معارف و دروس عمومی ---
  function getClusterTitle(clusterId) {
    const config = (window.GENERAL_CLUSTERS_CONFIG || []).find(c => c.id === clusterId);
    return config ? config.title : clusterId;
  }

  function getClusterMaxUnits(clusterId) {
    const config = (window.GENERAL_CLUSTERS_CONFIG || []).find(c => c.id === clusterId);
    return config ? config.maxUnits : 2;
  }

  function getPassedCoursesInCluster(clusterId) {
    const config = (window.GENERAL_CLUSTERS_CONFIG || []).find(c => c.id === clusterId);
    if (!config) return [];
    return (config.courses || []).filter(c => passedGeneralCourses.includes(c.id));
  }

  function isClusterLocked(clusterId) {
    const config = (window.GENERAL_CLUSTERS_CONFIG || []).find(c => c.id === clusterId);
    if (!config) return false;
    const passed = getPassedCoursesInCluster(clusterId);
    return passed.length >= config.requiredCoursesCount;
  }

  function isCoursePrereqMet(course) {
    if (course.name.includes('اندیشه اسلامی 2') || course.name.includes('اندیشه اسلامی ۲')) {
      return passedGeneralCourses.includes('andisheh1');
    }
    return true;
  }

  function canAddGeneralCourseInCurrentTerm(course) {
    const currentGenerals = selectedCourses.filter(c => c.isGeneral);

    // قاعده درس دانش خانواده و جمعیت (مستقل از سقف دروس الهیات)
    if (course.cluster === 'khanevadeh') {
      if (passedGeneralCourses.includes('danesh_khanevadeh')) {
        return {
          allowed: false,
          reason: 'درس دانش خانواده و جمعیت را قبلاً در ترم‌های گذشته پاس کرده‌اید و مجاز به اخذ مجدد نیستید.'
        };
      }
      if (currentGenerals.some(c => c.cluster === 'khanevadeh')) {
        return {
          allowed: false,
          reason: 'درس دانش خانواده و جمعیت هم‌اکنون در برنامه انتخابی این ترم شما موجود است.'
        };
      }
      if (currentGenerals.length >= 2) {
        return {
          allowed: false,
          reason: 'سقف مجاز اخذ دروس عمومی در این ترم (حداکثر ۲ درس با احتساب دانش خانواده) تکمیل شده است.'
        };
      }
      return { allowed: true };
    }

    // قاعده دروس معارف اسلامی (الهیات) — سقف حداکثر ۱ درس در ترم
    const currentTheology = currentGenerals.find(c => c.cluster !== 'khanevadeh');
    if (currentTheology) {
      return {
        allowed: false,
        reason: `طبق مقررات دانشگاه، در هر ترم مجاز به اخذ بیش از ۱ درس معارف نیستید (درس «${currentTheology.name}» در برنامه شماست). تنها استثنا اخذ درس دانش خانواده است.`
      };
    }

    if (currentGenerals.length >= 2) {
      return {
        allowed: false,
        reason: 'سقف مجاز اخذ دروس عمومی در این ترم پر شده است.'
      };
    }

    return { allowed: true };
  }

  // سیستم پیشنهاد هوشمند بر اساس ساعات خالی برنامه هفتگی
  function getSmartGeneralRecommendations() {
    if (!window.GENERAL_COURSES_DATA) return [];
    
    // زمان‌های اشغال‌شده توسط دروس فعلی در جدول
    const busySlotKeys = new Set();
    selectedCourses.forEach(c => {
      (c.sessions || []).forEach(s => {
        busySlotKeys.add(`${s.day}_${s.time}`);
      });
    });

    const candidates = window.GENERAL_COURSES_DATA.filter(course => {
      // انطباق جنسیت
      if (studentGender && course.gender !== 'مختلط' && course.gender !== studentGender) return false;

      // گرایش قفل نباشد
      if (isClusterLocked(course.cluster)) return false;

      // پیش‌نیاز رعایت شده باشد
      if (!isCoursePrereqMet(course)) return false;

      // سقف عمومی ترم جاری اجازه دهد
      if (!canAddGeneralCourseInCurrentTerm(course).allowed) return false;

      // قبلاً برداشته نشده باشد
      if (selectedCourses.some(sc => sc.id === course.id)) return false;

      // دو استاد برای یک درس نباشد
      const baseCode = (course.code || '').split('_')[0];
      const normName = normalizeName(course.name);
      if (selectedCourses.some(sc => (sc.code || '').split('_')[0] === baseCode || normalizeName(sc.name) === normName)) return false;

      // بدون تداخل امتحانی
      if (course.exam && course.exam.date && course.exam.time) {
        const [sNew, eNew] = course.exam.time.split('-');
        const hasExamConflict = selectedCourses.some(c => {
          if (c.exam && c.exam.date === course.exam.date && c.exam.time) {
            const [sOld, eOld] = c.exam.time.split('-');
            return timesOverlap(sNew, eNew, sOld, eOld);
          }
          return false;
        });
        if (hasExamConflict) return false;
      }

      // بررسی اینکه آیا جلسات کلاس در ساعات خالی می‌نشیند یا تداخل دارد
      if (!course.sessions || course.sessions.length === 0) return false;
      const fitsInEmptySlots = course.sessions.every(s => {
        if (busySlotKeys.has(`${s.day}_${s.time}`)) return false;
        return !selectedCourses.some(sc => {
          return (sc.sessions || []).some(sOld => {
            if (sOld.day === s.day) {
              const [s1, e1] = (s.time || '').split('-');
              const [s2, e2] = (sOld.time || '').split('-');
              return timesOverlap(s1, e1, s2, e2);
            }
            return false;
          });
        });
      });

      return fitsInEmptySlots;
    });

    // اولویت‌دهی هوشمند بر اساس ظرفیت و تعداد ثبت‌نامی:
    // ۱. ابتدا دروسی که هنوز جای خالی دارند (رو به اتمام‌ها در صدر برای شکار فوری)
    // ۲. سپس دروسی که ظرفیتشان ۳۰/۳۰ پر شده (امید به انصرافی)
    candidates.sort((a, b) => {
      const isFullA = (a.capacity > 0 && (a.registered || 0) >= a.capacity);
      const isFullB = (b.capacity > 0 && (b.registered || 0) >= b.capacity);
      if (isFullA !== isFullB) return isFullA ? 1 : -1;
      return (b.registered || 0) - (a.registered || 0);
    });

    return candidates;
  }

  // --- اعمال قواعد ورودی ۴۰۳ و انتخاب واحد ---
  function canAddCourse(course) {
    // بررسی قواعد اختصاصی دروس عمومی و معارف
    if (course.isGeneral) {
      if (studentGender && course.gender !== 'مختلط' && course.gender !== studentGender) {
        return {
          allowed: false,
          reason: `این گروه درسی ویژه دانشجویان ${course.gender} است و با جنسیت شما (${studentGender}) مغایرت دارد.`
        };
      }

      if (isClusterLocked(course.cluster)) {
        const clusterTitle = getClusterTitle(course.cluster);
        return {
          allowed: false,
          reason: `سقف واحدهای مصوب گرایش «${clusterTitle}» را قبلاً در ترم‌های گذشته پاس کرده‌اید و مجاز به اخذ مجدد از این گرایش نیستید.`
        };
      }

      if (!isCoursePrereqMet(course)) {
        return {
          allowed: false,
          reason: 'طبق چارت رسمی معارف، برای اخذ «اندیشه اسلامی ۲» باید قبلاً درس «اندیشه اسلامی ۱» را پاس کرده باشید.'
        };
      }

      const genTermCheck = canAddGeneralCourseInCurrentTerm(course);
      if (!genTermCheck.allowed) {
        return genTermCheck;
      }
    }

    // قاعده ورودی ۴۰۳ برای دروس تخصصی
    if (!course.isGeneral && !course.isEntry403Allowed) {
      return {
        allowed: false,
        reason: 'دست نزن؛ این درس ارث پدری ترم‌بالایی‌های فسیل‌شده‌ست و برای ورودی ۴۰۳ مجاز نیست.'
      };
    }

    // آیا قبلاً اخذ شده؟
    if (selectedCourses.some(c => c.id === course.id)) {
      return { allowed: false, reason: 'این درس هم‌اکنون در برنامه شما موجود است.' };
    }

    // قاعده انحصار استاد: دانشجو نمیتواند دو درس هم‌نام را با دو استاد بردارد
    const courseNameClean = normalizeName(course.name);
    const baseCode = (course.code || '').split('_')[0];
    const existingSameName = selectedCourses.find(c => {
      const cBase = (c.code || '').split('_')[0];
      return (baseCode && cBase === baseCode) || normalizeName(c.name) === courseNameClean;
    });
    if (existingSameName) {
      return {
        allowed: false,
        conflictType: 'SAME_COURSE_DIFFERENT_PROF',
        reason: `دو تا استاد برای یه درس؟ مگه مسابقه شانس گلستانه؟ درس «${course.name}» قبلاً با استاد «${formatInstructor(existingSameName.instructor)}» برداشته شده و طبق قوانین آموزشی امکان اخذ همزمان با دو استاد وجود ندارد.`
      };
    }

    // قاعده تداخل قطعی ساعت امتحان (منع کامل اخذ همزمان)
    if (course.exam && course.exam.date && course.exam.time) {
      const [sNew, eNew] = course.exam.time.split('-');
      const examConflictCourse = selectedCourses.find(c => {
        if (c.exam && c.exam.date === course.exam.date && c.exam.time) {
          const [sOld, eOld] = c.exam.time.split('-');
          return timesOverlap(sNew, eNew, sOld, eOld);
        }
        return false;
      });
      if (examConflictCourse) {
        return {
          allowed: false,
          conflictType: 'EXAM_TIME_CONFLICT',
          reason: `حضور همزمان در دو سالن امتحانی؟ مگه تقسیم میتوز کنی! این درس تداخل هم‌زمان ساعت امتحان با درس «${examConflictCourse.name}» داره و سامانه اجازه اخذ هم‌زمان نمیده.`
        };
      }
    }

    // بررسی سقف مجاز واحد (۲۰ واحد عادی یا ۲۴ واحد آزاد)
    const maxUnits = isHonorStudent ? 24 : 20;
    const currentTotal = selectedCourses.reduce((sum, c) => sum + (c.units || 0), 0);
    if (currentTotal + (course.units || 0) > maxUnits) {
      return {
        allowed: false,
        reason: `از سقف مجاز (${toPersianDigits(maxUnits)} واحد) زدی بالا! آروم بگیر دانشمند، مغزت تا دی‌ماه هم دووم نمیاره چه برسه بهمن؛ آموزش هم اجازه چنین خودکشی تحصیلی‌ای رو نمیده.`
      };
    }

    return { allowed: true };
  }

  function addCourse(course, silent = false) {
    const check = canAddCourse(course);
    if (!check.allowed) {
      if (!silent) showToast(check.reason, 'warning');
      return false;
    }

    // بررسی تداخل ساعت کلاس با دروس انتخابی فعلی
    let classConflictCourse = null;
    let conflictDay = '';
    let conflictTime = '';
    if (course.sessions && course.sessions.length > 0) {
      for (const sNew of course.sessions) {
        const [sStart, sEnd] = (sNew.time || '').split('-');
        for (const existing of selectedCourses) {
          for (const sOld of (existing.sessions || [])) {
            if (sOld.day === sNew.day) {
              const [oStart, oEnd] = (sOld.time || '').split('-');
              if (timesOverlap(sStart, sEnd, oStart, oEnd)) {
                classConflictCourse = existing;
                conflictDay = sNew.day;
                conflictTime = sNew.time;
                break;
              }
            }
          }
          if (classConflictCourse) break;
        }
        if (classConflictCourse) break;
      }
    }

    selectedCourses.push(course);
    saveState();
    updateUI();

    if (!silent) {
      if (classConflictCourse) {
        showToast(
          `خطای جدی تداخل کلاسی: درس «${course.name}» با درس «${classConflictCourse.name}» در روز ${conflictDay} ساعت ${toPersianDigits(conflictTime)} تداخل داره و قانوناً نمی‌تونی جفتش رو برداری! ولی به برنامه اضافه شد تا خودت تنظیم کنی.`,
          'danger'
        );
      } else if (course.isGeneral && course.capacity > 0 && (course.registered || 0) >= course.capacity) {
        showToast(`درس «${course.name}» با ظرفیت تکمیل (${toPersianDigits(course.registered)} از ${toPersianDigits(course.capacity)} نفر) اضافه شد. امیدوار باش انصرافی بده برداری!`, 'warning');
      } else {
        showToast(`درس «${course.name}» اضافه شد. به جمع بدهکاران شب امتحان خوش آمدید.`, 'success');
      }
    }
    return true;
  }

  function removeCourse(courseId) {
    const idx = selectedCourses.findIndex(c => c.id === courseId);
    if (idx !== -1) {
      const removed = selectedCourses.splice(idx, 1)[0];
      saveState();
      updateUI();
      showToast(`درس «${removed.name}» حذف شد. یک فاجعه کمتر برای شب امتحان.`, 'info');
    }
  }

  // --- چینش خودکار دروس ترم پنجم (پیشنهادی چارت ۴۰۳) ---
  function autoPickTerm5() {
    // کدهای ۵ درس تخصصی ترم ۵:
    // پول و بانکداری: 1701012
    // آشنایی با اقتصاد ایران: 1701092
    // اقتصاد بخش عمومی 1: 1701008
    // اقتصاد کشاورزی: 1701158
    // تجارت بین الملل: 1701013
    const term5TargetCodes = ['1701012', '1701092', '1701008', '1701158', '1701013'];

    let addedCount = 0;
    term5TargetCodes.forEach(code => {
      // پیدا کردن گروه‌های این درس که مجاز برای ۴۰۳ هستند
      const availableSections = allCourses.filter(c => c.code.startsWith(code) && c.isEntry403Allowed);
      
      // آیا درسی با این نام قبلاً انتخاب شده؟
      const alreadyPicked = selectedCourses.some(c => c.code.startsWith(code));
      if (!alreadyPicked && availableSections.length > 0) {
        // انتخاب گروه اول به عنوان پیش‌فرض معتبر
        if (addCourse(availableSections[0], true)) {
          addedCount++;
        }
      }
    });

    if (addedCount > 0) {
      updateUI();
      showToast(`${toPersianDigits(addedCount)} درس چارت ترم ۵ اخذ شد. از الان تسلیت صمیمانه ما رو برای شب‌های امتحان بهمن پذیرا باشید.`, 'success');
    } else {
      showToast('دروس چارت ترم ۵ از قبل توی برنامه‌ت هست؛ دنبال معجزه جدیدی می‌گردی؟', 'info');
    }
  }

  // --- تنظیم هوشمند موقعیت ویجت شناور هنگام باز/بست پنل مشخصات درس ---
  function adjustFloatingWidgetForInspector(open) {
    const container = document.getElementById('floatingSelectedContainer');
    const inspectorEl = document.getElementById('bottomInspector');
    if (!container) return;

    if (open) {
      document.body.classList.add('inspector-open');
      const inspectorHeight = (inspectorEl && inspectorEl.offsetHeight > 0) ? inspectorEl.offsetHeight : 85;
      const rect = container.getBoundingClientRect();
      const overlapThreshold = window.innerHeight - inspectorHeight - 15;

      // اگر ویجت در ناحیه پایینی صفحه (جایی که با اینسپکتور یا دکمه ضربدر تداخل دارد) قرار گرفته:
      if (rect.bottom > overlapThreshold) {
        const liftDistance = Math.round(rect.bottom - overlapThreshold + 12);
        container.style.transition = 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease';
        container.style.transform = `translateY(-${liftDistance}px)`;
        container.dataset.inspectorLifted = 'true';
      }
    } else {
      document.body.classList.remove('inspector-open');
      if (container.dataset.inspectorLifted === 'true') {
        container.style.transition = 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease';
        container.style.transform = '';
        delete container.dataset.inspectorLifted;
      }
    }
  }

  // --- باز و بسته کردن پنل مشخصات پایین صفحه (Inspector) ---
  function openInspector(course) {
    activeInspectorCourse = course;
    renderInspector();
    const inspectorEl = document.getElementById('bottomInspector');
    if (inspectorEl) {
      inspectorEl.classList.add('active');
    }
    adjustFloatingWidgetForInspector(true);
  }

  function closeInspector() {
    const inspectorEl = document.getElementById('bottomInspector');
    if (inspectorEl) {
      inspectorEl.classList.remove('active');
    }
    adjustFloatingWidgetForInspector(false);
  }

  // --- رندر پنل مشخصات کامل درس در پایین صفحه ---
  // --- رندر پنل مشخصات کامل درس در پایین صفحه ---
  function renderInspector() {
    if (!activeInspectorCourse) return;
    const c = activeInspectorCourse;
    const isSelected = selectedCourses.some(item => item.id === c.id);

    document.getElementById('inspTitle').textContent = c.name;
    document.getElementById('inspCode').textContent = `کد گروه: ${toPersianDigits(c.code)}`;
    document.getElementById('inspInstructor').textContent = formatInstructor(c.instructor);
    
    let unitsText = `${toPersianDigits(c.units)} واحد (ظرفیت: ${toPersianDigits(c.capacity)})`;
    if (c.isGeneral) {
      const isFull = c.capacity > 0 && (c.registered || 0) >= c.capacity;
      unitsText = `${toPersianDigits(c.units)} واحد (ثبت‌نامی: ${toPersianDigits(c.registered || 0)} از ${toPersianDigits(c.capacity)} نفر ${isFull ? '🔴 ظرفیت تکمیل' : ''}) [گرایش: ${getClusterTitle(c.cluster)} - ${c.gender === 'خانم' ? 'ویژه خواهران' : (c.gender === 'آقا' ? 'ویژه برادران' : 'مختلط')}]`;
    }
    document.getElementById('inspUnits').textContent = unitsText;

    const sessionsStr = (c.sessions || []).map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' | ');
    document.getElementById('inspSessions').textContent = sessionsStr || 'ثبت نشده';

    let examStr = 'نامشخص';
    if (c.exam && c.exam.date) {
      examStr = `${toPersianDigits(c.exam.date)} (ساعت ${toPersianDigits(c.exam.time)})`;
    }
    document.getElementById('inspExam').textContent = examStr;

    let prereqStr = c.prerequisites;
    if (c.isGeneral && (c.name.includes('اندیشه اسلامی 2') || c.name.includes('اندیشه اسلامی ۲'))) {
      prereqStr = 'اندیشه اسلامی ۱ (پاس‌کردن الزامی است)';
    }
    document.getElementById('inspPrereq').textContent = prereqStr || 'ندارد (عجیبه که سیستم چوب لای چرختون نذاشته)';
    document.getElementById('inspCoreq').textContent = c.corequisites || 'ندارد';

    const actionBtn = document.getElementById('inspActionBtn');
    const canAddCheck = canAddCourse(c);

    if (c.isGeneral && !isSelected && !canAddCheck.allowed) {
      actionBtn.textContent = canAddCheck.reason || 'غیرقابل اخذ طبق چارت معارف';
      actionBtn.className = 'btn btn-outline';
      actionBtn.style.color = 'var(--danger-text)';
      actionBtn.style.borderColor = 'var(--danger-border)';
      actionBtn.disabled = true;
      actionBtn.onclick = null;
    } else if (!c.isEntry403Allowed) {
      actionBtn.textContent = 'دست نزن؛ این درس ارث پدری ترم‌بالایی‌های فسیل‌شده‌ست';
      actionBtn.className = 'btn btn-outline';
      actionBtn.style.color = '';
      actionBtn.style.borderColor = '';
      actionBtn.disabled = true;
      actionBtn.onclick = null;
    } else if (isSelected) {
      actionBtn.textContent = 'حذف از برنامه';
      actionBtn.className = 'btn btn-outline';
      actionBtn.style.color = 'var(--danger-text)';
      actionBtn.style.borderColor = 'var(--danger-border)';
      actionBtn.disabled = false;
      actionBtn.onclick = () => {
        removeCourse(c.id);
        renderInspector();
      };
    } else {
      const isFull = c.isGeneral && c.capacity > 0 && (c.registered || 0) >= c.capacity;
      actionBtn.textContent = isFull ? 'افزودن به برنامه (امید به انصرافی) +' : 'افزودن به برنامه +';
      actionBtn.className = isFull ? 'btn btn-outline full-capacity-add' : 'btn btn-primary';
      actionBtn.style.color = isFull ? '#f87171' : '#fff';
      actionBtn.style.borderColor = isFull ? '#ef4444' : 'transparent';
      actionBtn.disabled = false;
      actionBtn.onclick = () => {
        if (addCourse(c)) {
          renderInspector();
        }
      };
    }
  }

  function normalizeSearch(str) {
    return (str || '')
      .replace(/ي/g, 'ی')
      .replace(/ك/g, 'ک')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  // --- رندر اختصاصی بخش دروس عمومی و معارف اسلامی ---
  function renderGeneralCatalog(listContainer) {
    listContainer.innerHTML = '';

    // ۱. پنل بالای بخش عمومی (تغییر جنسیت، دکمه کارنامه، وضعیت سقف ترم)
    const controlPanel = document.createElement('div');
    controlPanel.className = 'general-control-panel';

    const currentGenerals = selectedCourses.filter(c => c.isGeneral);
    const passedCount = passedGeneralCourses.length;
    const currentTheology = currentGenerals.filter(c => c.cluster !== 'khanevadeh');
    const currentKhanevadeh = currentGenerals.filter(c => c.cluster === 'khanevadeh');

    let statusHtml = '';
    if (currentTheology.length >= 1 && currentKhanevadeh.length >= 1) {
      statusHtml = '<span class="general-status-pill highlight">🚫 سقف مجاز ۲ درس عمومی این ترم تکمیل است (۱ معارف + ۱ خانواده).</span>';
    } else if (currentTheology.length >= 1) {
      statusHtml = '<span class="general-status-pill highlight">⚠️ سقف درس معارف این ترم پر است؛ تنها مجاز به افزودن درس «دانش خانواده» هستید.</span>';
    } else if (currentKhanevadeh.length >= 1) {
      statusHtml = '<span class="general-status-pill">💡 درس دانش خانواده انتخاب شده؛ می‌توانید ۱ درس معارف اسلامی نیز اخذ کنید.</span>';
    } else {
      statusHtml = '<span class="general-status-pill">📌 مجاز به اخذ ۱ درس معارف (+ در صورت نیاز درس دانش خانواده) در این ترم هستید.</span>';
    }

    controlPanel.innerHTML = `
      <div class="general-panel-top">
        <div class="general-gender-toggle-group">
          <button type="button" class="general-gender-btn ${studentGender === 'خانم' ? 'active' : ''}" data-gender="خانم">
            <span>👩‍🎓 خواهران (خانم)</span>
          </button>
          <button type="button" class="general-gender-btn ${studentGender === 'آقا' ? 'active' : ''}" data-gender="آقا">
            <span>👨‍🎓 برادران (آقا)</span>
          </button>
        </div>
        <button type="button" class="btn-open-passed-modal" id="btnOpenPassedModal">
          <span>📋 کارنامه معارف (${toPersianDigits(passedCount * 2)} واحد پاس‌شده)</span>
        </button>
      </div>
      <div class="general-status-badges">
        <span class="general-status-pill">
          🏛️ عمومی‌های این ترم: <strong>${toPersianDigits(currentGenerals.length)} از حداکثر ۲ درس</strong>
        </span>
        ${statusHtml}
      </div>
    `;

    // اتصال رویداد دکمه‌های جنسیت در پنل کاتالوگ
    const genderBtns = controlPanel.querySelectorAll('.general-gender-btn');
    genderBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const g = btn.getAttribute('data-gender');
        if (g && g !== studentGender) {
          studentGender = g;
          localStorage.setItem('student_gender', g);
          renderCatalog();
          showToast(`فهرست دروس عمومی بر اساس گروه‌های ویژه دانشجویان ${g === 'خانم' ? 'خواهر' : 'برادر'} فیلتر شد.`, 'info');
        }
      });
    });

    const openPassedBtn = controlPanel.querySelector('#btnOpenPassedModal');
    if (openPassedBtn) {
      openPassedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openGeneralPassedModal();
      });
    }

    listContainer.appendChild(controlPanel);

    // بنر راهنمای استراتژی شکار گلستان
    const hunterBox = document.createElement('div');
    hunterBox.className = 'general-hunter-strategy-box';
    hunterBox.innerHTML = `
      <span class="hunter-icon">🎯</span>
      <div>
        <strong>استراتژی هوشمند شکار گلستان:</strong>
        دروس عمومی بر اساس <strong>بیشترین تعداد ثبت‌نامی ترم‌بالایی‌ها</strong> مرتب شده‌اند. گروه‌هایی که با برچسب <strong>⚡ شکار فوری</strong> مشخص شده‌اند ظرفیتشان رو به اتمام است؛ این موارد را در ثانیه‌های اول انتخاب واحد بردارید. دروسی که با <strong>🔴 ظرفیت تکمیل</strong> مشخص شده‌اند توسط ترم‌بالایی‌ها پر شده‌اند اما با دکمه <strong>«امید به انصرافی»</strong> امکان قرار دادن در لیست را دارید!
      </div>
    `;
    listContainer.appendChild(hunterBox);

    // ۲. باکس پیشنهادهای هوشمند متناسب با جاخالی‌های هفتگی دانشجو
    const recs = getSmartGeneralRecommendations();
    if (recs.length > 0 && currentGenerals.length < 2 && !(currentTheology.length >= 1 && passedGeneralCourses.includes('danesh_khanevadeh'))) {
      const recBox = document.createElement('div');
      recBox.className = 'general-recommendations-box';

      // نمایش حداکثر ۶ گزینه پیشنهادی متمایز
      const displayRecs = [];
      const seenCourses = new Set();
      for (const r of recs) {
        const key = `${r.name}_${(r.sessions || []).map(s => s.day + s.time).join('_')}`;
        if (!seenCourses.has(key)) {
          seenCourses.add(key);
          displayRecs.push(r);
        }
        if (displayRecs.length >= 6) break;
      }

      recBox.innerHTML = `
        <div class="general-rec-head">
          <span class="general-rec-title">
            <span>✨ پیشنهاد هوشمند سامانه</span>
          </span>
          <span class="general-rec-badge">${toPersianDigits(displayRecs.length)} گزینه بدون تداخل</span>
        </div>
        <p style="font-size: 0.74rem; color: var(--text-secondary); margin-bottom: 0.65rem;">
          این دروس عمومی دقیقاً در ساعات خالی جدول کلاسی شما می‌نشینند و بدون تداخل امتحانی با دروس انتخابی هستند:
        </p>
        <div class="general-rec-cards-scroll">
          ${displayRecs.map(rc => {
            const sessStr = (rc.sessions || []).map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' | ');
            const examStr = rc.exam && rc.exam.date ? `${toPersianDigits(rc.exam.date)} (${toPersianDigits(rc.exam.time)})` : 'نامشخص';
            
            const cap = rc.capacity || 0;
            const reg = rc.registered || 0;
            const isFull = cap > 0 && reg >= cap;
            const remaining = Math.max(0, cap - reg);
            const isUrgent = !isFull && cap > 0 && (reg >= 20 || remaining <= 7);

            let capBadge = `<span class="badge" style="font-size: 0.65rem; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-secondary);">👥 ${toPersianDigits(reg)}/${toPersianDigits(cap)}</span>`;
            if (isFull) {
              capBadge = `<span class="badge danger-tag" style="font-size: 0.65rem; background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.35);">🔴 تکمیل ظرفیت</span>`;
            } else if (isUrgent) {
              capBadge = `<span class="badge warning-tag" style="font-size: 0.65rem; background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.35);">⚡ شکار (${toPersianDigits(remaining)} صندلی)</span>`;
            }

            let btnHtml = `
              <button type="button" class="btn btn-primary btn-sm btn-rec-add" data-id="${rc.id}" style="font-size: 0.76rem; padding: 0.25rem 0.65rem;">
                + افزودن به برنامه
              </button>
            `;
            if (isFull) {
              btnHtml = `
                <button type="button" class="btn btn-sm btn-rec-add full-capacity-add" data-id="${rc.id}" style="font-size: 0.73rem; padding: 0.25rem 0.55rem;" title="امیدوار باش انصرافی بده برداری">
                  + امید به انصرافی
                </button>
              `;
            } else if (isUrgent) {
              btnHtml = `
                <button type="button" class="btn btn-sm btn-rec-add urgent-hunt-add" data-id="${rc.id}" style="font-size: 0.75rem; padding: 0.25rem 0.65rem;" title="شکار سریع در گلستان">
                  ⚡ شکار فوری
                </button>
              `;
            }

            return `
              <div class="rec-course-card">
                <div>
                  <div class="rec-card-top">
                    <span class="rec-card-name">${rc.name}</span>
                    <span class="badge general-cluster-badge" style="font-size: 0.65rem;">${getClusterTitle(rc.cluster)}</span>
                  </div>
                  <div class="rec-card-meta">
                    <div>👨‍🏫 استاد: <strong>${formatInstructor(rc.instructor)}</strong></div>
                    <div>📝 آزمون: ${examStr}</div>
                    <div style="margin-top: 0.25rem;">${capBadge}</div>
                  </div>
                  <div class="rec-card-fit-slot">
                    <span>🕒 جاخالی مناسب: ${sessStr}</span>
                  </div>
                </div>
                <div style="margin-top: 0.4rem; display: flex; justify-content: flex-end;">
                  ${btnHtml}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      recBox.querySelectorAll('.btn-rec-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const cid = parseInt(btn.getAttribute('data-id'), 10);
          const found = window.GENERAL_COURSES_DATA.find(c => c.id === cid);
          if (found) {
            addCourse(found);
          }
        });
      });

      listContainer.appendChild(recBox);
    }

    // ۳. نوارهای فیلتر گرایش‌های معارف (Cluster Filter Pills)
    const clusterRow = document.createElement('div');
    clusterRow.className = 'general-cluster-filter-row';

    const clustersConfig = window.GENERAL_CLUSTERS_CONFIG || [];
    const allPill = document.createElement('button');
    allPill.type = 'button';
    allPill.className = `cluster-filter-pill ${activeGeneralClusterFilter === 'all' ? 'active' : ''}`;
    allPill.textContent = 'همه گرایش‌ها';
    allPill.addEventListener('click', () => {
      activeGeneralClusterFilter = 'all';
      renderCatalog();
    });
    clusterRow.appendChild(allPill);

    clustersConfig.forEach(cl => {
      const isLocked = isClusterLocked(cl.id);
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `cluster-filter-pill ${activeGeneralClusterFilter === cl.id ? 'active' : ''} ${isLocked ? 'is-locked' : ''}`;
      pill.innerHTML = `${cl.title} ${isLocked ? '🔒 (پاس‌شده)' : ''}`;
      pill.title = cl.description;
      pill.addEventListener('click', () => {
        activeGeneralClusterFilter = cl.id;
        renderCatalog();
      });
      clusterRow.appendChild(pill);
    });

    listContainer.appendChild(clusterRow);

    // ۴. فیلتر کردن دروس عمومی
    let filteredGenerals = generalCourses.filter(course => {
      // فیلتر جنسیت (تفکیک دقیق خواهران / برادران)
      if (studentGender && course.gender !== 'مختلط' && course.gender !== studentGender) {
        return false;
      }

      // فیلتر گرایش انتخاب شده
      if (activeGeneralClusterFilter !== 'all' && course.cluster !== activeGeneralClusterFilter) {
        return false;
      }

      // جستجو
      const q = normalizeSearch(currentSearch);
      if (q) {
        const match = normalizeSearch(course.name).includes(q) ||
          normalizeSearch(course.instructor).includes(q) ||
          normalizeSearch(course.code).includes(q) ||
          normalizeSearch(getClusterTitle(course.cluster)).includes(q);
        if (!match) return false;
      }

      return true;
    });

    document.getElementById('catalogTotalCount').textContent = toPersianDigits(filteredGenerals.length);

    if (filteredGenerals.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.style.cssText = 'text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); font-size: 0.85rem;';
      emptyMsg.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏛️</div>
        درس عمومی متناسب با فیلتر یا جنسیت انتخابی (${studentGender === 'خانم' ? 'خواهران' : 'برادران'}) یافت نشد.
      `;
      listContainer.appendChild(emptyMsg);
      return;
    }

    // الگوریتم مرتب‌سازی هوشمند شکار:
    // ۱. دروس گرایش‌های قفل‌شده یا بدون پیش‌نیاز به انتهای لیست می‌روند.
    // ۲. در میان دروس مجاز، ابتدا دروسی که هنوز جای خالی دارند نمایش داده می‌شوند تا کاربر آن‌ها را شکار کند.
    // ۳. این دروس با جای خالی به ترتیب «بیشترین ثبت‌نامی» (پرتقاضاترین‌ها) مرتب می‌شوند تا سرعت اتمام مشخص شود.
    // ۴. سپس دروسی که ظرفیتشان توسط ترم‌بالایی‌ها پر شده نمایش داده می‌شوند (امید به انصرافی).
    filteredGenerals.sort((a, b) => {
      const lockA = isClusterLocked(a.cluster) || !isCoursePrereqMet(a);
      const lockB = isClusterLocked(b.cluster) || !isCoursePrereqMet(b);
      if (lockA !== lockB) return lockA ? 1 : -1;

      const isFullA = (a.capacity > 0 && (a.registered || 0) >= a.capacity);
      const isFullB = (b.capacity > 0 && (b.registered || 0) >= b.capacity);
      if (isFullA !== isFullB) return isFullA ? 1 : -1;

      const regA = a.registered || 0;
      const regB = b.registered || 0;
      if (regA !== regB) return regB - regA;

      return a.name.localeCompare(b.name, 'fa');
    });

    // ۵. رندر کارت‌های دروس عمومی
    filteredGenerals.forEach(course => {
      const isSelected = selectedCourses.some(c => c.id === course.id);
      const isLocked = isClusterLocked(course.cluster);
      const isPrereqOk = isCoursePrereqMet(course);
      const canTermAdd = canAddGeneralCourseInCurrentTerm(course);

      const cap = course.capacity || 0;
      const reg = course.registered || 0;
      const isFull = cap > 0 && reg >= cap;
      const remaining = Math.max(0, cap - reg);
      const isUrgent = !isFull && cap > 0 && (reg >= 20 || remaining <= 7);

      let capacityBadge = '';
      if (isFull) {
        capacityBadge = `<span class="badge danger-tag" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.35); font-weight: 800;">🔴 ظرفیت تکمیل (${toPersianDigits(reg)} / ${toPersianDigits(cap)})</span>`;
      } else if (isUrgent) {
        capacityBadge = `<span class="badge warning-tag" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.35); font-weight: 800;">⚡ شکار فوری (تنها ${toPersianDigits(remaining)} صندلی مانده)</span>`;
      } else if (cap > 0) {
        capacityBadge = `<span class="badge" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-secondary);">👥 ثبت‌نام: ${toPersianDigits(reg)} از ${toPersianDigits(cap)} نفر</span>`;
      }

      let statusActionBtn = '';
      let statusBadge = '';

      if (isSelected) {
        statusActionBtn = '<button class="card-action-btn remove" data-action="remove">حذف ✕</button>';
      } else if (isLocked) {
        statusBadge = '<span class="badge danger-tag">گرایش قبلاً پاس‌شده</span>';
        statusActionBtn = '<button class="card-action-btn disabled" disabled title="واحدهای مصوب این گرایش را قبلاً گذرانده‌اید">گرایش پاس‌شده 🔒</button>';
      } else if (!isPrereqOk) {
        statusBadge = '<span class="badge danger-tag">نیازمند پیش‌نیاز اندیشه ۱</span>';
        statusActionBtn = '<button class="card-action-btn disabled" disabled title="طبق چارت ابتدا باید اندیشه اسلامی ۱ را پاس کرده باشید">پیش‌نیاز اندیشه ۱ ⚠️</button>';
      } else if (!canTermAdd.allowed) {
        statusActionBtn = `<button class="card-action-btn disabled" disabled title="${canTermAdd.reason}">سقف معارف پر است 🚫</button>`;
      } else if (isFull) {
        statusActionBtn = '<button class="card-action-btn add full-capacity-add" data-action="add" title="امیدوار باش انصرافی بده برداری">+ افزودن (امید به انصرافی)</button>';
      } else if (isUrgent) {
        statusActionBtn = '<button class="card-action-btn add urgent-hunt-add" data-action="add" title="شکار سریع این گروه در گلستان">⚡ شکار فوری +</button>';
      } else {
        statusActionBtn = '<button class="card-action-btn add" data-action="add">افزودن +</button>';
      }

      const genderBadgeClass = course.gender === 'خانم' ? 'general-gender-female' : (course.gender === 'آقا' ? 'general-gender-male' : '');
      const genderLabel = course.gender === 'خانم' ? '👩 خواهران' : (course.gender === 'آقا' ? '👨 برادران' : 'مختلط');

      const card = document.createElement('div');
      card.className = `catalog-card ${isSelected ? 'selected' : ''} ${(isLocked || !isPrereqOk) ? 'disabled-card' : ''}`;

      const sessionSummary = (course.sessions || []).map(s => `${s.day} ${toPersianDigits(s.time)}`).join('، ');
      const examSummary = course.exam && course.exam.date
        ? `${toPersianDigits(course.exam.date)} (ساعت ${toPersianDigits(course.exam.time)})`
        : 'نامشخص';

      card.innerHTML = `
        <div class="card-top">
          <div class="card-title">${course.name}</div>
          <div class="card-badges">
            <span class="badge general-cluster-badge">${getClusterTitle(course.cluster)}</span>
            <span class="badge general-gender-badge ${genderBadgeClass}">${genderLabel}</span>
            ${capacityBadge}
            ${statusBadge}
            <span class="badge primary">${toPersianDigits(course.units)} واحد</span>
          </div>
        </div>
        <div class="card-meta">
          <span>👨‍🏫 استاد: ${formatInstructor(course.instructor)}</span>
          <span>🔢 کد: ${toPersianDigits(course.code)}</span>
          <button class="btn-quick-copy" data-code="${course.code}" title="کپی کد این درس برای گلستان">📋 کپی کد</button>
        </div>
        <div class="card-footer">
          <div style="display: flex; flex-direction: column; gap: 0.15rem; font-size: 0.72rem; color: var(--text-secondary);">
            <span>🕒 زمان: ${sessionSummary || 'بدون زمان کلاسی'}</span>
            <span>📝 آزمون: ${examSummary}</span>
            ${isFull ? '<span style="color: #f87171; font-weight: 750;">⚠️ ظرفیت تکمیل توسط ترم‌بالایی‌ها (امیدوار باش انصرافی بده)</span>' : ''}
          </div>
          <div>
            ${statusActionBtn}
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.btn-quick-copy');
        if (copyBtn) {
          e.stopPropagation();
          copySingleCourseCode(course.code, course.name, copyBtn);
          return;
        }

        if (e.target.closest('button')) {
          e.stopPropagation();
          const action = e.target.getAttribute('data-action');
          if (action === 'add') addCourse(course);
          else if (action === 'remove') removeCourse(course.id);
          return;
        }
        openInspector(course);
      });

      listContainer.appendChild(card);
    });
  }

  // --- رندر سایدبار کاتالوگ با اولویت‌بندی ---
  function renderCatalog() {
    const listContainer = document.getElementById('courseList');
    if (!listContainer) return;

    // حالت اختصاصی دروس عمومی
    if (activeFilter === 'general') {
      renderGeneralCatalog(listContainer);
      return;
    }

    let filtered = allCourses.filter(c => {
      // تفکیک کامل: دروس عمومی در تب‌های تخصصی اقتصاد نشان داده نمی‌شوند
      if (c.isGeneral) return false;

      const q = normalizeSearch(currentSearch);
      const matchSearch = !q || 
        normalizeSearch(c.name).includes(q) || 
        normalizeSearch(c.instructor).includes(q) || 
        c.code.toLowerCase().includes(q);

      if (!matchSearch) return false;

      if (activeFilter === 'term5') return c.category === 'term5';
      if (activeFilter === 'elective') return c.category === 'elective';
      if (activeFilter === 'other') return c.category === 'other';
      if (activeFilter === 'selected') return selectedCourses.some(sc => sc.id === c.id);
      return true;
    });

    // مرتب‌سازی بر اساس اولویت (اولویت ۱ سپس ۲ سپس ۳ و در آخر غیرمجازها)
    filtered.sort((a, b) => {
      const pA = a.isEntry403Allowed ? a.priority : 99;
      const pB = b.isEntry403Allowed ? b.priority : 99;
      if (pA !== pB) return pA - pB;
      return a.name.localeCompare(b.name, 'fa');
    });

    listContainer.innerHTML = '';
    document.getElementById('catalogTotalCount').textContent = toPersianDigits(filtered.length);

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center; padding: 2.5rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
          موردی یافت نشد؛ شاید گلستان از اساس این درس را ارائه نداده باشد.
        </div>
      `;
      return;
    }

    let lastPriority = null;

    filtered.forEach(course => {
      const isSelected = selectedCourses.some(c => c.id === course.id);
      const isAllowed = course.isEntry403Allowed;

      // اضافه کردن سربرگ اولویت در نمای عمومی
      if (activeFilter === 'all') {
        const currentGroup = !isAllowed ? 'disabled' : course.priority;
        if (currentGroup !== lastPriority) {
          lastPriority = currentGroup;
          const sep = document.createElement('div');
          if (currentGroup === 1) {
            sep.className = 'catalog-priority-separator priority-1';
            sep.innerHTML = '<span>🌟 اولویت ۱: دروس مصوب چارت ترم ۵</span>';
          } else if (currentGroup === 2) {
            sep.className = 'catalog-priority-separator priority-2';
            sep.innerHTML = '<span>🎯 اولویت ۲: دروس اختیاری مصوب خوشه اصلی</span>';
          } else if (currentGroup === 3) {
            sep.className = 'catalog-priority-separator';
            sep.innerHTML = '<span>📚 اولویت ۳: سایر دروس مجاز دانشکده</span>';
          } else {
            sep.className = 'catalog-priority-separator priority-disabled';
            sep.innerHTML = '<span>🚫 غیرمجاز برای ورودی ۴۰۳ (مخصوص ماقبل ۴۰۲ یا اقتصادسنجی)</span>';
          }
          listContainer.appendChild(sep);
        }
      }

      const card = document.createElement('div');
      card.className = `catalog-card ${isSelected ? 'selected' : ''} ${!isAllowed ? 'disabled-card' : ''}`;
      
      const sessionSummary = course.sessions.map(s => `${s.day} ${toPersianDigits(s.time)}`).join('، ');

      let priorityBadge = '';
      if (course.category === 'term5') {
        priorityBadge = '<span class="badge term5-badge">چارت ترم ۵</span>';
      } else if (course.category === 'elective') {
        priorityBadge = '<span class="badge elective-badge">اختیاری مصوب</span>';
      }

      let restrictionBadge = '';
      if (!isAllowed) {
        if (course.isEconometrics) {
          restrictionBadge = '<span class="badge danger-tag">موقتاً غیرفعال</span>';
        } else {
          restrictionBadge = '<span class="badge danger-tag">مخصوص ماقبل ۴۰۲</span>';
        }
      }

      card.innerHTML = `
        <div class="card-top">
          <div class="card-title">${course.name}</div>
          <div class="card-badges">
            ${priorityBadge}
            ${restrictionBadge}
            <span class="badge primary">${toPersianDigits(course.units)} واحد</span>
          </div>
        </div>
        <div class="card-meta">
          <span>👨‍🏫 استاد: ${formatInstructor(course.instructor)}</span>
          <span>🔢 کد: ${toPersianDigits(course.code)}</span>
          <button class="btn-quick-copy" data-code="${course.code}" title="کپی کد این درس برای گلستان">📋 کپی کد</button>
        </div>
        <div class="card-footer">
          <span>🕒 زمان: ${sessionSummary || 'بدون زمان کلاسی'}</span>
          <div>
            ${!isAllowed ? `
              <button class="card-action-btn disabled" disabled title="دست نزن؛ این درس ارث پدری ترم‌بالایی‌های فسیل‌شده‌ست">دست نزن (ارث ترم‌بالایی‌ها)</button>
            ` : isSelected ? `
              <button class="card-action-btn remove" data-action="remove">حذف ✕</button>
            ` : `
              <button class="card-action-btn add" data-action="add">افزودن +</button>
            `}
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.btn-quick-copy');
        if (copyBtn) {
          e.stopPropagation();
          copySingleCourseCode(course.code, course.name, copyBtn);
          return;
        }

        if (e.target.closest('button')) {
          e.stopPropagation();
          const action = e.target.getAttribute('data-action');
          if (action === 'add') addCourse(course);
          else if (action === 'remove') removeCourse(course.id);
          return;
        }
        openInspector(course);
      });

      listContainer.appendChild(card);
    });
  }

  // --- مدیریت مودال کارنامه و سوابق دروس عمومی (معارف) ---
  function openGeneralPassedModal() {
    const modal = document.getElementById('generalPassedModal');
    if (!modal) return;

    // به‌روزرسانی وضعیت دکمه‌های جنسیت در مودال
    const femaleBtn = document.getElementById('genderBtnFemale');
    const maleBtn = document.getElementById('genderBtnMale');
    if (femaleBtn && maleBtn) {
      if (studentGender === 'خانم') {
        femaleBtn.classList.add('active');
        maleBtn.classList.remove('active');
      } else {
        maleBtn.classList.add('active');
        femaleBtn.classList.remove('active');
      }
    }

    renderGeneralPassedChecklist();
    updateGeneralPassedSummary();

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeGeneralPassedModal() {
    const modal = document.getElementById('generalPassedModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function updateGeneralPassedSummary() {
    const countEl = document.getElementById('passedUnitsCount');
    if (!countEl) return;
    const totalUnits = passedGeneralCourses.length * 2;
    countEl.textContent = toPersianDigits(totalUnits);
  }

  function renderGeneralPassedChecklist() {
    const bodyEl = document.getElementById('generalPassedBody');
    if (!bodyEl) return;

    const clusters = window.GENERAL_CLUSTERS_CONFIG || [];
    bodyEl.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'clusters-checklist-grid';

    clusters.forEach(cl => {
      const card = document.createElement('div');
      const isCompleted = isClusterLocked(cl.id);
      card.className = `cluster-check-card ${isCompleted ? 'is-completed' : ''}`;
      card.dataset.clusterId = cl.id;

      let badgeText = `${toPersianDigits(cl.maxUnits)} واحد الزامی`;
      if (cl.id === 'mabani') {
        badgeText = '۴ واحد الزامی (اندیشه ۱ پیش‌نیاز ۲)';
      } else if (cl.id === 'khanevadeh') {
        badgeText = '۲ واحد الزامی (مستقل)';
      }

      const coursesHtml = cl.courses.map(courseItem => {
        const isChecked = passedGeneralCourses.includes(courseItem.id);
        const isDisabled = courseItem.disabledInChart;
        return `
          <label class="check-item-row" style="${isDisabled ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
            <input type="checkbox" 
                   data-course-id="${courseItem.id}" 
                   data-cluster-id="${cl.id}"
                   ${isChecked ? 'checked' : ''} 
                   ${isDisabled ? 'disabled' : ''}>
            <span class="check-item-name">${courseItem.name}</span>
            <span class="check-item-sub">
              (${toPersianDigits(courseItem.units)} واحد)
              ${isDisabled ? `<span style="color: var(--danger-text); font-weight: bold;">[${courseItem.disabledNote || 'ارائه نمی‌شود'}]</span>` : ''}
              ${courseItem.isPrereqFor ? '<span style="color: var(--primary);">[پیش‌نیاز اندیشه ۲]</span>' : ''}
            </span>
          </label>
        `;
      }).join('');

      card.innerHTML = `
        <div class="cluster-card-head">
          <span class="cluster-card-title">${cl.title}</span>
          <span class="cluster-card-badge">${badgeText}</span>
        </div>
        <div class="cluster-items-list">
          ${coursesHtml}
        </div>
      `;

      grid.appendChild(card);
    });

    bodyEl.appendChild(grid);

    // افزودن رویداد تغییر به چک‌باکس‌ها
    const checkboxes = grid.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const cId = cb.getAttribute('data-course-id');
        const clId = cb.getAttribute('data-cluster-id');

        if (cb.checked) {
          if (!passedGeneralCourses.includes(cId)) {
            passedGeneralCourses.push(cId);
          }
        } else {
          passedGeneralCourses = passedGeneralCourses.filter(id => id !== cId);
        }

        // بررسی و به‌روزرسانی کارت گرایش
        const clusterCard = grid.querySelector(`.cluster-check-card[data-cluster-id="${clId}"]`);
        if (clusterCard) {
          if (isClusterLocked(clId)) {
            clusterCard.classList.add('is-completed');
          } else {
            clusterCard.classList.remove('is-completed');
          }
        }

        updateGeneralPassedSummary();
      });
    });
  }

  function saveGeneralPassed() {
    try {
      localStorage.setItem('passed_general_courses', JSON.stringify(passedGeneralCourses));
      localStorage.setItem('student_gender', studentGender);
      localStorage.setItem('general_passed_prompted', 'true');
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }

    closeGeneralPassedModal();
    updateUI();
    showToast('کارنامه دروس عمومی، جنسیت و سوابق تحصیلی شما با موفقیت ذخیره شد.', 'success');
  }

  // --- رندر جدول زمانی هفتگی روزبه‌روز (شنبه تا چهارشنبه) ---
  function renderDailySchedule(classConflicts) {
    const container = document.getElementById('dailyScheduleFlow');
    if (!container) return;

    container.innerHTML = '';

    // فیلتر روزهای نمایش (امکان انتخاب تک‌روز در نمای موبایل)
    const daysToRender = activeMobileDay === 'all'
      ? DAYS_ORDER
      : DAYS_ORDER.filter(d => d === activeMobileDay);

    daysToRender.forEach(day => {
      const daySessions = [];
      selectedCourses.forEach(course => {
        course.sessions.forEach(session => {
          if (session.day === day) {
            daySessions.push({ course, session });
          }
        });
      });

      const dayCard = document.createElement('div');
      dayCard.className = 'day-schedule-card';

      const header = document.createElement('div');
      header.className = 'day-card-header';
      header.innerHTML = `
        <div class="day-card-title">
          <span>📅 روز ${day}</span>
        </div>
        <span class="day-count-badge">
          ${daySessions.length > 0 ? `${toPersianDigits(daySessions.length)} کلاس` : 'بدون کلاس'}
        </span>
      `;
      dayCard.appendChild(header);

      const slotsGrid = document.createElement('div');
      slotsGrid.className = 'slots-grid';

      TIME_SLOTS.forEach(slot => {
        const slotBox = document.createElement('div');
        slotBox.className = `time-slot-box ${slot.isBreak ? 'break-slot' : ''}`;

        // ساعت ۱۲ تا ۱: استراحت (خاکستری متمایز)
        if (slot.isBreak) {
          slotBox.innerHTML = `
            <div class="break-tag">☕ [تنفس رسمی]</div>
            <div class="break-text">ساعت ۱۲ تا ۱۳: برنج و کافور هندی در انتظارته</div>
            <div class="break-subtext">صف ژتون سلف و مبارزه بقا برای دریافت غذا</div>
          `;
        } else {
          let slotHumorTitle = '';
          if (slot.id === '08-10') {
            slotHumorTitle = 'ساعت شروع کلاس 8 صبحه ولی تو باید 5 صبح پاشی ترافیک همت گیر نکنی';
          } else if (slot.id === '17-19') {
            slotHumorTitle = 'آخرین بازمانده دانشکده؛ حراست کلید میندازه، تو هنوز پای تخته‌ای';
          }

          slotBox.innerHTML = `
            <div class="slot-time-label" ${slotHumorTitle ? `title="${slotHumorTitle}"` : ''}>
              <span>⏰ ${slot.label}</span>
              ${slot.id === '08-10' ? '<span class="slot-humor-badge">🚗 ترافیک همت</span>' : ''}
              ${slot.id === '17-19' ? '<span class="slot-humor-badge">🌙 آخرین بازمانده</span>' : ''}
            </div>
            <div class="slot-content"></div>
          `;

          const contentEl = slotBox.querySelector('.slot-content');
          const matchingSessions = daySessions.filter(item => sessionMatchesSlot(item.session.time, slot));

          if (matchingSessions.length === 0) {
            const emptyEl = document.createElement('div');
            emptyEl.className = 'slot-empty interactive-slot-empty';
            emptyEl.setAttribute('role', 'button');
            emptyEl.setAttribute('tabindex', '0');
            emptyEl.setAttribute('aria-label', `انتخاب درس برای روز ${day} ساعت ${slot.label}`);
            emptyEl.title = `ساعت طلایی فرار از دانشگاه؛ پرش نکن، پشیمون میشی`;
            emptyEl.innerHTML = `
              <div class="slot-empty-content">
                <div class="slot-empty-action">
                  <span class="slot-empty-icon">➕</span>
                  <span>انتخاب درس در این ساعت</span>
                </div>
                <div class="slot-empty-subtext">مشاهده گزینه‌ها و پیشنهاد هوشمند</div>
              </div>
            `;

            emptyEl.addEventListener('click', () => openSlotCoursesModal(day, slot));
            emptyEl.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openSlotCoursesModal(day, slot);
              }
            });

            contentEl.appendChild(emptyEl);
          } else {
            matchingSessions.forEach(({ course, session }) => {
              const hasClassConflict = matchingSessions.length > 1;

              const itemEl = document.createElement('div');
              itemEl.className = `slot-course-item ${hasClassConflict ? 'has-conflict' : ''}`;
              itemEl.title = 'برای مشاهده جزییات درس کلیک کنید';

              itemEl.innerHTML = `
                <div class="slot-item-header">
                  <span class="slot-course-name">${course.name}</span>
                  <button class="slot-direct-del-btn" data-id="${course.id}" title="حذف مستقیم از برنامه">✕</button>
                </div>
                <div class="slot-course-instructor">${formatInstructor(course.instructor)}</div>
                <div class="slot-item-actions">
                  <button class="slot-switch-prof-btn" data-id="${course.id}" title="تغییر استاد و انتخاب گروه دیگر">🔄 تغییر استاد</button>
                </div>
                ${hasClassConflict ? '<div class="slot-conflict-tag">[تداخل زمانی — یا همزاد بیار یا التماس رفیق برای غیبت نخوردن]</div>' : ''}
              `;

              itemEl.addEventListener('click', (e) => {
                const delBtn = e.target.closest('.slot-direct-del-btn');
                if (delBtn) {
                  e.stopPropagation();
                  removeCourse(course.id);
                  return;
                }

                const switchBtn = e.target.closest('.slot-switch-prof-btn');
                if (switchBtn) {
                  e.stopPropagation();
                  openSwitchGroupModal(course);
                  return;
                }

                openInspector(course);
              });

              contentEl.appendChild(itemEl);
            });
          }
        }

        slotsGrid.appendChild(slotBox);
      });

      dayCard.appendChild(slotsGrid);
      container.appendChild(dayCard);
    });
  }

  // --- رندر نمای ماتریسی هفتگی ---
  function renderMatrixSchedule(classConflicts) {
    const tableBody = document.getElementById('matrixTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    TIME_SLOTS.forEach(slot => {
      const row = document.createElement('tr');

      const timeCell = document.createElement('th');
      timeCell.className = 'time-col';
      timeCell.textContent = slot.label;
      row.appendChild(timeCell);

      if (slot.isBreak) {
        const breakCell = document.createElement('td');
        breakCell.colSpan = DAYS_ORDER.length;
        breakCell.className = 'break-cell';
        breakCell.textContent = 'استراحت و ناهار (ساعت ۱۲:۰۰ تا ۱۳:۰۰) — ساعت ۱۲ تا ۱۳: برنج و کافور هندی در انتظارته';
        row.appendChild(breakCell);
      } else {
        DAYS_ORDER.forEach(day => {
          const cell = document.createElement('td');
          cell.className = 'matrix-slot-cell';

          const dayClasses = [];
          selectedCourses.forEach(course => {
            course.sessions.forEach(session => {
              if (session.day === day && sessionMatchesSlot(session.time, slot)) {
                dayClasses.push(course);
              }
            });
          });

          if (dayClasses.length > 0) {
            dayClasses.forEach(course => {
              const itemEl = document.createElement('div');
              itemEl.className = `slot-course-item ${dayClasses.length > 1 ? 'has-conflict' : ''}`;
              itemEl.innerHTML = `
                <div class="slot-item-header">
                  <span class="slot-course-name">${course.name}</span>
                  <button class="slot-direct-del-btn" data-id="${course.id}" title="حذف مستقیم">✕</button>
                </div>
                <div class="slot-course-instructor">${formatInstructor(course.instructor)}</div>
                <div class="slot-item-actions">
                  <button class="slot-switch-prof-btn" data-id="${course.id}" title="تغییر استاد">🔄 تغییر استاد</button>
                </div>
              `;

              itemEl.addEventListener('click', (e) => {
                const delBtn = e.target.closest('.slot-direct-del-btn');
                if (delBtn) {
                  e.stopPropagation();
                  removeCourse(course.id);
                  return;
                }

                const switchBtn = e.target.closest('.slot-switch-prof-btn');
                if (switchBtn) {
                  e.stopPropagation();
                  openSwitchGroupModal(course);
                  return;
                }

                openInspector(course);
              });

              cell.appendChild(itemEl);
            });
          } else {
            const matrixEmpty = document.createElement('div');
            matrixEmpty.className = 'matrix-empty-slot';
            matrixEmpty.setAttribute('role', 'button');
            matrixEmpty.setAttribute('tabindex', '0');
            matrixEmpty.setAttribute('aria-label', `انتخاب درس روز ${day} ساعت ${slot.label}`);
            matrixEmpty.title = `کلیک کنید: مشاهده گزینه‌ها و پیشنهاد هوشمند روز ${day} ساعت ${slot.label}`;
            matrixEmpty.innerHTML = `
              <span class="matrix-empty-plus">+</span>
              <span class="matrix-empty-label">انتخاب درس</span>
            `;

            matrixEmpty.addEventListener('click', () => openSlotCoursesModal(day, slot));
            matrixEmpty.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openSlotCoursesModal(day, slot);
              }
            });

            cell.appendChild(matrixEmpty);
          }

          row.appendChild(cell);
        });
      }

      tableBody.appendChild(row);
    });
  }

  // --- رندر تقویم ردیفی روز به روز امتحانات نهایی (بهمن ۱۴۰۵) ---
  function renderLinearExamSchedule(examConflicts) {
    const alertsContainer = document.getElementById('conflictAlerts');
    const linearContainer = document.getElementById('examDaysLinear');

    if (!alertsContainer || !linearContainer) return;

    alertsContainer.innerHTML = '';
    linearContainer.innerHTML = '';

    // نمایش هشدارهای بالایی تداخل
    if (examConflicts.length > 0) {
      examConflicts.forEach(conf => {
        const alertEl = document.createElement('div');
        alertEl.className = `alert-card ${conf.level}`;
        alertEl.innerHTML = `
          <span class="alert-icon">[${conf.level === 'danger' ? 'خطای قطعی' : 'هشدار تراکم'}]</span>
          <div>${conf.message}</div>
        `;
        alertsContainer.appendChild(alertEl);
      });
    }

    // دکمه‌های سوئیچ تقویم امتحانات
    const filterMyBtn = document.getElementById('examFilterMyExams');
    const filterAllBtn = document.getElementById('examFilterAllDays');
    if (filterMyBtn && filterAllBtn) {
      if (examCalendarFilter === 'myExams') {
        filterMyBtn.classList.add('active');
        filterAllBtn.classList.remove('active');
      } else {
        filterAllBtn.classList.add('active');
        filterMyBtn.classList.remove('active');
      }
    }

    // تعیین روزهای قابل نمایش بر اساس فیلتر فعال (فقط روزهای من یا کل تقویم بهمن)
    let daysToRender = EXAM_CALENDAR_DAYS;
    if (examCalendarFilter === 'myExams') {
      daysToRender = EXAM_CALENDAR_DAYS.filter(calendarDay => {
        return selectedCourses.some(c => c.exam && c.exam.date === calendarDay.date);
      });

      if (daysToRender.length === 0) {
        linearContainer.innerHTML = `
          <div class="empty-exam-box" style="text-align:center; padding: 2.2rem 1.5rem; color: var(--text-secondary); border: 1px dashed var(--border-color); border-radius: var(--radius-md); background: var(--bg-surface);">
            <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">📅</div>
            <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.35rem;">در حال حاضر درسی با تاریخ امتحان مشخص در برنامه‌تان وجود ندارد</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
              از کاتالوگ سمت راست یا دکمه «چینش خودکار ترم ۵» درس بردارید تا تقویم فشرده امتحانات شما شکل بگیرد؛ یا جهت مرور تقویم کلی دانشگاه دکمه «نمایش کل تقویم بهمن» را بزنید.
            </div>
          </div>
        `;
        return;
      }
    }

    // ساخت ردیف‌های روزبه‌روز تقویم بهمن ماه
    daysToRender.forEach(calendarDay => {
      // دروس انتخاب شده با امتحان در این تاریخ
      const matchingExams = selectedCourses.filter(c => c.exam && c.exam.date === calendarDay.date);

      // بررسی تداخل در این روز
      const hasExactConflict = examConflicts.some(
        conf => conf.level === 'danger' && conf.date === calendarDay.date
      );
      const hasDayConflict = examConflicts.some(
        conf => conf.level === 'warning' && conf.date === calendarDay.date
      );

      const row = document.createElement('div');
      let rowClass = 'exam-day-row';
      if (matchingExams.length > 0) rowClass += ' has-exams';
      if (hasExactConflict) rowClass += ' has-exact-conflict';
      else if (hasDayConflict) rowClass += ' has-day-conflict';
      if (calendarDay.isHoliday) rowClass += ' is-holiday';
      if (calendarDay.isGeneral) rowClass += ' is-general-exam-day';

      row.className = rowClass;

      // ستون اول: روز و تاریخ
      const colDate = document.createElement('div');
      colDate.className = 'exam-day-date-col';
      colDate.innerHTML = `
        <div class="exam-day-title">
          <span>${calendarDay.dayName}</span>
          <span>${toPersianDigits(calendarDay.title)}</span>
        </div>
        <div class="exam-day-meta-tag">${calendarDay.note}</div>
      `;

      // ستون دوم: دروس امتحانی یا وضعیت فرجه
      const colItems = document.createElement('div');
      colItems.className = 'exam-day-items-col';

      if (matchingExams.length === 0) {
        if (calendarDay.isHoliday) {
          colItems.innerHTML = `<span class="no-exam-pill" style="color:var(--holiday-text);">🔴 تعطیل رسمی — یک روز استراحت با چاشنی اضطراب امتحان بعدی</span>`;
        } else if (calendarDay.isGeneral) {
          colItems.innerHTML = `<span class="no-exam-pill" style="color:var(--general-exam-text);">🔵 امتحانات دروس عمومی دانشگاه (تست زدن بر مبنای حس ششم و الهامات غیبی)</span>`;
        } else {
          colItems.innerHTML = `<span class="no-exam-pill">🌱 فرجه مطالعه (خوابیدن تا عصر، سریال دیدن تا شب و عذاب وجدان در ساعت ۳ بامداد)</span>`;
        }
      } else {
        matchingExams.forEach(course => {
          const chip = document.createElement('div');
          chip.className = `exam-row-chip ${hasExactConflict ? 'conflict-item' : ''}`;
          chip.innerHTML = `
            <span class="erc-name">${course.name}</span>
            <span class="erc-time">ساعت ${toPersianDigits(course.exam.time)}</span>
            <span class="erc-prof">(${formatInstructor(course.instructor)})</span>
          `;
          chip.addEventListener('click', () => openInspector(course));
          colItems.appendChild(chip);
        });

        if (hasExactConflict) {
          const tag = document.createElement('div');
          tag.className = 'slot-conflict-tag';
          tag.innerHTML = '🚨 [خطای بحرانی] هم‌زمانی ساعت امتحان — نیازمند قابلیت طی‌الارض!';
          colItems.appendChild(tag);
        } else if (hasDayConflict) {
          const tag = document.createElement('div');
          tag.className = 'slot-conflict-tag';
          tag.style.backgroundColor = 'var(--warning-light)';
          tag.style.color = 'var(--warning-text)';
          tag.innerHTML = '⚠️ [هشدار فرسودگی] ۲ امتحان در یک روز — خدا به داد اعصابتون برسه';
          colItems.appendChild(tag);
        }
      }

      row.appendChild(colDate);
      row.appendChild(colItems);
      linearContainer.appendChild(row);
    });
  }

  // --- مدیریت مودال تغییر استاد و گروه درسی ---
  function openSwitchGroupModal(currentCourse) {
    if (!currentCourse) return;
    const modal = document.getElementById('switchGroupModal');
    const titleEl = document.getElementById('switchGroupTitle');
    const subtitleEl = document.getElementById('switchGroupSubtitle');
    const bodyEl = document.getElementById('switchGroupBody');
    if (!modal || !bodyEl) return;

    if (titleEl) {
      titleEl.innerHTML = `🔄 تغییر استاد: <strong>${currentCourse.name}</strong>`;
    }
    if (subtitleEl) {
      subtitleEl.innerHTML = `گروه فعلی شما: <strong>${toPersianDigits(currentCourse.code)}</strong> (استاد ${formatInstructor(currentCourse.instructor)})`;
    }

    // استخراج دروس هم‌نام یا دارای کد پایه یکسان
    const baseCode = (currentCourse.code || '').split('_')[0];
    const normName = normalizeName(currentCourse.name);

    const relatedGroups = allCourses.filter(c => {
      const cBase = (c.code || '').split('_')[0];
      return (baseCode && cBase === baseCode) || (normalizeName(c.name) === normName);
    });

    bodyEl.innerHTML = '';

    if (relatedGroups.length <= 1) {
      bodyEl.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🤷‍♂️</div>
          <div style="font-weight: 800; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">
            تنها یک گروه برای این درس در این ترم ارائه شده است.
          </div>
          <p style="font-size: 0.85rem; line-height: 1.6; max-width: 420px; margin: 0 auto;">
            درس «${currentCourse.name}» فقط با کد گروه «${toPersianDigits(currentCourse.code)}» و استاد «${formatInstructor(currentCourse.instructor)}» در لیست رسمی آموزش وجود دارد و گروه موازی دیگری برای جابجایی تعریف نشده است.
          </p>
        </div>
      `;
    } else {
      const listContainer = document.createElement('div');
      listContainer.className = 'switch-group-list';

      const otherCourses = selectedCourses.filter(sc => sc.id !== currentCourse.id);

      relatedGroups.forEach(grp => {
        const isCurrent = grp.id === currentCourse.id;
        const card = document.createElement('div');
        card.className = `switch-group-card ${isCurrent ? 'is-current' : ''}`;

        // بررسی تداخل کلاسی این گروه با سایر دروس کاربر
        const conflictsWith = [];
        (grp.sessions || []).forEach(sA => {
          otherCourses.forEach(oc => {
            (oc.sessions || []).forEach(sB => {
              if (sA.day === sB.day) {
                const [startA, endA] = (sA.time || '').split('-');
                const [startB, endB] = (sB.time || '').split('-');
                if (timesOverlap(startA, endA, startB, endB)) {
                  conflictsWith.push({ type: 'class', day: sA.day, other: oc.name });
                }
              }
            });
          });
        });

        // بررسی تداخل امتحانی
        let examConflict = null;
        if (grp.exam && grp.exam.date) {
          otherCourses.forEach(oc => {
            if (oc.exam && oc.exam.date === grp.exam.date) {
              const [sA, eA] = (grp.exam.time || '').split('-');
              const [sB, eB] = (oc.exam.time || '').split('-');
              if (sA && sB && timesOverlap(sA, eA, sB, eB)) {
                examConflict = { type: 'exact', other: oc.name, date: grp.exam.date, time: grp.exam.time };
              } else if (!examConflict) {
                examConflict = { type: 'sameday', other: oc.name, date: grp.exam.date };
              }
            }
          });
        }

        const sessionSummary = grp.sessions && grp.sessions.length > 0
          ? grp.sessions.map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' و ')
          : 'ساعت کلاس اعلام نشده';

        const examSummary = grp.exam && grp.exam.date
          ? `${toPersianDigits(grp.exam.date)} (ساعت ${toPersianDigits(grp.exam.time)})`
          : 'تاریخ امتحان اعلام نشده';

        let conflictHtml = '';
        if (isCurrent) {
          conflictHtml = `<span style="color: var(--primary); font-weight: 700; font-size: 0.78rem;">📌 گروه انتخابی فعلی در برنامه شما</span>`;
        } else if (conflictsWith.length > 0) {
          conflictHtml = `<span style="color: var(--danger-text); font-weight: 700; font-size: 0.78rem;">⚠️ تداخل کلاسی روز ${conflictsWith[0].day} با درس «${conflictsWith[0].other}»</span>`;
        } else if (examConflict && examConflict.type === 'exact') {
          conflictHtml = `<span style="color: var(--danger-text); font-weight: 700; font-size: 0.78rem;">🚨 تداخل ساعت دقیق امتحان با «${examConflict.other}»</span>`;
        } else if (examConflict && examConflict.type === 'sameday') {
          conflictHtml = `<span style="color: var(--warning-text); font-weight: 600; font-size: 0.78rem;">⚠️ دو امتحان در یک روز همزمان با «${examConflict.other}»</span>`;
        } else {
          conflictHtml = `<span style="color: var(--success-text); font-weight: 700; font-size: 0.78rem;">🛡️ بدون تداخل زمانی با سایر دروس شما</span>`;
        }

        card.innerHTML = `
          <div class="sgc-head">
            <span class="sgc-prof">${formatInstructor(grp.instructor)}</span>
            <span class="sgc-group">کد گروه: ${toPersianDigits(grp.code)}</span>
          </div>
          <div class="sgc-details">
            <div>🕒 زمان برگزاری: <strong>${sessionSummary}</strong></div>
            <div>📝 آزمون پایان‌ترم: <strong>${examSummary}</strong></div>
            <div>👥 ظرفیت کلاس: <strong>${toPersianDigits(grp.capacity || 25)} نفر</strong></div>
            <div style="margin-top: 0.25rem;">${conflictHtml}</div>
          </div>
          <div class="sgc-action">
            ${isCurrent
              ? '<span class="current-group-badge">✓ در برنامه هفتگی شماست</span>'
              : `<button class="btn btn-primary btn-sm btn-select-switch" data-id="${grp.id}">
                  🔄 انتقال به این استاد و گروه
                </button>`
            }
          </div>
        `;

        const switchBtn = card.querySelector('.btn-select-switch');
        if (switchBtn) {
          switchBtn.addEventListener('click', () => {
            const idx = selectedCourses.findIndex(sc => sc.id === currentCourse.id);
            if (idx !== -1) {
              selectedCourses[idx] = grp;
            } else {
              selectedCourses.push(grp);
            }
            saveState();
            updateUI();
            closeSwitchGroupModal();
            showToast(`استاد درس «${grp.name}» با موفقیت به ${formatInstructor(grp.instructor)} (کد ${toPersianDigits(grp.code)}) تغییر یافت.`, 'success');
          });
        }

        listContainer.appendChild(card);
      });

      bodyEl.appendChild(listContainer);
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeSwitchGroupModal() {
    const modal = document.getElementById('switchGroupModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // --- مدیریت مودال انتخاب درس برای ساعت‌های خالی برنامه هفتگی ---
  function openSlotCoursesModal(day, slot) {
    if (!day || !slot) return;
    const modal = document.getElementById('emptySlotModal');
    const titleEl = document.getElementById('emptySlotTitle');
    const subtitleEl = document.getElementById('emptySlotSubtitle');
    const bodyEl = document.getElementById('emptySlotBody');
    if (!modal || !bodyEl) return;

    if (titleEl) {
      titleEl.innerHTML = `🎯 ساعت طلایی فرار از دانشگاه؛ پرش نکن، پشیمون میشی`;
    }

    // استخراج دروس مجاز برای ورودی ۴۰۳ که در این روز و ساعت جلسه دارند
    const candidates = allCourses.filter(course => {
      if (course.isGeneral) {
        if (studentGender && course.gender !== 'مختلط' && course.gender !== studentGender) return false;
        if (isClusterLocked(course.cluster)) return false;
        if (!isCoursePrereqMet(course)) return false;
        if (!canAddGeneralCourseInCurrentTerm(course).allowed) return false;
      } else {
        if (!course.isEntry403Allowed) return false;
      }
      return (course.sessions || []).some(s => s.day === day && sessionMatchesSlot(s.time, slot));
    });

    if (subtitleEl) {
      subtitleEl.innerHTML = `
        <div class="slot-modal-tags">
          <span class="slot-modal-tag primary">📅 روز ${day}</span>
          <span class="slot-modal-tag primary">⏰ ساعت ${slot.label}</span>
          <span class="slot-modal-tag gold">⚡ ${toPersianDigits(candidates.length)} درس موجود</span>
        </div>
      `;
    }

    bodyEl.innerHTML = '';

    if (candidates.length === 0) {
      bodyEl.innerHTML = `
        <div style="text-align: center; padding: 3rem 1.5rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🕊️</div>
          <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 0.5rem;">
            در روز ${day} ساعت ${slot.label} هیچ کلاسی برای دانشجویان ورودی ۴۰۳ ارائه نشده است.
          </div>
          <p style="font-size: 0.85rem; line-height: 1.6; max-width: 440px; margin: 0 auto;">
            این بازه ساعت طلایی فرار از دانشگاهه؛ پرش نکن، پشیمون میشی! با خیال راحت برو خونه یا از دانشگاه بزن بیرون.
          </p>
        </div>
      `;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      return;
    }

    // تحلیل وضعیت هر درس کاندید و ارزیابی تداخل‌ها
    const evaluatedCandidates = candidates.map(c => {
      const isExactSelected = selectedCourses.some(sc => sc.id === c.id);
      const cBase = (c.code || '').split('_')[0];
      const cNorm = normalizeName(c.name);
      const takenWithOtherProf = selectedCourses.find(sc => sc.id !== c.id && (((sc.code || '').split('_')[0] === cBase) || normalizeName(sc.name) === cNorm));

      // بررسی تداخل کلاسی در سایر روزها/ساعات
      const classConflicts = [];
      (c.sessions || []).forEach(sA => {
        selectedCourses.forEach(sc => {
          if (sc.id === c.id) return;
          (sc.sessions || []).forEach(sB => {
            if (sA.day === sB.day) {
              const [startA, endA] = (sA.time || '').split('-');
              const [startB, endB] = (sB.time || '').split('-');
              if (timesOverlap(startA, endA, startB, endB)) {
                classConflicts.push({ day: sA.day, time: sA.time, otherCourse: sc.name });
              }
            }
          });
        });
      });

      // بررسی تداخل امتحانی
      let examConflict = null;
      if (c.exam && c.exam.date) {
        selectedCourses.forEach(sc => {
          if (sc.id === c.id) return;
          if (sc.exam && sc.exam.date === c.exam.date) {
            const [sA, eA] = (c.exam.time || '').split('-');
            const [sB, eB] = (sc.exam.time || '').split('-');
            if (sA && sB && timesOverlap(sA, eA, sB, eB)) {
              examConflict = { type: 'exact', otherCourse: sc.name, date: c.exam.date, time: c.exam.time };
            } else if (!examConflict) {
              examConflict = { type: 'sameday', otherCourse: sc.name, date: c.exam.date };
            }
          }
        });
      }

      // محاسبه امتیاز برای پیشنهاد هوشمند
      let score = 0;
      const isEligibleForRec = !isExactSelected && !takenWithOtherProf && classConflicts.length === 0 && (!examConflict || examConflict.type !== 'exact');

      if (isEligibleForRec) {
        score += 100;
        if (c.category === 'term5' || c.priority === 1) score += 100;
        if (c.category === 'elective' || c.priority === 2) score += 50;
        if (!examConflict) score += 30;
        const currentTotal = selectedCourses.reduce((sum, item) => sum + (item.units || 0), 0);
        const maxUnits = isHonorStudent ? 24 : 20;
        if (currentTotal + (c.units || 0) <= maxUnits) score += 40;
      }

      return {
        course: c,
        isExactSelected,
        takenWithOtherProf,
        classConflicts,
        examConflict,
        isEligibleForRec,
        score
      };
    });

    // پیدا کردن بهترین پیشنهاد هوشمند
    let bestRec = null;
    const recCandidates = evaluatedCandidates.filter(item => item.isEligibleForRec);
    if (recCandidates.length > 0) {
      recCandidates.sort((a, b) => b.score - a.score);
      bestRec = recCandidates[0];
    }

    // ۱. نمایش کارت پیشنهاد هوشمند
    if (bestRec) {
      const recCard = document.createElement('div');
      recCard.className = 'slot-recommended-card';

      const recCourse = bestRec.course;
      const recSessions = (recCourse.sessions || []).map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' و ');
      const recExam = recCourse.exam && recCourse.exam.date
        ? `${toPersianDigits(recCourse.exam.date)} (ساعت ${toPersianDigits(recCourse.exam.time)})`
        : 'تاریخ امتحان اعلام نشده';

      let reasonText = '💡 دلیل پیشنهاد: تطابق کامل با بازه زمانی خالی شما بدون هیچ‌گونه تداخل زمانی یا امتحانی با دروس فعلی.';
      if (recCourse.category === 'term5' || recCourse.priority === 1) {
        reasonText = '💡 دلیل پیشنهاد: درس اصلی و تخصصی چارت ترم ۵ (ورودی ۴۰۳) • بدون تداخل کلاسی و بدون تداخل ساعت امتحان با برنامه فعلی شما.';
      } else if (recCourse.category === 'elective') {
        reasonText = '💡 دلیل پیشنهاد: درس اختیاری معتبر چارت • تطابق زمانی عالی با ساعت خالی و بدون تداخل امتحانی.';
      }

      recCard.innerHTML = `
        <div class="src-badge">⭐ پیشنهاد هوشمند سامانه برای این ساعت</div>
        <div class="src-title-row">
          <div>
            <h4 class="src-name">${recCourse.name}</h4>
            <div class="src-prof">استاد: <strong>${formatInstructor(recCourse.instructor)}</strong></div>
          </div>
          <span class="scc-code-pill">کد: ${toPersianDigits(recCourse.code)}</span>
        </div>
        <div class="src-meta-chips">
          <span class="src-meta-chip">📚 ${toPersianDigits(recCourse.units || 0)} واحد</span>
          <span class="src-meta-chip">🕒 ${recSessions}</span>
          <span class="src-meta-chip">📝 آزمون: ${recExam}</span>
          <span class="src-meta-chip" style="color: var(--success-text);">🛡️ کاملاً بدون تداخل</span>
        </div>
        <div class="src-reason">${reasonText}</div>
        <div class="src-action-row">
          <button class="btn btn-outline btn-sm src-inspect-btn">🔍 جزییات کامل</button>
          <button class="btn btn-primary btn-sm src-add-btn">⚡ افزودن فوری به برنامه</button>
        </div>
      `;

      const addBtn = recCard.querySelector('.src-add-btn');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          if (addCourse(recCourse)) {
            closeEmptySlotModal();
          }
        });
      }

      const inspBtn = recCard.querySelector('.src-inspect-btn');
      if (inspBtn) {
        inspBtn.addEventListener('click', () => {
          openInspector(recCourse);
        });
      }

      bodyEl.appendChild(recCard);
    }

    // ۲. بخش لیست تمام گزینه‌های قابل ارائه
    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'slot-candidates-section-title';
    sectionTitle.innerHTML = `
      <span>📚 تمام گزینه‌های ارائه شده در این ساعت (${toPersianDigits(candidates.length)} درس)</span>
      <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: normal;">بر اساس چارت رسمی دانشکده</span>
    `;
    bodyEl.appendChild(sectionTitle);

    const listContainer = document.createElement('div');
    listContainer.className = 'slot-candidates-list';

    evaluatedCandidates.forEach(({ course, isExactSelected, takenWithOtherProf, classConflicts, examConflict }) => {
      const card = document.createElement('div');
      card.className = `slot-candidate-card ${isExactSelected ? 'is-already-selected' : ''} ${takenWithOtherProf ? 'is-disabled-prof' : ''}`;

      const sessionSummary = (course.sessions || []).map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' و ');
      const examSummary = course.exam && course.exam.date
        ? `${toPersianDigits(course.exam.date)} (ساعت ${toPersianDigits(course.exam.time)})`
        : 'اعلام نشده';

      let statusHtml = '';
      if (isExactSelected) {
        statusHtml = `<span style="color: var(--primary);">✓ این درس هم‌اکنون در برنامه هفتگی شما ثبت شده است.</span>`;
      } else if (takenWithOtherProf) {
        statusHtml = `<span style="color: var(--danger-text);">🚫 این درس قبلاً با استاد «${formatInstructor(takenWithOtherProf.instructor)}» انتخاب شده است. (طبق مقررات آموزشی اخذ همزمان یک درس با دو استاد مجاز نمی‌باشد)</span>`;
      } else if (classConflicts.length > 0) {
        statusHtml = `<span style="color: var(--danger-text);">⚠️ تداخل جلسه دوم: روز ${classConflicts[0].day} ساعت ${toPersianDigits(classConflicts[0].time)} با درس «${classConflicts[0].otherCourse}» تداخل دارد.</span>`;
      } else if (examConflict && examConflict.type === 'exact') {
        statusHtml = `<span style="color: var(--danger-text);">🚨 تداخل ساعت دقیق آزمون پایان‌ترم با درس «${examConflict.otherCourse}»</span>`;
      } else if (examConflict && examConflict.type === 'sameday') {
        statusHtml = `<span style="color: var(--warning-text);">⚠️ دو آزمون در یک روز: آزمون این درس همزمان با درس «${examConflict.otherCourse}» در یک روز است.</span>`;
      } else {
        statusHtml = `<span style="color: var(--success-text);">🛡️ تطابق زمانی کامل — بدون تداخل کلاسی یا امتحانی</span>`;
      }

      card.innerHTML = `
        <div class="scc-head">
          <div class="scc-name-wrap">
            <span class="scc-title">${course.name}</span>
            <span class="scc-instructor">استاد: <strong>${formatInstructor(course.instructor)}</strong></span>
          </div>
          <div style="display: flex; gap: 0.35rem; align-items: center;">
            <span class="scc-code-pill">${toPersianDigits(course.units || 0)} واحد</span>
            <span class="scc-code-pill">${toPersianDigits(course.code)}</span>
          </div>
        </div>
        <div class="scc-details">
          <div>🕒 جلسات هفتگی: <strong>${sessionSummary}</strong></div>
          <div>📝 آزمون پایان‌ترم: <strong>${examSummary}</strong></div>
          <div>👥 ظرفیت کلاس: <strong>${course.isGeneral ? `${toPersianDigits(course.registered || 0)} از ${toPersianDigits(course.capacity || 25)} نفر ${(course.capacity > 0 && (course.registered || 0) >= course.capacity) ? '<span style="color: var(--danger-text); font-weight: 800;">(🔴 ظرفیت تکمیل)</span>' : ((course.capacity > 0 && ((course.registered || 0) >= 20 || (course.capacity - (course.registered || 0)) <= 7)) ? '<span style="color: #fbbf24; font-weight: 800;">(⚡ شکار فوری)</span>' : '')}` : `${toPersianDigits(course.capacity || 25)} نفر`}</strong></div>
          <div>🎯 گروه چارت: <strong>${course.isGeneral ? `عمومی (${getClusterTitle(course.cluster)}) - ${course.gender === 'خانم' ? 'خواهران' : (course.gender === 'آقا' ? 'برادران' : 'مختلط')}` : (course.category === 'term5' ? 'دروس اصلی ترم ۵' : (course.category === 'elective' ? 'اختیاری تخصصی' : 'عمومی / سایر'))}</strong></div>
        </div>
        <div class="scc-conflict-status">
          ${statusHtml}
          ${(course.isGeneral && course.capacity > 0 && (course.registered || 0) >= course.capacity) ? '<div style="margin-top: 0.25rem; font-size: 0.76rem; color: #f87171; font-weight: 700;">🔴 ظرفیت این گروه توسط ترم‌بالایی‌ها پر شده است؛ اما می‌توانید در برنامه‌تان بگذارید و امیدوار باشید انصرافی بدهد.</div>' : ''}
          ${(course.isGeneral && course.capacity > 0 && (course.registered || 0) < course.capacity && ((course.registered || 0) >= 20 || (course.capacity - (course.registered || 0)) <= 7)) ? `<div style="margin-top: 0.25rem; font-size: 0.76rem; color: #fbbf24; font-weight: 700;">⚡ اولویت شکار فوری: تنها ${toPersianDigits(course.capacity - (course.registered || 0))} صندلی خالی باقی‌مانده است!</div>` : ''}
        </div>
        <div class="scc-actions">
          <button class="btn btn-outline btn-sm btn-inspect-cand" data-id="${course.id}">🔍 جزییات</button>
          ${isExactSelected
            ? `<button class="btn btn-outline btn-sm" disabled style="opacity: 0.6; cursor: not-allowed;">✓ در برنامه شماست</button>`
            : (takenWithOtherProf
                ? `<button class="btn btn-outline btn-sm btn-switch-prof-cand" style="color: var(--accent); border-color: var(--accent);" title="جابجایی استاد قبلی با این استاد" data-old-id="${takenWithOtherProf.id}" data-new-id="${course.id}">🔄 جابجایی به این استاد</button>
                   <button class="btn btn-danger btn-sm" disabled style="opacity: 0.5; cursor: not-allowed;" title="اخذ همزمان با دو استاد مجاز نیست">🚫 منع دو استاد</button>`
                : (course.isGeneral && course.capacity > 0 && (course.registered || 0) >= course.capacity
                    ? `<button class="btn btn-primary btn-sm btn-add-cand full-capacity-add" data-id="${course.id}" title="امیدوار باش انصرافی بده برداری">+ افزودن (امید به انصرافی)</button>`
                    : (course.isGeneral && course.capacity > 0 && ((course.registered || 0) >= 20 || (course.capacity - (course.registered || 0)) <= 7)
                        ? `<button class="btn btn-primary btn-sm btn-add-cand urgent-hunt-add" data-id="${course.id}" title="شکار فوری این گروه در گلستان">⚡ شکار فوری +</button>`
                        : `<button class="btn btn-primary btn-sm btn-add-cand" data-id="${course.id}">+ افزودن این درس</button>`
                      )
                  )
              )
          }
        </div>
      `;

      const addBtn = card.querySelector('.btn-add-cand');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          if (addCourse(course)) {
            closeEmptySlotModal();
          }
        });
      }

      const switchBtn = card.querySelector('.btn-switch-prof-cand');
      if (switchBtn) {
        switchBtn.addEventListener('click', () => {
          const oldIdx = selectedCourses.findIndex(sc => sc.id === takenWithOtherProf.id);
          if (oldIdx !== -1) {
            selectedCourses[oldIdx] = course;
            saveState();
            updateUI();
            closeEmptySlotModal();
            showToast(`استاد درس «${course.name}» با موفقیت به ${formatInstructor(course.instructor)} تغییر یافت.`, 'success');
          }
        });
      }

      const inspBtn = card.querySelector('.btn-inspect-cand');
      if (inspBtn) {
        inspBtn.addEventListener('click', () => {
          openInspector(course);
        });
      }

      listContainer.appendChild(card);
    });

    bodyEl.appendChild(listContainer);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeEmptySlotModal() {
    const modal = document.getElementById('emptySlotModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // --- مدیریت مودال دروس انتخابی و کپی کدهای گلستان ---
  function openSelectedModal() {
    const modal = document.getElementById('selectedCoursesModal');
    if (!modal) return;
    renderSelectedCoursesModal();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeSelectedModal() {
    const modal = document.getElementById('selectedCoursesModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function renderSelectedCoursesModal() {
    const tableBody = document.getElementById('selectedModalTableBody');
    const cardsMobileContainer = document.getElementById('selectedModalCardsMobile');
    const codesBox = document.getElementById('golestanCodesBox');
    const subtitle = document.getElementById('modalSubtitle');
    const totalUnitsEl = document.getElementById('modalTotalUnits');
    const conflictStatusEl = document.getElementById('modalConflictStatus');

    const totalUnits = selectedCourses.reduce((sum, c) => sum + (c.units || 0), 0);
    const { examConflicts, classConflicts } = analyzeConflicts();

    if (subtitle) {
      subtitle.textContent = `مجموع ${toPersianDigits(totalUnits)} واحد در ${toPersianDigits(selectedCourses.length)} درس انتخاب شده است`;
    }
    if (totalUnitsEl) {
      totalUnitsEl.textContent = `${toPersianDigits(totalUnits)} واحد`;
    }
    if (conflictStatusEl) {
      if (examConflicts.some(c => c.level === 'danger') || classConflicts.length > 0) {
        conflictStatusEl.textContent = '🚨 دارای تداخل بحرانی';
        conflictStatusEl.style.color = 'var(--danger-text)';
        conflictStatusEl.style.borderColor = 'var(--danger-border)';
      } else if (examConflicts.length > 0) {
        conflictStatusEl.textContent = '⚠️ دارای هشدار تراکم امتحان';
        conflictStatusEl.style.color = 'var(--warning-text)';
        conflictStatusEl.style.borderColor = 'var(--warning-border)';
      } else {
        conflictStatusEl.textContent = '🛡️ بدون تداخل';
        conflictStatusEl.style.color = 'var(--success-text)';
        conflictStatusEl.style.borderColor = 'var(--border-color)';
      }
    }

    // کدهای تجمیعی گلستان
    if (codesBox) {
      if (selectedCourses.length === 0) {
        codesBox.textContent = '(هنوز درسی انتخاب نشده است — از فهرست کاتالوگ یا دکمه چینش خودکار درس اضافه کنید)';
      } else {
        const formattedCodes = selectedCourses.map(c => `${c.code}\t(${c.name})`).join('\n');
        codesBox.textContent = formattedCodes;
      }
    }

    // جدول دسکتاپ دروس
    if (tableBody) {
      tableBody.innerHTML = '';
      if (selectedCourses.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">
              هنوز هیچ درسی به برنامه اضافه نشده است.
            </td>
          </tr>
        `;
      } else {
        selectedCourses.forEach(course => {
          const tr = document.createElement('tr');
          const sessionSummary = course.sessions && course.sessions.length > 0
            ? course.sessions.map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' | ')
            : 'ندارد';
          const examSummary = course.exam && course.exam.date
            ? `${toPersianDigits(course.exam.date)} (${toPersianDigits(course.exam.time)})`
            : 'نامشخص';

          tr.innerHTML = `
            <td><strong>${course.name}</strong></td>
            <td><code style="font-weight:700; color:var(--primary);">${toPersianDigits(course.code)}</code></td>
            <td>${toPersianDigits(course.units)} واحد</td>
            <td>${formatInstructor(course.instructor)}</td>
            <td>${sessionSummary}</td>
            <td>${examSummary}</td>
            <td>
              <button class="btn-copy-single-code" data-code="${course.code}" data-name="${course.name}" title="کپی کد اختصاصی این درس برای گلستان">
                <span>📋</span> <span>کپی کد</span>
              </button>
            </td>
            <td>
              <button class="modal-remove-btn" data-id="${course.id}" title="حذف این درس از برنامه">حذف ✕</button>
            </td>
          `;

          const copyBtn = tr.querySelector('.btn-copy-single-code');
          if (copyBtn) {
            copyBtn.addEventListener('click', () => {
              copySingleCourseCode(course.code, course.name, copyBtn);
            });
          }

          const removeBtn = tr.querySelector('.modal-remove-btn');
          if (removeBtn) {
            removeBtn.addEventListener('click', () => {
              removeCourse(course.id);
              renderSelectedCoursesModal();
            });
          }

          tableBody.appendChild(tr);
        });
      }
    }

    // کارت‌های لمسی موبایل دروس
    if (cardsMobileContainer) {
      cardsMobileContainer.innerHTML = '';
      if (selectedCourses.length === 0) {
        cardsMobileContainer.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 2rem 1rem; border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
            هنوز هیچ درسی به برنامه اضافه نشده است.
          </div>
        `;
      } else {
        selectedCourses.forEach(course => {
          const sessionSummary = course.sessions && course.sessions.length > 0
            ? course.sessions.map(s => `${s.day} ${toPersianDigits(s.time)}`).join(' | ')
            : 'ندارد';
          const examSummary = course.exam && course.exam.date
            ? `${toPersianDigits(course.exam.date)} (${toPersianDigits(course.exam.time)})`
            : 'نامشخص';

          const card = document.createElement('div');
          card.className = 'mobile-selected-card';
          card.innerHTML = `
            <div class="msc-head">
              <span class="msc-title">${course.name}</span>
              <span class="msc-units-badge">${toPersianDigits(course.units)} واحد</span>
            </div>
            <div class="msc-meta">
              <div class="msc-code-row">
                <span>🔢 کد گروه:</span>
                <code>${toPersianDigits(course.code)}</code>
              </div>
              <div>👨‍🏫 استاد: ${formatInstructor(course.instructor)}</div>
              <div>🕒 زمان کلاس: ${sessionSummary}</div>
              <div>📝 امتحان: ${examSummary}</div>
            </div>
            <div class="msc-actions">
              <button class="btn-copy-single-code" data-code="${course.code}" data-name="${course.name}" title="کپی کد این درس">
                <span>📋</span> <span>کپی کد (${toPersianDigits(course.code)})</span>
              </button>
              <button class="modal-remove-btn" data-id="${course.id}">حذف ✕</button>
            </div>
          `;

          const copyBtn = card.querySelector('.btn-copy-single-code');
          if (copyBtn) {
            copyBtn.addEventListener('click', () => {
              copySingleCourseCode(course.code, course.name, copyBtn);
            });
          }

          const removeBtn = card.querySelector('.modal-remove-btn');
          if (removeBtn) {
            removeBtn.addEventListener('click', () => {
              removeCourse(course.id);
              renderSelectedCoursesModal();
            });
          }

          cardsMobileContainer.appendChild(card);
        });
      }
    }
  }

  // --- کپی کد مجزای یک درس خاص جهت ثبت‌نام در گلستان ---
  function copySingleCourseCode(code, name, btn) {
    if (!code) return;

    const onSuccess = () => {
      if (btn) {
        const originalHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<span>✅</span> <span>کپی شد!</span>';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
        }, 2000);
      }
      showToast(`کد ${toPersianDigits(code)} (${name || ''}) کپی شد؛ حالا بشین پای رفرش زدن سرور عهد بوق بهستان!`, 'success');
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(onSuccess).catch(() => {
        fallbackCopy(code);
        onSuccess();
      });
    } else {
      fallbackCopy(code);
      onSuccess();
    }
  }

  function copyGolestanCodes() {
    if (selectedCourses.length === 0) {
      showToast('هنوز درسی انتخاب نکرده‌اید که کد گلستانش تولید بشه!', 'info');
      return;
    }

    const pureCodes = selectedCourses.map(c => c.code).join('\n');
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pureCodes).then(() => {
        onCopySuccess();
      }).catch(() => {
        fallbackCopy(pureCodes);
      });
    } else {
      fallbackCopy(pureCodes);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      onCopySuccess();
    } catch (e) {
      showToast('خطا در کپی خودکار؛ لطفاً متن کادر را دستی کپی کنید.', 'danger');
    }
    document.body.removeChild(ta);
  }

  function onCopySuccess() {
    const icon = document.getElementById('copyBtnIcon');
    const text = document.getElementById('copyBtnText');
    if (icon) icon.textContent = '✅';
    if (text) text.textContent = 'کپی شد!';
    setTimeout(() => {
      if (icon) icon.textContent = '📑';
      if (text) text.textContent = 'کپی یکجای همه کدها';
    }, 2000);

    showToast('کپی شد؛ حالا بشین پای رفرش زدن سرور عهد بوق بهستان،', 'success');
  }

  // --- تشخیص هوشمند دستگاه و مدیریت نمای موبایل / دسکتاپ ---
  function isDeviceMobile() {
    // اول: بررسی انتخاب دستی کاربر (دکمه سوئیچ حالت)
    if (deviceMode === 'mobile') return true;
    if (deviceMode === 'desktop') return false;
    // حالت اتوماتیک: تشخیص از روی User Agent
    // روی گوشی واقعی یا تبلت → موبایل
    // روی مرورگر دسکتاپ (حتی با پنجره باریک) → دسکتاپ
    const isMobileUA = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobileUA;
  }

  function applyDeviceMode() {
    const isMobile = isDeviceMobile();
    document.documentElement.setAttribute('data-device', isMobile ? 'mobile' : 'desktop');
    document.documentElement.setAttribute('data-active-tab', activeMobileTab);

    const toggleBtn = document.getElementById('deviceModeToggleBtn');
    const toggleIcon = document.getElementById('deviceModeIcon');
    const toggleText = document.getElementById('deviceModeText');
    if (toggleBtn && toggleIcon && toggleText) {
      if (isMobile) {
        toggleIcon.textContent = '💻';
        toggleText.textContent = 'نمای دسکتاپ';
        toggleBtn.title = 'سوئیچ به نمای بزرگ و چندستونه دسکتاپ';
      } else {
        toggleIcon.textContent = '📱';
        toggleText.textContent = 'نمای موبایل';
        toggleBtn.title = 'سوئیچ به نمای بهینه‌شده لمسی برای موبایل';
      }
    }
  }

  function switchMobileTab(tabId) {
    if (tabId === 'my-courses') {
      openSelectedModal();
      return;
    }
    activeMobileTab = tabId;
    document.documentElement.setAttribute('data-active-tab', tabId);

    const navItems = document.querySelectorAll('.mobile-nav-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- به‌روزرسانی تابلو راهنمای چارت ترم ۵ ---
  function updateGuideBoard() {
    const cards = document.querySelectorAll('.guide-course-card');
    cards.forEach(card => {
      const code = card.getAttribute('data-code');
      const isPicked = selectedCourses.some(c => c.code.startsWith(code));
      if (isPicked) {
        card.classList.add('added');
      } else {
        card.classList.remove('added');
      }
    });
  }

  // --- به‌روزرسانی جامع رابط کاربری (UI) ---
  function updateUI() {
    const { examConflicts, classConflicts } = analyzeConflicts();

    const maxUnits = isHonorStudent ? 24 : 20;
    const totalUnits = selectedCourses.reduce((sum, c) => sum + (c.units || 0), 0);
    const unitsEl = document.getElementById('headerTotalUnits');
    if (unitsEl) {
      unitsEl.textContent = `${toPersianDigits(totalUnits)} / ${toPersianDigits(maxUnits)} واحد`;
      if (totalUnits > maxUnits) {
        unitsEl.parentElement.classList.remove('accent');
        unitsEl.parentElement.classList.add('conflict-err');
      } else {
        unitsEl.parentElement.classList.add('accent');
        unitsEl.parentElement.classList.remove('conflict-err');
      }
    }

    const honorBtn = document.getElementById('honorToggleBtn');
    if (honorBtn) {
      honorBtn.innerHTML = isHonorStudent
        ? '<span>سقف مجاز: ۲۴ واحد</span>'
        : '<span>سقف مجاز: ۲۰ واحد</span>';
      honorBtn.className = isHonorStudent ? 'stat-chip accent' : 'stat-chip';
    }

    document.getElementById('headerTotalCourses').textContent = `${toPersianDigits(selectedCourses.length)} درس`;

    const conflictChip = document.getElementById('headerConflictChip');
    const dangerExams = examConflicts.filter(c => c.level === 'danger');
    const warnExams = examConflicts.filter(c => c.level === 'warning');

    if (dangerExams.length > 0) {
      conflictChip.className = 'stat-chip conflict-err';
      conflictChip.innerHTML = `<span>[خطای بحرانی]</span> <span>${toPersianDigits(dangerExams.length)} تداخل هم‌زمان ساعت امتحان</span>`;
    } else if (warnExams.length > 0) {
      conflictChip.className = 'stat-chip conflict-warn';
      conflictChip.innerHTML = `<span>[هشدار تراکم]</span> <span>${toPersianDigits(warnExams.length)} تداخل روزانه امتحان</span>`;
    } else {
      conflictChip.className = 'stat-chip';
      conflictChip.innerHTML = `<span>وضعیت تداخل:</span> <span>بدون تداخل</span>`;
    }

    // به‌روزرسانی نشانگر دکمه شناور دروس انتخابی
    const floatingUnits = document.getElementById('floatingSelectedUnits');
    const floatingCount = document.getElementById('floatingSelectedCount');
    if (floatingUnits) floatingUnits.textContent = toPersianDigits(totalUnits);
    if (floatingCount) floatingCount.textContent = toPersianDigits(selectedCourses.length);

    // به‌روزرسانی نشانگرهای نوار ناوبری موبایل
    const mnCatalogBadge = document.getElementById('mnCatalogBadge');
    const mnSelectedBadge = document.getElementById('mnSelectedBadge');
    if (mnCatalogBadge) mnCatalogBadge.textContent = toPersianDigits(allCourses.filter(c => c.isEntry403Allowed).length);
    if (mnSelectedBadge) mnSelectedBadge.textContent = toPersianDigits(totalUnits);

    applyDeviceMode();

    // به‌روزرسانی مودال در صورت باز بودن
    const selectedModal = document.getElementById('selectedCoursesModal');
    if (selectedModal && selectedModal.style.display !== 'none') {
      renderSelectedCoursesModal();
    }

    renderCatalog();
    renderDailySchedule(classConflicts);
    renderMatrixSchedule(classConflicts);
    renderLinearExamSchedule(examConflicts);
    updateGuideBoard();

    if (activeInspectorCourse) {
      renderInspector();
    }
  }

  // --- مقداردهی اولیه رویدادها ---
  function initEvents() {
    // دکمه تغییر دستی حالت نمایش (موبایل / دسکتاپ)
    const deviceToggleBtn = document.getElementById('deviceModeToggleBtn');
    if (deviceToggleBtn) {
      deviceToggleBtn.addEventListener('click', () => {
        const currentIsMobile = isDeviceMobile();
        deviceMode = currentIsMobile ? 'desktop' : 'mobile';
        localStorage.setItem('device_view_mode', deviceMode);
        applyDeviceMode();
        showToast(
          deviceMode === 'mobile'
            ? '📱 به نمای بهینه‌شده موبایل منتقل شدید (با نوار ناوبری پایین صفحه).'
            : '💻 به نمای چندستونه و وسیع دسکتاپ بازگشتید.',
          'info'
        );
      });
    }

    // رویداد کلیک تب‌های نوار ناوبری موبایل
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        switchMobileTab(tab);
      });
    });

    // فیلتر سریع روزها در جدول هفتگی (مخصوص موبایل)
    const mobileDayChips = document.querySelectorAll('.mobile-day-chip');
    mobileDayChips.forEach(chip => {
      chip.addEventListener('click', () => {
        mobileDayChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeMobileDay = chip.getAttribute('data-day');
        renderDailySchedule(analyzeConflicts().classConflicts);
      });
    });

    // تشخیص خودکار تغییر سایز پنجره
    window.addEventListener('resize', () => {
      if (deviceMode === 'auto') {
        applyDeviceMode();
      }
    });

    const searchInput = document.getElementById('courseSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderCatalog();
      });
    }

    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.getAttribute('data-filter');

        // اگر کاربر برای اولین بار تب دروس عمومی را باز می‌کند، مودال تعیین جنسیت و کارنامه باز شود
        if (activeFilter === 'general' && localStorage.getItem('general_passed_prompted') !== 'true') {
          openGeneralPassedModal();
        }

        renderCatalog();
      });
    });

    // اتصال دکمه‌های مودال کارنامه عمومی و انتخاب جنسیت
    const closeGeneralPassedBtn = document.getElementById('closeGeneralPassedBtn');
    if (closeGeneralPassedBtn) closeGeneralPassedBtn.addEventListener('click', closeGeneralPassedModal);

    const saveGeneralPassedBtn = document.getElementById('saveGeneralPassedBtn');
    if (saveGeneralPassedBtn) saveGeneralPassedBtn.addEventListener('click', saveGeneralPassed);

    const genderBtnFemale = document.getElementById('genderBtnFemale');
    const genderBtnMale = document.getElementById('genderBtnMale');
    if (genderBtnFemale && genderBtnMale) {
      genderBtnFemale.addEventListener('click', () => {
        studentGender = 'خانم';
        genderBtnFemale.classList.add('active');
        genderBtnMale.classList.remove('active');
      });
      genderBtnMale.addEventListener('click', () => {
        studentGender = 'آقا';
        genderBtnMale.classList.add('active');
        genderBtnFemale.classList.remove('active');
      });
    }

    // دکمه انتخاب خودکار دروس ترم ۵
    const autoPickBtn = document.getElementById('autoPickTerm5Btn');
    if (autoPickBtn) {
      autoPickBtn.addEventListener('click', autoPickTerm5);
    }

    // دکمه سوئیچ وضعیت معدل الف (سقف ۲۴ یا ۲۰ واحد)
    const honorBtn = document.getElementById('honorToggleBtn');
    if (honorBtn) {
      honorBtn.addEventListener('click', () => {
        isHonorStudent = !isHonorStudent;
        localStorage.setItem('is_honor_student', isHonorStudent ? 'true' : 'false');
        updateUI();
        showToast(
          isHonorStudent
            ? 'باشه بتمن؛ بهمن‌ماه پای نمرات گریه کردی تقصیر سامانه نیست!'
            : 'عقب‌نشینی تاکتیکی به نفع بقا و سلامت روان.',
          'info'
        );
      });
    }

    // کلیک روی کارت‌های تابلو راهنما
    const guideCards = document.querySelectorAll('.guide-course-card');
    guideCards.forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-code');
        const course = allCourses.find(c => c.code.startsWith(code) && c.isEntry403Allowed);
        if (course) {
          openInspector(course);
        }
      });
    });

    // دکمه جمع‌کردن / بازکردن چارت راهنمای ترم ۵
    const toggleGuideBtn = document.getElementById('toggleGuideBoardBtn');
    const guideBoardEl = document.querySelector('.guide-board');
    const toggleGuideIcon = document.getElementById('toggleGuideIcon');
    const toggleGuideText = document.getElementById('toggleGuideText');

    // بازیابی وضعیت قبلی چارت
    const isGuideCollapsed = localStorage.getItem('guide_board_collapsed') === 'true';
    if (isGuideCollapsed && guideBoardEl) {
      guideBoardEl.classList.add('is-collapsed');
      if (toggleGuideIcon) toggleGuideIcon.textContent = '⌄';
      if (toggleGuideText) toggleGuideText.textContent = 'مشاهده چارت ترم ۵';
    }

    if (toggleGuideBtn && guideBoardEl) {
      toggleGuideBtn.addEventListener('click', () => {
        const collapsed = guideBoardEl.classList.toggle('is-collapsed');
        localStorage.setItem('guide_board_collapsed', collapsed ? 'true' : 'false');
        if (toggleGuideIcon) toggleGuideIcon.textContent = collapsed ? '⌄' : '⌃';
        if (toggleGuideText) toggleGuideText.textContent = collapsed ? 'مشاهده چارت ترم ۵' : 'جمع‌کردن چارت';
      });
    }

    // فیلتر تقویم امتحانات (فقط روزهای امتحان من / کل تقویم بهمن)
    const examFilterMyBtn = document.getElementById('examFilterMyExams');
    const examFilterAllBtn = document.getElementById('examFilterAllDays');
    if (examFilterMyBtn && examFilterAllBtn) {
      examFilterMyBtn.addEventListener('click', () => {
        examCalendarFilter = 'myExams';
        renderLinearExamSchedule(analyzeConflicts().examConflicts);
      });
      examFilterAllBtn.addEventListener('click', () => {
        examCalendarFilter = 'all';
        renderLinearExamSchedule(analyzeConflicts().examConflicts);
      });
    }

    // دکمه شناور دروس انتخابی به صورت هوشمند در تابع initDraggableFloatingSelected مدیریت می‌شود

    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModalFooterBtn = document.getElementById('closeModalFooterBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeSelectedModal);
    if (closeModalFooterBtn) closeModalFooterBtn.addEventListener('click', closeSelectedModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeSelectedModal);

    const closeSwitchGroupBtn = document.getElementById('closeSwitchGroupBtn');
    const switchGroupBackdrop = document.getElementById('switchGroupBackdrop');
    if (closeSwitchGroupBtn) closeSwitchGroupBtn.addEventListener('click', closeSwitchGroupModal);
    if (switchGroupBackdrop) switchGroupBackdrop.addEventListener('click', closeSwitchGroupModal);

    const closeEmptySlotBtn = document.getElementById('closeEmptySlotBtn');
    const emptySlotBackdrop = document.getElementById('emptySlotBackdrop');
    if (closeEmptySlotBtn) closeEmptySlotBtn.addEventListener('click', closeEmptySlotModal);
    if (emptySlotBackdrop) emptySlotBackdrop.addEventListener('click', closeEmptySlotModal);

    const copyGolestanBtn = document.getElementById('copyGolestanBtn');
    const golestanCodesBox = document.getElementById('golestanCodesBox');
    if (copyGolestanBtn) copyGolestanBtn.addEventListener('click', copyGolestanCodes);
    if (golestanCodesBox) golestanCodesBox.addEventListener('click', copyGolestanCodes);

    const printModalBtn = document.getElementById('printModalBtn');
    if (printModalBtn) {
      printModalBtn.addEventListener('click', () => {
        closeSelectedModal();
        setTimeout(() => window.print(), 150);
      });
    }

    // بستن مودال‌ها با کلید Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSelectedModal();
        closeSwitchGroupModal();
        closeEmptySlotModal();
        closeGeneralPassedModal();
        closeInspector();
      }
    });

    const toggleDaily = document.getElementById('toggleDailyView');
    const toggleMatrix = document.getElementById('toggleMatrixView');
    const dailyViewEl = document.getElementById('dailyScheduleFlow');
    const matrixViewEl = document.getElementById('matrixScheduleView');

    if (toggleDaily && toggleMatrix && dailyViewEl && matrixViewEl) {
      toggleDaily.addEventListener('click', () => {
        toggleDaily.classList.add('active');
        toggleMatrix.classList.remove('active');
        dailyViewEl.style.display = 'flex';
        matrixViewEl.style.display = 'none';
        currentViewMode = 'daily';
      });

      toggleMatrix.addEventListener('click', () => {
        toggleMatrix.classList.add('active');
        toggleDaily.classList.remove('active');
        dailyViewEl.style.display = 'none';
        matrixViewEl.style.display = 'block';
        currentViewMode = 'matrix';
      });
    }

    const closeInspBtn = document.getElementById('closeInspectorBtn');
    if (closeInspBtn) {
      closeInspBtn.addEventListener('click', closeInspector);
    }

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (selectedCourses.length === 0) {
          showToast('برنامه درسی در حال حاضر خالیه؛ نیازی به تظاهر به استرس و پاک‌سازی نیست.', 'info');
          return;
        }
        if (confirm('مطمئنی می‌خوای کل برنامه رو پاک کنی؟ بعداً نگی نگفتی، ظرفیت‌ها روی هوا میره و دستت خالی می‌مونه!')) {
          selectedCourses = [];
          saveState();
          updateUI();
          closeInspector();
          showToast('زدید کل برنامه رو با خاک یکسان کردید. تبریک، حالا برید پای سامانه گلستان اشک بریزید.', 'info');
        }
      });
    }

    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      const sunSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
      const moonSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

      const savedTheme = localStorage.getItem('app_theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeToggleBtn.innerHTML = savedTheme === 'dark' ? sunSvg : moonSvg;

      themeToggleBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('app_theme', next);
        themeToggleBtn.innerHTML = next === 'dark' ? sunSvg : moonSvg;
      });
    }
  }

  // --- راه‌اندازی برنامه ---
  // --- قابلیت شناور و جابجایی دکمه دروس انتخابی من (Draggable Widget) ---
  function initDraggableFloatingSelected() {
    const container = document.getElementById('floatingSelectedContainer');
    const handle = document.getElementById('floatingDragHandle');
    const btn = document.getElementById('floatingSelectedBtn');
    if (!container) return;

    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    const resetBtn = document.getElementById('floatingResetBtn');

    // تابع بازنشانی موقعیت ویجت به پیش‌فرض
    function resetFloatingPosition() {
      localStorage.removeItem('floating_selected_pos');
      container.style.left = '';
      container.style.top = '';
      container.style.bottom = '';
      container.style.right = '';
      container.style.transform = '';
      delete container.dataset.inspectorLifted;
      container.classList.remove('is-dragged');
      if (document.body.classList.contains('inspector-open')) {
        adjustFloatingWidgetForInspector(true);
      }
      showToast('موقعیت دکمه شناور به گوشه پایین صفحه بازنشانی شد.', 'info');
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetFloatingPosition();
      });
    }

    // بارگذاری موقعیت ذخیره‌شده از LocalStorage
    try {
      const savedPos = localStorage.getItem('floating_selected_pos');
      if (savedPos) {
        const { left, top } = JSON.parse(savedPos);
        if (typeof left === 'number' && typeof top === 'number') {
          const maxLeft = Math.max(10, window.innerWidth - (container.offsetWidth || 230) - 10);
          const maxTop = Math.max(10, window.innerHeight - (container.offsetHeight || 52) - 10);
          const clampedLeft = Math.min(Math.max(10, left), maxLeft);
          const clampedTop = Math.min(Math.max(10, top), maxTop);

          container.style.left = `${clampedLeft}px`;
          container.style.top = `${clampedTop}px`;
          container.style.bottom = 'auto';
          container.style.right = 'auto';
          container.classList.add('is-dragged');
        }
      }
    } catch (e) {
      console.warn('Error reading saved floating position:', e);
    }

    function onPointerDown(e) {
      if (e.target.closest('#floatingResetBtn')) return;
      if (e.type === 'mousedown' && e.button !== 0) return;

      isDragging = true;
      hasMoved = false;

      // ریست ترانسفورم موقت بالا رفتن جهت ثبت موقعیت دقیق
      if (container.dataset.inspectorLifted === 'true') {
        container.style.transform = '';
        delete container.dataset.inspectorLifted;
      }

      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;

      startX = clientX;
      startY = clientY;

      const rect = container.getBoundingClientRect();
      startLeft = rect.left;
      startTop = rect.top;

      container.classList.add('is-dragging');

      document.addEventListener('mousemove', onPointerMove, { passive: false });
      document.addEventListener('mouseup', onPointerUp);
      document.addEventListener('touchmove', onPointerMove, { passive: false });
      document.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDragging) return;

      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;

      const dx = clientX - startX;
      const dy = clientY - startY;

      if (!hasMoved && Math.hypot(dx, dy) > 4) {
        hasMoved = true;
      }

      if (hasMoved) {
        if (e.cancelable) e.preventDefault();

        const containerWidth = container.offsetWidth || 230;
        const containerHeight = container.offsetHeight || 52;

        const maxLeft = Math.max(10, window.innerWidth - containerWidth - 10);
        const maxTop = Math.max(10, window.innerHeight - containerHeight - 10);

        const newLeft = Math.min(Math.max(10, startLeft + dx), maxLeft);
        const newTop = Math.min(Math.max(10, startTop + dy), maxTop);

        container.style.left = `${newLeft}px`;
        container.style.top = `${newTop}px`;
        container.style.bottom = 'auto';
        container.style.right = 'auto';
        container.classList.add('is-dragged');
      }
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      container.classList.remove('is-dragging');

      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);

      if (hasMoved) {
        try {
          const rect = container.getBoundingClientRect();
          localStorage.setItem('floating_selected_pos', JSON.stringify({
            left: Math.round(rect.left),
            top: Math.round(rect.top)
          }));
        } catch (e) {
          console.warn('Error saving floating pos:', e);
        }

        // اگر اینسپکتور باز است، بررسی مجدد برای بالا بردن در موقعیت جدید
        if (document.body.classList.contains('inspector-open')) {
          adjustFloatingWidgetForInspector(true);
        }
      }
    }

    // اتصال رویدادهای Drag به کل کانتینر
    container.addEventListener('mousedown', onPointerDown);
    container.addEventListener('touchstart', onPointerDown, { passive: true });

    // هندل کلیک دکمه (فقط اگر جابجایی انجام نشده باشد)
    if (btn) {
      btn.addEventListener('click', (e) => {
        if (hasMoved) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        openSelectedModal();
      });
    }

    // بازنشانی به موقعیت پیش‌فرض با دوبار کلیک روی دستگیره یا نگه داشتن
    if (handle) {
      handle.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        resetFloatingPosition();
      });
    }

    // بررسی محدوده صفحه در زمان تغییر اندازه مرورگر
    window.addEventListener('resize', () => {
      if (!container.classList.contains('is-dragged')) return;
      const rect = container.getBoundingClientRect();
      const maxLeft = Math.max(10, window.innerWidth - rect.width - 10);
      const maxTop = Math.max(10, window.innerHeight - rect.height - 10);

      const clampedLeft = Math.min(Math.max(10, rect.left), maxLeft);
      const clampedTop = Math.min(Math.max(10, rect.top), maxTop);

      container.style.left = `${clampedLeft}px`;
      container.style.top = `${clampedTop}px`;

      if (document.body.classList.contains('inspector-open')) {
        adjustFloatingWidgetForInspector(true);
      }
    });
  }

  function bootApp() {
    loadState();
    initEvents();
    initDraggableFloatingSelected();
    updateUI();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedDevice = localStorage.getItem('device_view_mode');
    const savedHonor = localStorage.getItem('is_honor_student');

    if (savedDevice) {
      // کاربر قبلاً تنظیمات اولیه را ثبت کرده — اعمال مستقیم و بوت
      deviceMode = savedDevice;
      if (savedHonor !== null) {
        isHonorStudent = savedHonor === 'true';
      }
      bootApp();
    } else {
      // اولین بازدید — نمایش پنجره تنظیمات اولیه (دستگاه اول، سقف واحد دوم)
      const modal = document.getElementById('deviceChoiceModal');
      if (modal) {
        modal.style.display = 'flex';

        // پیشنهاد هوشمند نوع دستگاه بر اساس سیستم کاربر
        const isMobileUA = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        let selectedDevice = isMobileUA ? 'mobile' : 'desktop';
        let selectedHonor = true; // پیش‌فرض: سقف ۲۴ واحد آزاد

        const btnDesktop = document.getElementById('choiceDesktop');
        const btnMobile = document.getElementById('choiceMobile');
        const btnHonor24 = document.getElementById('choiceHonor24');
        const btnHonor20 = document.getElementById('choiceHonor20');
        const btnConfirm = document.getElementById('btnConfirmSetup');

        // وضعیت اولیه انتخاب دستگاه
        if (btnDesktop && btnMobile) {
          if (selectedDevice === 'mobile') {
            btnMobile.classList.add('active');
            btnDesktop.classList.remove('active');
          } else {
            btnDesktop.classList.add('active');
            btnMobile.classList.remove('active');
          }

          btnDesktop.addEventListener('click', () => {
            selectedDevice = 'desktop';
            btnDesktop.classList.add('active');
            btnMobile.classList.remove('active');
          });

          btnMobile.addEventListener('click', () => {
            selectedDevice = 'mobile';
            btnMobile.classList.add('active');
            btnDesktop.classList.remove('active');
          });
        }

        // رویدادهای انتخاب سقف واحد (سقف ۲۰ یا ۲۴ واحد)
        if (btnHonor24 && btnHonor20) {
          btnHonor24.addEventListener('click', () => {
            selectedHonor = true;
            btnHonor24.classList.add('active');
            btnHonor20.classList.remove('active');
          });

          btnHonor20.addEventListener('click', () => {
            selectedHonor = false;
            btnHonor20.classList.add('active');
            btnHonor24.classList.remove('active');
          });
        }

        function finalizeSetup() {
          deviceMode = selectedDevice;
          isHonorStudent = selectedHonor;
          localStorage.setItem('device_view_mode', selectedDevice);
          localStorage.setItem('is_honor_student', selectedHonor ? 'true' : 'false');
          modal.style.display = 'none';
          bootApp();
        }

        if (btnConfirm) {
          btnConfirm.addEventListener('click', finalizeSetup);
        }
      } else {
        deviceMode = 'auto';
        bootApp();
      }
    }
  });

})();
