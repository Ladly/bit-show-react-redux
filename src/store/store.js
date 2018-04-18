import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { logger } from 'redux-logger'
import { combineReducers } from 'redux'

import { homepageReducer } from './../app/containers/Homepage/reducer'
import { showDetailsReducer } from './../app/containers/ShowDetailsPage/reducer'
import { searchInputReducer } from './../app/containers/SearchInput/reducer'
import { headerReducer } from './../app/containers/Header/reducer'
import { commentsReducer } from './../app/containers/CommentsPage/reducer'
import { showUsersReducer } from './../app/containers/ShowUsersPage/reducer'
import { blogPageReducer } from './../app/containers/BlogPage/reducer'
import { blogPostDetailsReducer } from './../app/containers/BlogPostDetailsPage/reducer'

const rootReducer = combineReducers({
	homepageReducer,
	showDetailsReducer,
	searchInputReducer,
	headerReducer,
	commentsReducer,
	showUsersReducer,
	blogPageReducer,
	blogPostDetailsReducer
})
export { rootReducer }

export const store = applyMiddleware(logger, promise(), thunkMiddleware)(createStore)