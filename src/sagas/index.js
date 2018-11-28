import {all} from 'redux-saga/effects'

import {watchCreateComment,watchDeleteComment,watchGetCommentsByPost} from './comment'

  

export default function* rootSaga() {
    yield all([
      watchCreateComment(),
      watchDeleteComment(),
      watchGetCommentsByPost(),
    ])
  }