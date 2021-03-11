import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CustomerDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsNotEmpty()
  document: string;
}