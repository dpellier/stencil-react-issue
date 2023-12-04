import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
  shadow: true,
})
export class MyText {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
