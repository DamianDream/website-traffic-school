import A11yDialog from 'a11y-dialog'

// Expect selector by ID and Optional function
export const initializePopUp = (selectorID, func) => {
  const dialogEl = document.getElementById(selectorID)

  if (!dialogEl) {
    console.error("DOM Element was not selected");
    return
  }

// To manually control the dialog:
// dialog.show()
// dialog.hide()
// dialog.destroy()

  try {
    const dialog = new A11yDialog(dialogEl)

    // Add custom action on starting dialog
    dialog.on('show', function (event) {

      if (func) func()
  
      const container = event.target
      const target = event.detail.target
      const opener = target.closest('[data-a11y-dialog-show]')
  
      console.log(container, target, opener)
    })
  } catch (error) {
    console.error("Failed to start modal: ", error);
  }
}
