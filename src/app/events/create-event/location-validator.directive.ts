import {Directive} from '@angular/core';
import {FormGroup, Validators, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appValidateLocation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LocationValidatorDirective,
    multi: true
  }]
})
export class LocationValidatorDirective implements Validators{
  validate(formGroup: FormGroup): { [key: string]: any} {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;
    const locationConditions =
      addressControl && addressControl.value
      && cityControl && cityControl.value
      && countryControl && countryControl.value;
    const onlineConditions = onlineUrlControl && onlineUrlControl.value;
    if (locationConditions || onlineConditions ){
      return null;
    }
    return {
      validateLocation: false
    };
  }
}
