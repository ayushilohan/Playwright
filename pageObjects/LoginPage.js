class LoginPage {

constructor(page){
    this.page = page;
    this.signInLink = page.getByRole('link', {name: 'Hello, sign in Account & Lists'});
    this.userName = page.locator('#ap_email');
    this.password = page.locator('#ap_password');
    this.continueBtn = page.getByLabel('Continue');
}

async goTo(){
    await this.page.goto('https://www.amazon.in/');
}

async validLogin(username, passWord){
    await this.signInLink.click();
    await this.userName.type(username);
    await this.continueBtn.click();
    await this.password.type(passWord);
}
}
module.exports = {LoginPage};