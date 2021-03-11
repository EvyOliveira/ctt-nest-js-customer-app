import { Customer } from "src/interfaces/customer.interface";
import { Injectable, ConflictException } from "@nestjs/common";
import { CustomerDto } from "src/dto/create-customer.dto";

@Injectable()
export class CustomerService {

  private readonly customers:Customer[] = 
  [
    {
      name: "Evelyn", 
      age: 24, 
      document: '12345678912'
    }
  ];
  
  createCustomer(createCustomerDto: CustomerDto) {
    var customerWithFilter : Customer[] = this.customers.filter(customer => createCustomerDto.document === customer.document)
  
   // if(!createCustomerDto.name === null || !createCustomerDto.age || !createCustomerDto.document){
     // throw new BadRequestException();
  //  }
  
    if(customerWithFilter.length > 0) {
      throw new ConflictException("Customer already exists."); 
    }

    this.customers.push(createCustomerDto);

  }

  findAll(): Customer[] {
    return this.customers;
  }

}