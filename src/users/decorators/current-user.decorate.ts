import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { LIMIT_COMPOUND_SELECT } from 'sqlite3';

export const currentUser = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
