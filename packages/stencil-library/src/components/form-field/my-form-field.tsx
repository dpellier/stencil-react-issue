import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-form-field',
  styleUrl: 'my-form-field.css',
  shadow: true,
})
export class MyFormField {
  render() {
    return (
      <Host>
        <my-text>
          I am the form field
        </my-text>
      </Host>
    );
  }
}
