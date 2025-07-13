export type DatePicker = {
  startDate?: Date;
  endDate?: Date;
  countDay?: (days:number) => void;
  getDateStart?: (date:Date) => void;
  getDateEnd?: (date:Date) => void;
  placeholder?:string
  label?:string
  totalDays? :number 
  dateType?:'start' | 'end';
  onChange?:(day:number) => void;
  valueDay?:number
}