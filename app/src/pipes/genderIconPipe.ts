import {Pipe} from '@angular/core';
import {Gender} from "../interfaces/gender";

@Pipe({
  name: 'gendericon'
})
export class GenderIconPipe {
  transform(gender: Gender): string {
    switch (gender) {
      case Gender.Male: return "male";
      case Gender.Female: return "female";
    }

    return "";
  }
}
