import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../MainLayout/MainLayout";
import { Home } from "../home/Home";
import { EASY_ENGLISH_ROUTES } from "./routes";
import { BusyIndicator } from "@ui5/webcomponents-react";
import { LearnExercises1to50 } from "../../practiceApp/LearnExercises/LearnExercises1to50";
import { LearnExercises51to100 } from "../../practiceApp/LearnExercises/LearnExercises51to100";
import { LearnExercises101to150 } from "../../practiceApp/LearnExercises/LearnExercises101to150";
import { LearnExercises151to200 } from "../../practiceApp/LearnExercises/LearnExercises151to200";
import { LearnExercises201to250 } from "../../practiceApp/LearnExercises/LearnExercises201to250";
import { LearnExercises251to300 } from "../../practiceApp/LearnExercises/LearnExercises251to300";
import { LearnExercises301to350 } from "../../practiceApp/LearnExercises/LearnExercises301to350";
import { LearnExercises351to400 } from "../../practiceApp/LearnExercises/LearnExercises351to400";
import { LearnExercises401to450 } from "../../practiceApp/LearnExercises/LearnExercises401to450";
import { LearnExercises451to500 } from "../../practiceApp/LearnExercises/LearnExercises451to500";
import { LearnExercises501to550 } from "../../practiceApp/LearnExercises/LearnExercises501to550";
import { LearnExercises551to600 } from "../../practiceApp/LearnExercises/LearnExercises551to600";

import { PracticeExercises1to50 } from "../../practiceApp/PracticeExercises/PracticeExercises1to50";
import { PracticeExercises51to100 } from "../../practiceApp/PracticeExercises/PracticeExercises51to100";
import { PracticeExercises101to150 } from "../../practiceApp/PracticeExercises/PracticeExercises101to150";
import { PracticeExercises151to200 } from "../../practiceApp/PracticeExercises/PracticeExercises151to200";
import { PracticeExercises201to250 } from "../../practiceApp/PracticeExercises/PracticeExercises201to250";
import { PracticeExercises251to300 } from "../../practiceApp/PracticeExercises/PracticeExercises251to300";
import { PracticeExercises301to350 } from "../../practiceApp/PracticeExercises/PracticeExercises301to350";
import { PracticeExercises351to400 } from "../../practiceApp/PracticeExercises/PracticeExercises351to400";
import { PracticeExercises401to450 } from "../../practiceApp/PracticeExercises/PracticeExercises401to450";
import { PracticeExercises451to500 } from "../../practiceApp/PracticeExercises/PracticeExercises451to500";
import { PracticeExercises501to550 } from "../../practiceApp/PracticeExercises/PracticeExercises501to550";
import { PracticeExercises551to600 } from "../../practiceApp/PracticeExercises/PracticeExercises551to600";
import { NaveBar } from "../navBar/NaveBar";

export const WrapNavBar = ({ children, isNavBar }) => {
  return (
    <>
      <NaveBar isNavBar={isNavBar} />
      {children}
    </>
  );
};

function AppRouter() {
  return (
    <React.Suspense fallback={<BusyIndicator active />}>
      <Router>
        <Routes>
          <Route path={EASY_ENGLISH_ROUTES.ROOT} element={<Home />} />
          <Route
            path={EASY_ENGLISH_ROUTES.MAIN_ROUTES}
            element={
              <WrapNavBar isNavBar="hidden">
                <MainLayout />
              </WrapNavBar>
            }
          />

          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_1to50}
            element={
              <WrapNavBar>
                <LearnExercises1to50 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_51to100}
            element={
              <WrapNavBar>
                <LearnExercises51to100 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_101to150}
            element={
              <WrapNavBar>
                <LearnExercises101to150 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_151to200}
            element={
              <WrapNavBar>
                <LearnExercises151to200 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_201to250}
            element={
              <WrapNavBar>
                <LearnExercises201to250 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_251to300}
            element={
              <WrapNavBar>
                <LearnExercises251to300 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_301to350}
            element={
              <WrapNavBar>
                <LearnExercises301to350 />
              </WrapNavBar>
            }
          />

          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_351to400}
            element={
              <WrapNavBar>
                <LearnExercises351to400 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_401to450}
            element={
              <WrapNavBar>
                <LearnExercises401to450 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_451to500}
            element={
              <WrapNavBar>
                <LearnExercises451to500 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_501to550}
            element={
              <WrapNavBar>
                <LearnExercises501to550 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.LEARN_SENTENCE_551to600}
            element={
              <WrapNavBar>
                <LearnExercises551to600 />
              </WrapNavBar>
            }
          />

          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_1to50}
            element={
              <WrapNavBar>
                <PracticeExercises1to50 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_51to100}
            element={
              <WrapNavBar>
                <PracticeExercises51to100 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_101to150}
            element={
              <WrapNavBar>
                <PracticeExercises101to150 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_151to200}
            element={
              <WrapNavBar>
                <PracticeExercises151to200 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_201to250}
            element={
              <WrapNavBar>
                <PracticeExercises201to250 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_251to300}
            element={
              <WrapNavBar>
                <PracticeExercises251to300 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_301to350}
            element={
              <WrapNavBar>
                <PracticeExercises301to350 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_351to400}
            element={
              <WrapNavBar>
                <PracticeExercises351to400 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_401to450}
            element={
              <WrapNavBar>
                <PracticeExercises401to450 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_451to500}
            element={
              <WrapNavBar>
                <PracticeExercises451to500 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_501to550}
            element={
              <WrapNavBar>
                <PracticeExercises501to550 />
              </WrapNavBar>
            }
          />
          <Route
            path={EASY_ENGLISH_ROUTES.TEST_PRACTICE_551to600}
            element={
              <WrapNavBar>
                <PracticeExercises551to600 />
              </WrapNavBar>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default AppRouter;
