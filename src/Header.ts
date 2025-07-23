class Header {
  private rootElement: HTMLElement | null;
  private overlayElement: HTMLElement | null = null;
  private buttonElement: HTMLElement | null = null;

  private selectors = {
    root: '[data-ts-header]',
    overlay: '[data-ts-header-overlay]',
    button: '[data-ts-header-burger-button]',
  };

  private stateClasses = {
    active: 'is-active',
    lock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    
    this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay) ?? null;
    this.buttonElement = this.rootElement?.querySelector(this.selectors.button) ?? null;
    this.bindEvents();
  }

  onButtonClick = () => {
    this.buttonElement?.classList.toggle(this.stateClasses.active);
    this.overlayElement?.classList.toggle(this.stateClasses.active);
  }

  bindEvents() {
    this.buttonElement?.addEventListener('click', this.onButtonClick)
  }
}  

export default Header;