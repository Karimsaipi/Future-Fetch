class Game {
    _welcome = 'Welcome to the game, get ready to race';
    get _welcome() {
        return this._welcome;
      }
    constructor(){
        
    }
    static staticWelcome() {
        alert(this._welcome)
    }
};
