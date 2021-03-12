import { ConflictException, Injectable } from '@nestjs/common';
import { CustomerDto } from 'src/dto/create-customer.dto';
import { Customer } from 'src/interfaces/customer.interface';

@Injectable()
export class CustomerService {
  private readonly customers: Customer[] = [
    {
      name: 'Evelyn',
      age: 24,
      document: '123456789',
    },
  ];

  createCustomer(createCustomerDto: CustomerDto) {
    const customerWithFilter: Customer[] = this.customers.filter(
      (customer) => createCustomerDto.document === customer.document,
    );

    if (customerWithFilter.length > 0) {
      throw new ConflictException('Customer already exists.');
    }

    this.customers.push(createCustomerDto);
  }

  findAll(): Customer[] {
    return this.customers;
  }
}
