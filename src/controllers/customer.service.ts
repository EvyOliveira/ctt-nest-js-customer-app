import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {

  createCustomer(_createCustomerDto: import("../dto/create-customer.dto").CustomerDto) {
    throw new Error("Method not implemented.");
  }
}
