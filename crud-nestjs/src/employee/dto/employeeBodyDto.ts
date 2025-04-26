import { IsString, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  experience: number;
}
