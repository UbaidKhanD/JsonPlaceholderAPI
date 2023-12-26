import { Pipe, PipeTransform } from '@angular/core';
import { PostData } from './post-data';
import { User } from './user';

@Pipe({
  name: 'mathCalculation',
  pure: true
})
export class MathCalculationPipe implements PipeTransform {
  transform(users: User[], serachItem:string):User[] {
    if(!users || !serachItem){
      return users;
    }
    return users.filter(users=> users.name.toLowerCase().indexOf(serachItem.toLowerCase()) !== -1)
    
  }
}
   