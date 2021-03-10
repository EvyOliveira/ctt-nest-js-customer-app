import { Controller, Get } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';

@Controller('customer')
export class CustomerController {

  private readonly customers:Customer[] = [{name: "Evelyn", age: 24, document: '12345678912'}];

  @Get()
  getCustomers():Customer[]{
    return this.customers;
  }
}
