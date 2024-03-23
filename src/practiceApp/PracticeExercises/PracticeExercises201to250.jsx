import React from 'react';
import { PracticeExercisesLayout } from './PracticeExercisesLayout';
import { sentenceData_250 } from '../sentencesData/sentencesData';

export const PracticeExercises201to250 = () => {
  return (
    <>
   <PracticeExercisesLayout practiceExercisesData={sentenceData_250} />
    </>
  );
};
