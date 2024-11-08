import { createDomain } from "effector";

const modals = createDomain()

export const openMenu = modals.createEvent()
export const closeMenu = modals.createEvent()

export const showQuickViewModal = modals.createEvent()
export const closeQuickViewModal = modals.createEvent()

export const showSizeTable = modals.createEvent()
export const closeSizeTable = modals.createEvent()

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)


export const $showQuickViewModal = modals
  .createStore(false)
  .on(showQuickViewModal, () => true)
  .on(closeQuickViewModal, () => false)

export const $showSizeTable = modals
  .createStore(false)
  .on(closeSizeTable, () => false)
  .on(showSizeTable, () => true)
