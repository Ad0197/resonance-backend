
export interface User {
  username: string;
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  key: string;
};

export const mapRecordToUser = (map: any): User => {
  return {
    username: map.username,
    email: map.email,
    lastName: map['Last Name'],
    firstName: map['First Name'],
    password: map.Password,
    key: map.key
  }
}
