import { IsBoolean } from 'class-validator';

export class ApprovedReportsDto {
  @IsBoolean()
  approved: boolean;
}
