'use client'

import {
  auth,
  closeAuthPopup,
  openAuthPopup,
} from '.'

export const $openAuthPopup = auth
  .createStore<boolean>(false)
  .on(openAuthPopup, () => true)
  .on(closeAuthPopup, () => false)
