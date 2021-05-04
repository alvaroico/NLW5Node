import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    const userRepository = getCustomRepository(UsersRepository);
    // Verificar se o usuario existe

    const userExists = await userRepository.findOne({
      email,
    });

    // se nao existir, salvar no DB
    if (userExists) {
      return userExists;
    }

    const user = userRepository.create({
      email,
    });

    await userRepository.save(user);
    // se existir, retornar user

    return user;
  }
}

export {UsersService}