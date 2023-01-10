import {
    IsString,
    isNumber,
    Min,
    Max,
    IsLongitude,
    IsLatitude
} from 'class-validator';


export class CreateReportDto {
    make: string;
    model: string;
    year: number;
    mileage: number;
    lng: number;
    lat: number;
    price: number;
}