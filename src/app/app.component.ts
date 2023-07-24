import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regex-validation';

  usernameError = true;
  emailError = true;

  capitalIcon = 'fa-solid fa-circle-xmark';
  symbolIcon = 'fa-solid fa-circle-xmark';
  hyphenIcon = 'fa-solid fa-circle-xmark';

  capitalRequirementColor = 'red';
  symbolRequirementColor = 'red';
  hyphenRequirementColor = 'red';

  validateUsername(username: string){
    const regex = /^[a-zA-Z]+$/

    const match = username.match(regex);
    if(!match){
      this.usernameError = false
    }else{
      this.usernameError = true
    }
  }

  validateEmail(email: string){
    const regex = /^(?!\.)[a-zA-z0-9!#$%&'*/=?^_+-`{|}~]+(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/

    const match = email.match(regex)
    if(!match){
      this.emailError = false
    }else{
      this.emailError =  true
    }

  }

  validatePassword(password: string){
    const capitalRegex = /[A-Z]{5,}/;
    const symbolRegex = /[^\w\s]{6,}/;
    const hyphenRegex = /[-]{2,}/;

    [this.capitalRequirementColor, this.capitalIcon] = this.updateRequirement(password, capitalRegex);
    [this.symbolRequirementColor, this.symbolIcon] = this.updateRequirement(password, symbolRegex);
    [this.hyphenRequirementColor, this.hyphenIcon] = this.updateRequirement(password, hyphenRegex);
}

  updateRequirement(password: string, regex: RegExp): [string, string] {
    const requirementColor = password.match(regex) ? 'green' : 'red';
    const requirementIcon = password.match(regex)
      ? 'fa-solid fa-circle-check'
      : 'fa-solid fa-circle-xmark';
    return [requirementColor, requirementIcon];
  }

  disableButton(){
    if(
      this.usernameError === true &&
      this.emailError === true &&
      this.capitalRequirementColor === 'green' &&
      this.symbolRequirementColor === 'green' &&
      this.hyphenRequirementColor === 'green'
    ){
      return false
    }else{
      return true
    }
  }

}
