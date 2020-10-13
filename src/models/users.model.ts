
export interface User {
    username: string;
    email: string;
    lastName: string;
    firstName: string;
    password: string;
    key: string;
};

export const mapJsonToObject = (map: any): User | undefined => {
  try {
    return {
      username: map.username,
      email: map.email,
      lastName: map['Last Name'],
      firstName: map['First Name'],
      password: map.Password,
      key: map.key
    }
  } catch (err) {
    return undefined
  }
}
