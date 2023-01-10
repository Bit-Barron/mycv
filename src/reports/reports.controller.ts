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
import { AdminGuard } from 'src/guards/admin.guard';
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto, @currentUser() user: User) {
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approvedReport(@Param('id') id: string, @Body() body: ApprovedReportsDto) {
    return this.reportsService.changeApproval(id, body.approved);
  }
}


// async changeApproval(id: string, approved: boolean) {
//   const report = await this.repo.findOne({ where: { id: parseInt(id) } });

//   ...

// }
