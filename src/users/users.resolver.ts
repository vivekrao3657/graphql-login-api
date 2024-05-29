import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => String)
  login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): string {
    return this.usersService.validateUser(username, password)
      ? 'Login successful'
      : 'Invalid credentials';
  }
}
