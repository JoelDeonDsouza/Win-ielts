import type { Difficulty, IeltsExamItem } from '../types/Main';

export const difficulties: Difficulty[] = [
  { id: 1, color: '#6FCF97', text: 'Easy' },
  { id: 2, color: '#F2C94C', text: 'Medium' },
  { id: 3, color: '#EB5757', text: 'Hard' },
];

const TIME_LIMIT_NOTE =
  'Your time limit depends on the difficulty you choose: Easy (45 min), Medium (30 min), Hard (15 min).';

export const ieltsExamData: IeltsExamItem[] = [
  {
    id: 1,
    type: 'Reading',
    img: 'img/reading.png',
    topScore: 9,
    currentScore: 0,
    actionUrl: '/reading-test',
    subType: 'Academic',
    initiation_begin: 'Start your reading practice',
    important_note: [
      'This test contains 5 questions, and harder questions are worth more points.',
      TIME_LIMIT_NOTE,
      'The timer starts as soon as you begin and cannot be paused.',
      'Once you submit an answer, you cannot go back and change it.',
      'Skim the passage first, then read closely for the answers. Do not get stuck on one question for too long.',
    ],
  },
  {
    id: 2,
    type: 'Writing',
    img: 'img/writing.png',
    topScore: 9,
    currentScore: 0,
    actionUrl: '/writing-test',
    subType: 'Academic',
    initiation_begin: 'Start your writing practice',
    important_note: [
      'This test contains 5 writing tasks, including describing charts or graphs and writing essays.',
      TIME_LIMIT_NOTE,
      'Check the minimum and maximum word count shown on each task. Going under or over the limit can lower your score.',
      'Spend a minute or two planning your structure before you start writing.',
      'Focus on clear, well-organised ideas rather than length, and leave time to proofread.',
    ],
  },
  {
    id: 3,
    type: 'Listening',
    img: 'img/listening.png',
    topScore: 9,
    currentScore: 0,
    actionUrl: '/listening-test',
    subType: 'Academic',
    initiation_begin: 'Start your listening practice',
    important_note: [
      'This test contains 5 listening questions, each based on its own audio recording.',
      TIME_LIMIT_NOTE,
      'Each recording plays only once, so use headphones and sit somewhere quiet.',
      'Read the questions before the audio starts so you know what to listen for.',
      'Write your answer as you listen. Do not stop to think about a question you missed.',
    ],
  },
  {
    id: 4,
    type: 'Speaking',
    img: 'img/speaking.png',
    topScore: 9,
    currentScore: 0,
    actionUrl: '/speaking-test',
    subType: 'Academic',
    initiation_begin: 'Start your speaking practice',
    important_note: [
      'This test contains 3 speaking prompts, ranging from personal topics to abstract discussions.',
      TIME_LIMIT_NOTE,
      'Allow microphone access and test it in a quiet place before you begin.',
      'Take a few seconds to organise your thoughts before you answer each prompt.',
      'Speak clearly at a natural pace, and develop each answer with reasons and examples instead of one-word replies.',
    ],
  },
];
