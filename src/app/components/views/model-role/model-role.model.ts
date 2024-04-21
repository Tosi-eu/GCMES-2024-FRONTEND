export interface ModelRole{
  id: Number,
  name: String,
  description: String,
  sonRoles?: Roles[]
}


export interface Roles{
  id: Number;
  name: String;
  description: String;
  parentRole: ModelRole;
}


export interface ChangeRequest{
  name: String;
  who: String;
  newname: String;
  why: String;
}