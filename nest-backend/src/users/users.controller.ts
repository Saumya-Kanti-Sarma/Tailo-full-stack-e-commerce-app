import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly services: UsersService) { }
  @Post()
  async PostUsers(@Res() res: Response, @Body() userDTO: CreateUserDto) {
    try {
      const newUser = await this.services.createUser(userDTO);
      return res.status(200).json({
        message: "account created",
        newUser
      });
    } catch (error) {
      if (error.errorResponse.code === 11000) {
        const errorCause: string = (Object.keys(error.keyValue)).toString();
        if (errorCause == "name") {
          return res.status(400).json({
            message: "User with the provided name already exist.",
          })
        }
        else if (errorCause == "email") {
          return res.status(400).json({
            message: "User with the provided email already exist.",
          })
        }
        else {
          return res.status(400).json({
            message: "Dublication key error",
            error
          })
        }
      }
      return res.status(400).json({
        message: "request failed with unexpected error",
        error
      })
    }
  }

  @Get()
  async GetAllUser(@Res() res: Response) {
    try {
      const allUsers = await this.services.getAllUsers();
      return res.status(200).json({
        allUsers
      })
    } catch (error) {
      res.status(400).json({
        message: "unexpected error in getting users",
        error
      })
    }
  }
}
