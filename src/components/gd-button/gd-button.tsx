import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'gd-button',
  styleUrl: 'gd-button.css',
  shadow: true,
})
export class GdButton {

  /**
   * The type of the button.
   */
  @Prop()
  type: 'button' | 'reset' | 'submit' = 'button';

  /**
   * The button size.
   */
  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  /**
   * Creates an outlined button that is flush with the surface.
   */
  @Prop()
  outlined: boolean = false;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop()
  disabled: boolean = false;

  /**
   * If `true`, the button has a pulsating effect for highlighting the element in the content.
   */
  @Prop()
  highlighted: boolean = false;

  render() {
    const classes = {
      'gd-button--outlined': this.outlined,
      'gd-button--highlighted': this.highlighted,
    };

    return (
      <Host>
        <button type={this.type} disabled={this.disabled} class={classes} id="button">
          <slot></slot>
        </button>
      </Host>
    );
  }

}
