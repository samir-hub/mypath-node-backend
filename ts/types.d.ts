export interface UserCreds {
    id?: number,  
    username: string;
    password?: string;
  }

  export type Role = 'admin' | 'user'

export interface UserDetails {
  id?: number,
  user_id?: number,
  education?: string;
  major?: string;
  avgmajor?: number;
  lowmajor?: number;
  highmajor?: number;
  city?: string;
  colindex?: number;
  rent?: number;
  avgwage?: number;
  rentindex?: number;
  colplusrentindex?: number;
  groceriesindex?: number;
  restaurantpriceindex?: number;
  utilities?: number;
  groceries?: number;
  restaurant?: number;
  premiums?: number;
  medExpenses?: number;
  carPayment?: number;
  insurance?: number;
  gas?: number;
  carMaintenance?: number;
  internet?: number;
  cell?: number;
  tv?: number;
  studentLoans?: number;
  clothing?: number;
  entertainment?: number;
  pOther?: number;
}