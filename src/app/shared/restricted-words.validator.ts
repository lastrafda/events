import {FormControl} from "@angular/forms";

export function restrictedWords(words) {
  return(control: FormControl) : {[key: string]: any} => {
    if(!words) return null;
    const invalidWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w !== null)
    return control.value.includes('foo')
      ? {'restrictedWords': invalidWords.join(',  ')}
      : null
  }
}
