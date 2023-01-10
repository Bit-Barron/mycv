import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { currentUser } from 'src/users/decorators/current-user.decorate';
import { User } from 'src/users/user.entity';
import { ReportDto } from './dtos/report.dto';
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto, @currentUser() user: User) {
    return this.reportsService.create(body, user);
  }
}
