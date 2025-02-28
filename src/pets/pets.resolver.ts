import { Query, Resolver } from '@nestjs/graphql'
import { Pet } from './pets.entity'
import { PetsService } from './pets.service'

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll()
  }
}
