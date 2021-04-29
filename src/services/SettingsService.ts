import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);
    const userAlreadyExists = await settingsRepository.find({
      username
    })

    if (userAlreadyExists) {
      throw new Error("Usuário ja existe")      
    }
    const settings = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
