import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreatePetInput } from './dto/create-pet.input'
import { Pet } from './entities/pets.entity'
import { PetsService } from './pets.service'

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll()
  }

  @Query(() => Pet)
  pet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id)
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsService.create(createPetInput)
  }
}
