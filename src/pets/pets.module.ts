import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pet } from './entities/pets.entity'
import { PetsResolver } from './pets.resolver'
import { PetsService } from './pets.service'

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
