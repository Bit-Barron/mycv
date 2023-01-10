import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
    id: number;
    price: number;
    year: number;
    lng: number;
    lat: number;
    make: string;
    model: string;
}