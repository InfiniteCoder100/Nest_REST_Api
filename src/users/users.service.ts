import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Karan', email: 'karan@dev', role: 'ADMIN' },
    { id: 2, name: 'Varuna', email: 'varuna@dev', role: 'INTERN' },
    { id: 3, name: 'Json', email: 'json5@dev', role: 'ADMIN' },
    { id: 4, name: 'Kiva', email: 'kwan@dev', role: 'INTERN' },
    { id: 5, name: 'Lulu', email: 'lala@dev', role: 'ADMIN' },
  ];
  //METHODS

  findAll(role?: 'INTERN' | 'ADMIN') {
    if (role) {
      const userWithRoles = this.users.filter((user) => user.role === role);
      return userWithRoles;
    }
    return this.users;
  }

  findOne(id: number) {
    const userWithId = this.users.filter((user) => user.id === id);
    return userWithId;
  }

  create(user: { name: string; email: string; role: 'INTERN' | 'ADMIN' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: { name?: string; email?: string; role?: 'INTERN' | 'ADMIN' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
