import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies(): string {
    return 'This will return all movies.';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one moive ${id}.`;
  }

  @Post()
  create() {
    return 'This will create a new movie.';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie ${id}`;
  }

  @Patch('/:id')
  path(@Param('id') id: string) {
    return `This will patch a movie with the id ${id}`;
  }
}
