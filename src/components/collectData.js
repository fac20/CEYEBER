const collectData = (taskName, answers, setAnswers, score) => {
  if (q3a2 !== null) {
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
      case 'Password Challenge':
        answers.q3a1 === null
          ? setAnswers({ ...answers, q3a1: score })
          : setAnswers({ ...answers, q3a2: score });
        break;
    }
  }
};
