import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) throw new BadRequestException(error.message);
    return value;
  }
}

@Injectable()
export class ConvertToObject implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return { data: value };
  }
}
