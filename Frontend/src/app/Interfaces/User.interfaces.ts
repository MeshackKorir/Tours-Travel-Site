export interface UserDetails {
    userID:string,
    fullName:string,
    email:string,
    password:string,
    role:string

}

// export interface LoginResponse {
//     user: User | undefined;
//     token: string;
//     userID:string
//   }

  export interface userLogin {
    email: string,
    password : string
}


export interface UserDetails {
  userID:string;
  fullName: string;
  email: string;
  role:string;
}

export interface updatedUserData {
  userID:string,
  fullName: string,
  email: string,
};

