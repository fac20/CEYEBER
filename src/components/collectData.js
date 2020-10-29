export const collectData = (taskName, answers, setAnswers, score) => {
  if (answers.q3a2 === null) {
    console.log('score', score);
    console.log('task name', taskName);
    console.log('answers', answers);
    console.log('set answers', setAnswers);

    switch (taskName) {
      case 'Troll Hunter':
        answers.q1a1 === null
          ? setAnswers({ ...answers, q1a1: score })
          : setAnswers({ ...answers, q1a2: score });
        break;
      case 'Thief Buster':
        answers.q2a1 === null
          ? setAnswers({ ...answers, q2a1: score })
          : setAnswers({ ...answers, q2a2: score });
        break;
      case 'Hack Attack':
        answers.q3a1 === null
          ? setAnswers({ ...answers, q3a1: score })
          : setAnswers({ ...answers, q3a2: score });
        break;
    }
  }
};
