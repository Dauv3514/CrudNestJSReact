import { Controller, Get, Body, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schema/employee-schema';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  async getAll() {
    return await this.employeeService.getAll();
  }
  @Post()
  async create(@Body() createEmployeeDto: Employee) {
    return await this.employeeService.create(createEmployeeDto);
  }
}
