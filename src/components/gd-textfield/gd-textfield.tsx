import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'gd-textfield',
  styleUrl: 'gd-textfield.css',
  shadow: true,
})
export class GdTextfield {

  /**
   * The input label.
   */
  @Prop()
  label!: string;

  /**
   * The input hint text.
   */
  @Prop()
  hint: string;

  /**
   *
   */
  @Prop()
  invalid: boolean = false;

  render() {
    const inputClasses = {
      'gd-text-field__input': true,
      'gd-text-field__input--invalid': this.invalid
    };

    return (
      <Host>
        <label htmlFor="input" class="gd-text-field__label">{this.label}</label>
        <div id="hint" class="gd-text-field__hint">
          {this.hint}
        </div>
        <div id="error" class="gd-text-field__error">
          <slot name="error"></slot>
        </div>
        <input id="input" type="text" class={inputClasses} aria-describedby="hint error"/>
      </Host>
    );
  }

}
