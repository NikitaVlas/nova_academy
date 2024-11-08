import { closeAuthPopup, openAuthPopup} from "@/context/auth";

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.remove("overflow-hidden");
}

export const addOverflowHiddenToBody = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.add("overflow-hidden");
}

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== "undefined" ? window : { innerWidth: 0 };

  return { windowWidth }
}

export const handleCloseAuthPopup = () => {
  removeOverflowHiddenFromBody()
  closeAuthPopup()
}

export const closeAuthPopupWhenSomeModalOpened = (
  showQuickViewModal: boolean,
  showSizeTable: boolean
) => {
  if (showQuickViewModal || showSizeTable) {
    closeAuthPopup()
    return
  }

  handleCloseAuthPopup()
}

export const handleOpenAuthPopup = () => {
  addOverflowHiddenToBody();
  openAuthPopup()
}
