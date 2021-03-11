import { Controller, Get, Post, Body } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CustomerDto } from 'src/dto/create-customer.dto';
import { CustomerService } from './controllers/customer.service';

@Controller('customers')
export class CustomerController {
  customers: any;

  constructor(private readonly customerService: CustomerService){}

  @Get()
  getCustomers():Customer[]{
    return this.customers.findAll();
  }

  @Post()
  createCustomer(@Body() createCustomerDto : CustomerDto ){
    this.customerService.createCustomer(createCustomerDto);
  }
}
