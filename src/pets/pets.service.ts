import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePetInput } from './dto/create-pet.input'
import { Pet } from './entities/pets.entity'

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private readonly petRepository: Repository<Pet>) {}

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput)
    return this.petRepository.save(newPet)
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find()
  }
}
