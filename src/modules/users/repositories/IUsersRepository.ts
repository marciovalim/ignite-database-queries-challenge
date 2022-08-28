import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../dtos';
import { User } from '../entities/User';

export interface IUsersRepository {
	findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User | undefined>;
	findAllUsersOrderedByFirstName(): Promise<User[] | undefined>;
	findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}
