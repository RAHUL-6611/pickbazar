import { PickType } from '@nestjs/swagger';
import { Address } from '../entities/address.entity';

export class CreateAddressDto extends PickType(Address, [   //PARAMETERS
  'title',
  'type',
  'default',
  'address',
]) {
  'customer_id': number;
}
