export class CreateUserDto {
  readonly userId: string;
}

export class UpdateUserDto {
  readonly userId: string;
  readonly isActive: boolean;
}
