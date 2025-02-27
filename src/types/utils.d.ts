export interface ModalParams {
  title: string
  content: string
  confirm: CallbackFunction
  cancel: CallbackFunction
}

export type CallbackFunction = (dara?: any) => void
