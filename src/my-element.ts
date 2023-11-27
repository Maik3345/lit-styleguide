import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createComponent } from "@lit/react";
import React from "react";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    p {
      display: inline-block;
      border: solid 1px gray;
      background: white;
      padding: 0 1em;
    }
  `;

  @property() name = "Somebody";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}

export const MyElementReact = createComponent({
  tagName: "my-element",
  elementClass: MyElement,
  react: React,
});
