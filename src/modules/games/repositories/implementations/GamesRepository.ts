import { getRepository, Like, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';
import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
	private repository: Repository<Game>;

	constructor() {
		this.repository = getRepository(Game);
	}

	async findByTitleContaining(param: string): Promise<Game[]> {
		return this.repository.createQueryBuilder('game').where('title ILIKE :title', { title: `%${param}%` }).getMany();
		// Complete usando query builder
	}

	async countAllGames(): Promise<[{ count: string }]> {
		return this.repository.query('SELECT count(*) as count FROM games;'); // Complete usando raw query
	}

	async findUsersByGameId(id: string): Promise<User[]> {
		const game = await this.repository.findOne(id, {
			relations: ['users'],
		});
		return game?.users ?? [];
	}
}
