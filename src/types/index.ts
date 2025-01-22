export enum ElementType {
    TEXTINPUT = 'TextInput',
    TEXTAREA = 'TextArea',
    DROPDOWN = "Dropdown"
  }

export interface BaseElement{
    id:string,
    label?:string,
    type:ElementType,
}

export interface TextInputElement extends BaseElement{
    placeHolder:string
}

export interface TextAreaElement extends BaseElement{
    placeHolder:string
}
export interface DropdownElement extends BaseElement{
    options :{
        value:string,
        text:string
    }[]
}

export type FormElement = TextInputElement|TextAreaElement|DropdownElement


export interface FormElementsState {
    elements:FormElement[]
    isNew:boolean
    formId?:string
}


export interface Form{
    formId:string
    formElements:FormElement[]
}

export interface FormsState{
    forms:Form[]
}