import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipes'
})
export class TestPipesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `Hello ${value}`;
  }

}
