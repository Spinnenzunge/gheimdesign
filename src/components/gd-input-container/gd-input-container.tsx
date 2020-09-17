import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'gd-input-container',
  styleUrl: 'gd-input-container.css',
  shadow: true,
})
export class GdInputContainer {

  render() {
    return (
      <Host>
        <div class="gd-input__label">
          <slot name="label"></slot>
        </div>
        <div class="gd-input__input">
          <slot name="input"></slot>
        </div>
      </Host>
    );
  }

}
