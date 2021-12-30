import UserDTO from "./UserDTO";

export default class RepositorieDTO {
	name: String = "";
  full_name: String = "";
  private: Boolean = false;
  owner: UserDTO = {} as UserDTO;
  html_url: String = "";
  description: String = "";
  language: String = "";
  followers: Number = 0;
}
