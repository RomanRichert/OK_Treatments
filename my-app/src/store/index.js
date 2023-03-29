import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { bodyPartReducer } from './reducers/bodyPartReducer';
import { answersReducer } from './reducers/answersReducer';
import { bmiReducer } from './reducers/bmiReducer';
import { storiesReducer } from './reducers/storiesReducer';
import { allAnswersReducer } from './reducers/allAnswersReducer';

const rootReducer = combineReducers ({
	bodyPart: bodyPartReducer,
	answers: answersReducer,
	allAnswers: allAnswersReducer,
	bmi: bmiReducer,
	stories: storiesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))