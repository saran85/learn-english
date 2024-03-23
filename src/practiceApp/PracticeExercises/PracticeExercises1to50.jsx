import React from 'react'
import { PracticeExercisesLayout } from './PracticeExercisesLayout';
import { sentenceData_50 } from '../sentencesData/sentencesData';


export const PracticeExercises1to50=()=> {
 const pageCount=5;

  return (
    <PracticeExercisesLayout practiceExercisesData={sentenceData_50} pageCount={pageCount} totalCount={50}/>
  )
}