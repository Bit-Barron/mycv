import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

it('can create an instance of auth service', async () => {
  const module = await Test.createTestingModule({
    providers: [AuthService],
  }).compile();
  
});