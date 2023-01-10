import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { ReportsController } from './reports.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Report]), ReportsModule],
  providers: [ReportsService],
  controllers: [ReportsController],
  exports: [ReportsService],

})
export class ReportsModule {}