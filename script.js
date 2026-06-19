// ===== FITNESS PLAN GENERATOR =====

const GOAL_LABELS = {
  strength: 'Сила и масса',
  weight_loss: 'Похудение',
  endurance: 'Выносливость',
  general: 'Общая физподготовка'
};

const LEVEL_LABELS = {
  beginner: 'Начинающий',
  intermediate: 'Средний',
  advanced: 'Продвинутый'
};

// Exercise database by muscle group
const EXERCISE_DB = {
  chest: {
    name: 'Грудь',
    exercises: [
      { name: 'Жим лёжа со штангой', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Жим гантелей лёжа', tag: 'Базовое', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Жим в наклоне', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Разводка гантелей', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Отжимания от пола', tag: 'Базовое', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Кроссовер в блоке', tag: 'Изоляция', equipment: ['gym'] },
      { name: 'Отжимания на брусьях', tag: 'Базовое', equipment: ['gym','barbell','dumbbells','bodyweight'] },
    ]
  },
  back: {
    name: 'Спина',
    exercises: [
      { name: 'Становая тяга', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Подтягивания', tag: 'Базовое', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Тяга штанги в наклоне', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Тяга гантели одной рукой', tag: 'Базовое', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Тяга верхнего блока', tag: 'Базовое', equipment: ['gym'] },
      { name: 'Тяга нижнего блока', tag: 'Базовое', equipment: ['gym'] },
      { name: 'Гиперэкстензия', tag: 'Изоляция', equipment: ['gym'] },
    ]
  },
  legs: {
    name: 'Ноги',
    exercises: [
      { name: 'Приседания со штангой', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Жим ногами', tag: 'Базовое', equipment: ['gym'] },
      { name: 'Выпады', tag: 'Базовое', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Румынская тяга', tag: 'Базовое', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Сгибание ног в тренажёре', tag: 'Изоляция', equipment: ['gym'] },
      { name: 'Разгибание ног в тренажёре', tag: 'Изоляция', equipment: ['gym'] },
      { name: 'Подъём на носки', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Приседания без веса', tag: 'Базовое', equipment: ['bodyweight'] },
    ]
  },
  shoulders: {
    name: 'Плечи',
    exercises: [
      { name: 'Жим штанги стоя', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Жим гантелей сидя', tag: 'Базовое', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Махи гантелями в стороны', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Тяга штанги к подбородку', tag: 'Базовое', equipment: ['gym','barbell'] },
      { name: 'Разведение гантелей в наклоне', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
    ]
  },
  biceps: {
    name: 'Бицепс',
    exercises: [
      { name: 'Сгибание со штангой на бицепс', tag: 'Изоляция', equipment: ['gym','barbell'] },
      { name: 'Сгибание с гантелями на бицепс', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Молотки', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Концентрированное сгибание', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
    ]
  },
  triceps: {
    name: 'Трицепс',
    exercises: [
      { name: 'Разгибание на трицепс в блоке', tag: 'Изоляция', equipment: ['gym'] },
      { name: 'Французский жим', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
      { name: 'Отжимания на брусьях', tag: 'Базовое', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Разгибание гантели из-за головы', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells'] },
    ]
  },
  core: {
    name: 'Пресс',
    exercises: [
      { name: 'Скручивания', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Планка', tag: 'Стабилизация', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Подъём ног в висе', tag: 'Изоляция', equipment: ['gym','barbell','dumbbells','bodyweight'] },
      { name: 'Боковая планка', tag: 'Стабилизация', equipment: ['gym','barbell','dumbbells','bodyweight'] },
    ]
  }
};

// Workout templates by goal and split
function getWorkoutSplit(goal, days, equipment, level) {
  if (days == 3) {
    if (goal === 'strength' || goal === 'general') {
      return [
        { day: 'День A', name: 'Жим + Плечи', muscles: ['chest','shoulders','triceps'] },
        { day: 'День B', name: 'Тяга + Бицепс', muscles: ['back','biceps','core'] },
        { day: 'День C', name: 'Ноги', muscles: ['legs','core'] },
      ];
    } else if (goal === 'weight_loss' || goal === 'endurance') {
      return [
        { day: 'День A', name: 'Верх тела + Кардио', muscles: ['chest','back','shoulders'], cardio: true },
        { day: 'День B', name: 'Ноги + Кардио', muscles: ['legs','core'], cardio: true },
        { day: 'День C', name: 'Всё тело + ВИИТ', muscles: ['chest','back','legs','core'], cardio: true },
      ];
    }
  } else if (days == 4) {
    return [
      { day: 'День A', name: 'Грудь + Трицепс', muscles: ['chest','triceps','core'] },
      { day: 'День B', name: 'Спина + Бицепс', muscles: ['back','biceps'] },
      { day: 'День C', name: 'Ноги', muscles: ['legs','core'] },
      { day: 'День D', name: 'Плечи + Руки', muscles: ['shoulders','biceps','triceps'] },
    ];
  } else {
    return [
      { day: 'День A', name: 'Грудь + Плечи', muscles: ['chest','shoulders','triceps'] },
      { day: 'День B', name: 'Спина + Бицепс', muscles: ['back','biceps'] },
      { day: 'День C', name: 'Ноги', muscles: ['legs','core'] },
      { day: 'День D', name: 'Грудь + Трицепс', muscles: ['chest','triceps'] },
      { day: 'День E', name: 'Спина + Плечи', muscles: ['back','shoulders','core'] },
    ];
  }
}

function getExercisesForMuscle(muscle, equipment, userSelected, count) {
  const group = EXERCISE_DB[muscle];
  if (!group) return [];

  const available = group.exercises.filter(e => e.equipment.includes(equipment));
  const preferred = available.filter(e => userSelected.includes(e.name));
  const rest = available.filter(e => !userSelected.includes(e.name));

  return [...preferred, ...rest].slice(0, count);
}

function getSetsReps(muscle, goal, phase, level) {
  const isCompound = ['chest','back','legs'].includes(muscle);

  const configs = {
    strength: {
      1: { sets: isCompound ? 4 : 3, reps: isCompound ? '6–8' : '10–12', rest: isCompound ? '3 мин' : '2 мин' },
      2: { sets: isCompound ? 5 : 4, reps: isCompound ? '4–6' : '8–10', rest: isCompound ? '4 мин' : '2 мин' },
      3: { sets: isCompound ? 5 : 3, reps: isCompound ? '3–5' : '6–8',  rest: isCompound ? '5 мин' : '3 мин' },
    },
    weight_loss: {
      1: { sets: 3, reps: '12–15', rest: '60 сек' },
      2: { sets: 3, reps: '15–20', rest: '45 сек' },
      3: { sets: 4, reps: '15–20', rest: '30 сек' },
    },
    endurance: {
      1: { sets: 3, reps: '15–20', rest: '60 сек' },
      2: { sets: 4, reps: '20–25', rest: '45 сек' },
      3: { sets: 4, reps: '25–30', rest: '30 сек' },
    },
    general: {
      1: { sets: 3, reps: isCompound ? '8–12' : '12–15', rest: '90 сек' },
      2: { sets: 3, reps: isCompound ? '8–10' : '10–12', rest: '90 сек' },
      3: { sets: 4, reps: isCompound ? '6–8' : '8–10',  rest: '2 мин' },
    }
  };

  return configs[goal]?.[phase] || configs.general[phase];
}

function buildPhaseWorkouts(split, goal, phase, equipment, level, userSelected) {
  return split.map(workout => {
    const exercises = [];
    workout.muscles.forEach(muscle => {
      const exCount = muscle === 'core' ? 2 : (workout.muscles.length === 1 ? 5 : 3);
      const exList = getExercisesForMuscle(muscle, equipment, userSelected, exCount);
      const sr = getSetsReps(muscle, goal, phase, level);
      exList.forEach(ex => {
        exercises.push({ ...ex, muscle, ...sr });
      });
    });

    if (workout.cardio) {
      const cardioOptions = {
        1: '10 мин лёгкое кардио в конце',
        2: '15 мин интервальное кардио',
        3: '20 мин ВИИТ (30 сек/30 сек)'
      };
      exercises.push({ name: cardioOptions[phase], tag: 'Кардио', muscle: 'cardio', sets: 1, reps: '—', rest: '—' });
    }

    return { ...workout, exercises };
  });
}

function getPhaseDescription(goal, phase) {
  const descs = {
    strength: {
      1: 'Адаптационная фаза: освоение техники базовых упражнений, умеренные нагрузки, 3–4 подхода с весом 65–70% от 1ПМ. Фокус на правильной технике, разминке и восстановлении.',
      2: 'Фаза прогрессии: увеличение рабочих весов, повышение интенсивности. Применяем прогрессивную перегрузку — добавляем 2–5% веса каждые 1–2 недели. 4–5 рабочих подходов.',
      3: 'Пиковая фаза: максимальная интенсивность, низкий объём. Тяжёлые синглы и тройки, выход на новые максимумы. Включаем дни разгрузки для суперкомпенсации.',
    },
    weight_loss: {
      1: 'Стартовая фаза: привыкание к тренировкам с умеренным дефицитом калорий. 3 подхода с умеренным весом, короткие паузы (60 сек). Аэробное кардио 10 мин в конце.',
      2: 'Интенсивная фаза: увеличение объёма, сокращение пауз до 45 секунд. Добавляем суперсеты и круговые блоки для повышения расхода энергии. Интервальное кардио.',
      3: 'Финальная фаза: максимальное сжигание калорий через ВИИТ и плиометрику. Пауза 30 секунд, дроп-сеты. Высокая интенсивность для удержания мышечной массы.',
    },
    endurance: {
      1: 'Базовая выносливость: умеренная интенсивность (60–65% ЧСС), длинные подходы с малым весом. Развиваем аэробные системы энергообеспечения.',
      2: 'Темповая фаза: повышаем нагрузку и объём. Добавляем темповые отрезки. Работаем в диапазоне 70–75% ЧСС. Суперсеты и многосуставные комплексы.',
      3: 'Соревновательная фаза: максимальная выносливость. Интервальные протоколы, circuit training, работа в диапазоне 80–85% ЧСС.',
    },
    general: {
      1: 'Общая подготовка: изучаем базовые движения, осваиваем технику. Умеренная нагрузка 3×8–12. Баланс между силой, кардио и гибкостью.',
      2: 'Развивающая фаза: увеличиваем рабочие веса и объём. Добавляем суперсеты, разнообразие упражнений. Прогрессируем по весу и повторениям.',
      3: 'Закрепляющая фаза: фиксируем достижения, повышаем интенсивность. Более тяжёлые базовые движения, работа над слабыми местами.',
    }
  };
  return descs[goal]?.[phase] || '';
}

function calcBMI(weight, height) {
  const h = height / 100;
  return (weight / (h * h)).toFixed(1);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Дефицит веса', cls: 'yellow' };
  if (bmi < 25)   return { label: 'Норма', cls: 'green' };
  if (bmi < 30)   return { label: 'Избыточный вес', cls: 'yellow' };
  return { label: 'Ожирение', cls: 'red' };
}

function calcTDEE(weight, height, age, gender, days) {
  // Mifflin-St Jeor
  let bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  const actFactor = days <= 3 ? 1.375 : days == 4 ? 1.55 : 1.725;
  return Math.round(bmr * actFactor);
}

function getStrengthLevel(bench, squat, deadlift, weight) {
  if (!bench && !squat && !deadlift) return null;
  const ratio = ((bench || 0) + (squat || 0) * 1.5 + (deadlift || 0) * 1.5) / (weight * 4);
  if (ratio < 0.5) return { label: 'Начинающий', cls: 'yellow' };
  if (ratio < 1.0) return { label: 'Средний', cls: 'green' };
  if (ratio < 1.5) return { label: 'Продвинутый', cls: 'purple' };
  return { label: 'Элитный', cls: 'red' };
}

function getRecommendations(goal, level, bmi, tdee) {
  const recos = [
    {
      icon: '🍽',
      title: 'Питание',
      text: goal === 'strength'
        ? `Профицит калорий +200–400 ккал от TDEE (≈${tdee + 300} ккал/день). Белок: 1.8–2.2 г/кг, углеводы: 4–6 г/кг, жиры: 0.8–1.2 г/кг.`
        : goal === 'weight_loss'
        ? `Дефицит калорий 300–500 ккал от TDEE (≈${tdee - 400} ккал/день). Белок: 2–2.5 г/кг для сохранения мышц.`
        : `Поддерживающие калории ≈${tdee} ккал/день. Белок: 1.6–2.0 г/кг.`
    },
    {
      icon: '💧',
      title: 'Вода',
      text: 'Пейте 35–40 мл воды на кг веса тела в день. В дни тренировок добавьте 500–700 мл. Не ждите жажды.'
    },
    {
      icon: '😴',
      title: 'Восстановление',
      text: 'Сон 7–9 часов критически важен для роста мышц и жиросжигания. Не тренируйтесь более 5 дней подряд без отдыха.'
    },
    {
      icon: '📈',
      title: 'Прогрессия',
      text: level === 'beginner'
        ? 'Добавляйте 2–5 кг каждую тренировку для базовых упражнений. Не гонитесь за весом — фокус на технике.'
        : 'Применяйте принцип двойной прогрессии: сначала увеличивайте повторения, затем вес. Ведите дневник тренировок.'
    },
    {
      icon: '🧘',
      title: 'Разминка',
      text: 'Всегда делайте 5–10 мин общей разминки (кардио) и специфическую разминку для рабочих мышц. Заминка и растяжка 5–10 мин после.'
    },
    {
      icon: '📊',
      title: 'Отслеживание',
      text: 'Записывайте каждую тренировку: упражнение, вес, подходы, повторения. Делайте замеры тела и фото раз в 2–4 недели.'
    }
  ];
  return recos;
}

function buildScheduleHTML(split, days) {
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const trainingDays = parseInt(days);

  let schedule = [];
  if (trainingDays === 3) {
    schedule = [true, false, true, false, true, false, false];
  } else if (trainingDays === 4) {
    schedule = [true, true, false, true, true, false, false];
  } else {
    schedule = [true, true, true, false, true, true, false];
  }

  let html = '';
  let workoutIdx = 0;
  schedule.forEach((isTraining, i) => {
    const name = isTraining ? (split[workoutIdx++ % split.length]?.name || 'Тренировка') : 'Отдых';
    html += `
      <div class="sched-day ${isTraining ? 'training' : 'rest'}">
        <div class="day-name">${dayNames[i]}</div>
        <div class="day-type">${name}</div>
      </div>`;
  });
  return html;
}

function buildWorkoutHTML(workouts) {
  return workouts.map((w, wi) => `
    <div class="workout-card">
      <div class="workout-header" data-wi="${wi}">
        <div>
          <div class="workout-day">${w.day}</div>
          <div class="workout-name">${w.name}</div>
        </div>
        <span class="workout-toggle">▼</span>
      </div>
      <div class="workout-body" id="wb-${wi}">
        <table class="exercise-table">
          <thead>
            <tr>
              <th>Упражнение</th>
              <th>Подх.</th>
              <th>Повт.</th>
              <th>Отдых</th>
            </tr>
          </thead>
          <tbody>
            ${w.exercises.map(ex => `
              <tr>
                <td class="ex-name">
                  ${ex.name}
                  ${ex.tag ? `<span class="ex-tag">${ex.tag}</span>` : ''}
                </td>
                <td><span class="sets-badge">${ex.sets}</span></td>
                <td><span class="reps-badge">${ex.reps}</span></td>
                <td><span class="rest-badge">${ex.rest}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `).join('');
}

// ===== MAIN GENERATE LOGIC =====

let currentPlan = null;

document.getElementById('generateBtn').addEventListener('click', () => {
  const age    = parseInt(document.getElementById('age').value) || 25;
  const gender = document.getElementById('gender').value;
  const weight = parseInt(document.getElementById('weight').value) || 75;
  const height = parseInt(document.getElementById('height').value) || 175;
  const goal   = document.getElementById('goal').value;
  const level  = document.getElementById('level').value;
  const days   = document.getElementById('days').value;
  const equipment = document.getElementById('equipment').value;

  const bench    = parseInt(document.getElementById('bench').value) || 0;
  const squat    = parseInt(document.getElementById('squat').value) || 0;
  const deadlift = parseInt(document.getElementById('deadlift').value) || 0;
  const ohp      = parseInt(document.getElementById('ohp').value) || 0;
  const pullups  = parseInt(document.getElementById('pullups').value) || 0;
  const pushups  = parseInt(document.getElementById('pushups').value) || 0;

  const userSelected = Array.from(document.querySelectorAll('.ex-check input:checked')).map(el => el.value);

  const bmi  = calcBMI(weight, height);
  const bmiCat = getBMICategory(parseFloat(bmi));
  const tdee = calcTDEE(weight, height, age, gender, parseInt(days));
  const strLevel = getStrengthLevel(bench, squat, deadlift, weight);

  const split = getWorkoutSplit(goal, parseInt(days), equipment, level);

  // Build plans for all 3 phases
  const phases = [1, 2, 3].map(phase => ({
    desc: getPhaseDescription(goal, phase),
    workouts: buildPhaseWorkouts(split, goal, phase, equipment, level, userSelected)
  }));

  currentPlan = { phases, split, days, goal, level, bmi, bmiCat, tdee, strLevel, weight, height, age, bench, squat, deadlift, ohp, pullups, pushups };

  renderResult(currentPlan);

  document.getElementById('resultSection').classList.remove('hidden');
  document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function renderResult(plan) {
  const { phases, split, days, goal, level, bmi, bmiCat, tdee, strLevel, weight, age, bench, squat, deadlift, ohp, pullups } = plan;

  // Title & meta
  document.getElementById('resultTitle').textContent =
    `Ваш план: ${GOAL_LABELS[goal]}`;

  document.getElementById('resultMeta').innerHTML = `
    <span>${LEVEL_LABELS[level]}</span>
    <span>${days} дн/нед</span>
    <span>${split.length} тренировки</span>
    <span>3 месяца · 12 недель</span>
  `;

  // Stats
  const statsHTML = [
    { label: 'ИМТ', val: bmi, sub: bmiCat.label, cls: bmiCat.cls },
    { label: 'TDEE', val: tdee, sub: 'ккал/день', cls: 'purple' },
    ...(strLevel ? [{ label: 'Уровень силы', val: strLevel.label, sub: '', cls: strLevel.cls }] : []),
    ...(bench ? [{ label: 'Жим лёжа', val: bench + ' кг', sub: `${(bench/weight).toFixed(1)}× тело`, cls: 'green' }] : []),
    ...(squat ? [{ label: 'Приседания', val: squat + ' кг', sub: `${(squat/weight).toFixed(1)}× тело`, cls: 'green' }] : []),
    ...(deadlift ? [{ label: 'Становая', val: deadlift + ' кг', sub: `${(deadlift/weight).toFixed(1)}× тело`, cls: 'green' }] : []),
  ].map(s => `
    <div class="stat-card ${s.cls}">
      <div class="s-label">${s.label}</div>
      <div class="s-val">${s.val}</div>
      ${s.sub ? `<div class="s-sub">${s.sub}</div>` : ''}
    </div>
  `).join('');
  document.getElementById('statsRow').innerHTML = statsHTML;

  // Phase tabs
  renderPhase(plan, 1);

  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderPhase(plan, parseInt(this.dataset.phase));
    });
  });

  // Schedule
  document.getElementById('scheduleGrid').innerHTML = buildScheduleHTML(split, days);

  // Recommendations
  const recos = getRecommendations(goal, level, bmi, tdee);
  document.getElementById('recoGrid').innerHTML = recos.map(r => `
    <div class="reco-card">
      <div class="reco-icon">${r.icon}</div>
      <h4>${r.title}</h4>
      <p>${r.text}</p>
    </div>
  `).join('');
}

function renderPhase(plan, phase) {
  const { phases } = plan;
  const p = phases[phase - 1];
  const html = `
    <div class="phase-desc">${p.desc}</div>
    <div class="workouts-grid">${buildWorkoutHTML(p.workouts)}</div>
  `;
  document.getElementById('phaseContent').innerHTML = html;

  // Toggle workout body
  document.querySelectorAll('.workout-header').forEach(header => {
    header.addEventListener('click', function() {
      const wi = this.dataset.wi;
      const body = document.getElementById(`wb-${wi}`);
      const toggle = this.querySelector('.workout-toggle');
      body.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  });

  // Open first workout by default
  const firstBody = document.getElementById('wb-0');
  if (firstBody) {
    firstBody.classList.add('open');
    const toggle = document.querySelector('[data-wi="0"] .workout-toggle');
    if (toggle) toggle.classList.add('open');
  }
}

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('resultSection').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
