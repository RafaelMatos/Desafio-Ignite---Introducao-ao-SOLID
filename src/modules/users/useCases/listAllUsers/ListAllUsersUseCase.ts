import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id?: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  // execute({ user_id }: IRequest): User[] {
  //   // Complete aqui
  // }
  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAdmin = this.usersRepository.findById(user_id);
    if (!userAdmin) {
      throw new Error("User don't exists");
    }
    if (!userAdmin.admin) {
      throw new Error("User is not Admin");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
