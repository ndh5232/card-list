/* eslint-disable lit/attribute-value-entities */
import { LitElement, html, css } from 'lit';
import 'ndh5232char-card/src/ndh5232char-card';

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main></main>
      <div class="card-container">
        <ndh5232char-card></ndh5232char-card>
        <ndh5232char-card
          image="https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest?cb=20190623020017"
          toptext="Let woody cook"
          bottomtext="Sora"
          title="Woody"
          >Woody Cookin</ndh5232char-card
        >
        <ndh5232char-card
          image="https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest?cb=20190623020017"
          toptext="BUZZ!"
          bottomtext="Lightyear"
          title="Buzz Lightyear"
          >Buzz Lightyear staring</ndh5232char-card
        >
      </div>
    `;
  }
}

customElements.define('card-list', CardList);
