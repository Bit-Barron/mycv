import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { currentUser } from 'src/users/decorators/current-user.decorate';
import { User } from 'src/users/user.entity';
import { ApprovedReportsDto } from './dtos/approved-report.dto';
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto, @currentUser() user: User) {
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  approvedReport(@Param('id') id: string, @Body() body: ApprovedReportsDto) {}
}


// async changeApproval(id: string, approved: boolean) {
//   const report = await this.repo.findOne({ where: { id: parseInt(id) } });

//   ...

// }
