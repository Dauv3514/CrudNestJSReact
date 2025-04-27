import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employeeBodyDto';
import { UpdateEmployeeDto } from './dto/employeeUpdateBodyDto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  async getAll() {
    return await this.employeeService.getAll();
  }
  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeService.create(createEmployeeDto);
  }
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.employeeService.getById(id);
  }
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() UpdateEmployeeDto: UpdateEmployeeDto,
  ) {
    return await this.employeeService.update(id, UpdateEmployeeDto);
  }
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.employeeService.delete(id);
  }
}
