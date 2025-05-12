class ScCrossFrameComp extends HTMLElement {
  static get observedAttributes() {
    return ['label'];
  }

  static sheet = (() => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
      button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: var(--btn-bg-color, #4CAF50);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: var(--btn-hover-color, #45a049);
      }
    `);
    return sheet;
  })();

  constructor() {
    super();
    console.log('constructor: sc-cross-frame-comp created');
    // Attach Shadow DOM
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [ScCrossFrameComp.sheet];
    const template = document.createElement('template')
    template.innerHTML = `
      <div class="sc-cross-frame-comp impl-by-native-js">
        <button id="labelBtn">{{ label }}</button>
        <div class="slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.button = this.shadowRoot.getElementById('labelBtn');
    this.slotContent = this.shadowRoot.querySelector('.slot-content');
    this.button.addEventListener('click', this.handleClick.bind(this));
  }

  connectedCallback() {
    console.log('connectedCallback: sc-cross-frame-comp added to page');
    this._label = this.getAttribute('label') || 'Default';
    this.render();
  }

  disconnectedCallback() {
    console.log('disconnectedCallback: sc-cross-frame-comp removed from page');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attributeChangedCallback: ${name} changed from ${oldValue} to ${newValue}`);
    if (name === 'label') {
      this._label = newValue;
      this.render();
    }
  }

  adoptedCallback() {
    console.log('adoptedCallback: sc-cross-frame-comp moved to new document');
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('sc-click', {
      bubbles: true,
      // 是否可以从 Shadow DOM 传递到一般的 DOM
      composed: true,
      detail: { source: 'native-js' }
    }));
  }

  render() {
    if (this.button) {
      this.button.textContent = this._label;
    }
  }

  changeSlotContentStyle(style) {
    console.log('changeSlotContentStyle: changing slot content style');
    if (this.slotContent) {
      this.slotContent.style = style;
    }
  }

  // 方便外部直接设置 label 属性
  get label() {
    return this._label;
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  set complexProps(value) {
    console.log('complexProps: setting complex properties');
    this._complexProps = value;
  }
  get complexProps() {
    return this._complexProps;
  }
}

customElements.define('sc-cross-frame-comp0', ScCrossFrameComp);
