import { ClassroomRepository } from '@modules/classroom/classroom.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidatorService } from '@sharedServices/validator.service';

import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository, ClassroomRepository])],
    controllers: [UserController],
    exports: [UserService],
    providers: [UserService, ValidatorService],
})
export class UserModule {}
