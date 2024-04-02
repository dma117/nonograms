export const gameStates = {
  'startGame': 'startGame',
  'inProgress': 'inProgress',
  'win': 'win',
  'solution': 'solution',
};

export const levels = {
  'easy': 'easy',
  'medium': 'medium',
  'hard': 'hard',
};

export const sizes = {
  'easy': 5,
  'medium': 10,
  'hard': 15,
};

export const cellStates = {
  'fill': 'fill',
  'cross': 'cross',
};

export const soundsEffects = {
  'fill': 'fill',
  'unfill': 'unfill',
  'cross': 'cross',
  'uncross': 'uncross',
  'win': 'win',
  'score': 'score',
  'close': 'close',
  'solution': 'solution',
  'randomize': 'randomize',
  'other': 'other',
}

export const themes = {
  'light': 'light',
  'dark': 'dark',
};

export const data = [
  {
    'level': levels.easy,
    'name': 'plus',
    'key': [[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0]],
  },
  {
    'level': levels.easy,
    'name': 'person',
    'key': [[0,1,1,1,0],[1,0,1,0,1],[0,1,1,1,0],[0,0,1,0,0],[1,1,1,1,1]],
  },
  {
    'level': levels.easy,
    'name': 'tree',
    'key': [[0,1,1,1,1],[0,0,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,1]],
  },
  {
    'level': levels.easy,
    'name': 'steps',
    'key': [[0,0,0,0,1],[0,0,0,1,1],[0,0,1,1,1],[0,1,1,1,1],[1,1,1,1,1]],
  },
  {
    'level': levels.easy,
    'name': 'house',
    'key': [[1,1,1,1,1],[0,1,1,0,1],[1,1,1,1,1],[0,1,1,0,1],[1,1,1,1,1]],
  },
  {
    'level': levels.easy,
    'name': 'button',
    'key': [[1,1,1,1,1],[1,0,1,0,1],[1,1,1,1,1],[1,0,1,0,1],[1,1,1,1,1]],
  },
  {
    'level': levels.easy,
    'name': 'chess board',
    'key': [[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]],
  },
  {
    'level': levels.easy,
    'name': 'elephant',
    'key': [[1,1,0,1,1],[1,1,1,1,1],[1,0,1,0,1],[0,1,1,1,0],[0,0,1,0,0]],
  },
  {
    'level': levels.medium,
    'name': 'house',
    'key': [[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,1,0],[0,0,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]],
  },
  {
    'level': levels.medium,
    'name': 'music',
    'key': [[0,0,0,0,0,0,1,1,1,1],[0,0,0,1,1,1,0,0,0,1],[0,0,0,1,0,0,0,1,1,1],[0,0,0,1,1,1,1,0,0,1],[0,0,0,1,0,0,0,0,0,1],[0,0,0,1,0,0,0,1,1,1],[0,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0]],
  },
  {
    'level': levels.medium,
    'name': 'heart',
    'key': [[0,1,1,0,0,0,0,1,1,0],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,0,1,1,0,0,0,0]],
  },
  {
    'level': levels.medium,
    'name': 'football',
    'key': [[1,1,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,1,1,0,1],[1,1,0,0,0,0,1,1,1,1],[0,1,0,0,0,0,0,1,1,0],[1,1,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,0,0],[1,1,0,1,1,1,1,0,0,0]],
  },
  {
    'level': levels.medium,
    'name': 'smiling face',
    'key': [[0,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,0],[1,0,0,0,1,0,0,0,1,0],[1,0,1,0,1,0,1,0,1,1],[1,0,0,0,1,0,0,0,1,0],[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,0],[1,1,0,0,0,0,0,0,1,0],[1,1,1,0,0,0,0,1,1,0],[0,1,1,1,1,1,1,1,0,0]],
  },
  {
    'level': levels.medium,
    'name': 'RIP',
    'key': [[1,1,1,1,0,0,0,1,0,0],[1,1,1,1,0,0,1,1,1,0],[1,1,1,0,0,0,0,1,0,0],[1,0,0,0,0,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]],
  },
  {
    'level': levels.medium,
    'name': 'snail',
    'key': [[1,1,1,1,1,1,0,0,0,0],[1,1,0,0,0,1,0,1,0,1],[1,1,1,1,0,1,0,1,1,1],[1,0,0,1,0,1,0,1,1,1],[1,0,1,1,0,1,0,1,1,1],[1,0,0,0,0,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,0]],
  },
  {
    'level': levels.medium,
    'name': 'man with a balloon',
    'key': [[0,0,0,0,0,1,1,1,1,1],[0,1,1,1,0,1,1,1,1,1],[0,1,1,1,0,1,1,1,1,1],[0,1,1,1,0,1,1,1,1,1],[0,0,1,0,0,0,1,1,1,0],[1,1,1,1,1,0,0,1,0,0],[1,1,1,1,1,0,0,1,0,0],[1,1,1,1,1,0,0,1,0,0],[1,1,1,1,1,1,1,1,0,0],[1,1,1,1,0,0,0,1,0,0]],
  },
  {
    'level': levels.medium,
    'name': 'hi',
    'key': [[1,1,0,0,1,1,0,1,1,1],[1,1,0,0,1,1,0,1,1,1],[1,1,0,0,1,1,0,0,0,0],[1,1,0,0,1,1,0,1,1,1],[1,1,0,0,1,1,0,1,1,1],[1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,0,1,1,1],[1,1,0,0,1,1,0,1,1,1],[1,1,0,0,1,1,0,1,1,1],[1,1,0,0,1,1,1,1,1,1]],
  },
  {
    'level': levels.hard,
    'name': 'high five',
    'key': [[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,1,1,1,0,0,0,0,0,0,0,1,1,1],[0,0,1,1,1,0,0,0,0,0,0,0,0,1,0],[0,0,1,1,1,0,0,0,1,0,1,1,1,1,1],[0,0,0,1,0,0,0,1,1,0,1,1,1,1,1],[0,1,1,1,1,1,0,1,1,0,1,1,1,1,1],[0,1,1,1,1,1,0,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0,0,0,1,1,1,1],[0,1,1,1,1,0,0,0,0,0,0,1,1,1,1],[0,1,1,1,1,0,0,0,0,0,0,1,1,1,1],[0,1,1,1,1,0,0,0,0,0,0,1,1,1,1],[0,1,1,0,1,0,0,0,0,0,0,1,1,0,1],[0,0,1,0,1,0,0,0,0,0,0,1,1,0,1],[1,1,1,0,1,1,1,0,0,0,1,1,1,0,1]],
  },
  {
    'level': levels.hard,
    'name': 'relaxed face',
    'key': [[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,0,0,0,0,1,1,1,0,0,0,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,1,1,0,1,1,0,1,1,0,1,1],[1,1,1,1,0,0,1,1,1,1,0,0,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,0,1,1,1,1,0,1,1,1],[0,0,0,1,1,1,1,0,0,0,0,1,1,1,1],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]],
  },
  {
    'level': levels.hard,
    'name': 'riding on the hill',
    'key': [[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,1,1,0,0,0],[0,0,0,0,0,0,0,1,0,1,1,0,0,0,0],[0,0,0,1,1,1,0,1,1,0,0,0,0,0,0],[1,1,0,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,1,0,0,0,0],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
  },
  {
    'level': levels.hard,
    'name': 'ship at the sea',
    'key': [[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,1,1,1,1,1,1,0,0],[0,0,0,0,1,0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,0,1,0,1,1,1,1,1,1,0],[0,1,1,0,0,0,1,0,0,1,1,1,1,1,0],[1,1,0,0,0,0,1,1,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,1,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,1,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0]],
  },
  {
    'level': levels.hard,
    'name': 'owl',
    'key': [[0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0,0,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,1,0,0,0],[0,0,1,0,1,0,1,0,1,0,1,1,1,0,0],[0,1,1,0,0,0,1,0,0,0,1,1,1,0,0],[0,1,1,1,1,1,0,1,1,1,1,1,1,1,0],[1,1,1,0,0,1,0,1,0,0,1,1,1,1,1],[1,1,1,0,0,0,1,0,0,0,1,1,1,1,1],[1,1,1,0,1,0,0,0,1,0,1,1,1,1,1],[0,1,1,0,1,0,1,0,1,0,1,1,1,1,0],[0,1,1,0,0,0,1,0,0,0,1,1,1,0,0],[0,0,1,1,0,0,0,0,0,1,1,1,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,0,1,1,1,0,1,0,0,0,0,0]],
  },
  {
    'level': levels.hard,
    'name': 'mouse',
    'key': [[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,1,1,1,1,0,0,1,1,0,1],[0,0,0,1,1,1,0,0,1,0,0,1,0,1,0],[1,1,1,0,1,0,0,1,1,0,0,1,0,0,0],[1,1,0,0,0,0,0,1,0,0,0,1,1,0,0],[0,1,1,1,1,0,0,1,1,0,0,0,1,1,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,0,1,1,1,0,0,1],[0,0,0,0,0,1,1,0,0,0,0,1,1,0,1],[0,0,0,1,1,1,1,0,0,0,0,0,1,1,1],[0,0,0,1,0,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,1,1,1,1,1,0,0,1,1,0],[0,0,0,1,1,1,0,1,1,0,1,1,1,0,0]],
  },
  {
    'level': levels.hard,
    'name': 'deer',
    'key': [[1,1,0,1,1,0,0,0,0,0,0,1,1,0,1],[1,1,0,1,1,0,1,0,0,1,0,1,1,0,1],[0,1,1,1,1,0,1,0,0,1,0,1,1,0,1],[0,0,1,1,1,1,1,0,0,0,1,1,1,1,1],[0,0,0,0,1,1,0,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,1,0,1,0,1,1,1,1,1,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0,1,1,1,1,1],[1,0,1,1,1,1,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,1,1,1,1,1],[0,1,1,1,1,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]],
  },
  {
    'level': levels.hard,
    'name': 'basketball',
    'key': [[1,1,1,1,1,1,1,0,0,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,0,1,0,0,1,0,0],[1,0,0,1,0,0,0,1,0,1,0,0,1,0,0],[1,0,0,1,0,0,0,1,0,1,1,1,1,0,0],[1,0,0,1,1,1,1,1,0,0,0,0,0,1,1],[1,0,0,0,1,1,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,1,1,1,0,1],[1,1,1,1,1,1,1,0,0,0,1,1,1,0,1],[0,1,1,1,0,0,0,0,0,0,1,1,1,0,1],[0,1,1,1,0,0,0,0,0,0,1,1,1,0,1],[0,1,1,1,0,0,0,1,1,1,1,1,1,1,1],[0,1,1,1,0,0,0,1,1,1,1,1,1,1,1],[0,1,1,1,0,0,0,1,0,1,1,1,1,0,0],[0,1,1,1,0,0,0,1,0,1,1,1,1,0,0],[0,1,1,1,0,1,1,1,0,1,1,1,1,0,0]],
  },
]