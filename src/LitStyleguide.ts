import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createComponent } from '@lit/react';
import * as React from 'react';
@customElement('lit-styleguide')
export class LitStyleguide extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-styleguide-text-color, #000);
    }
  `;

  @property({ type: String }) header = 'Hey there, from Lit!';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-styleguide': LitStyleguide;
  }
}

export const LitStyleguideComponent = createComponent({
  tagName: 'lit-styleguide',
  elementClass: LitStyleguide,
  react: React,
});
