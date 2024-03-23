import React from "react";
import { PracticeExercisesLayout } from "./PracticeExercisesLayout";
import { sentenceData_150 } from "../sentencesData/sentencesData";

export const PracticeExercises101to150 = () => {
    const pageCount=105;
    return (
<PracticeExercisesLayout practiceExercisesData={sentenceData_150} pageCount={pageCount} totalCount={150}/>
    )
}