class MensagemView extends View {
  template(model) {
    return `<p class="alert-info alerta">${model.text}</p>`;
  }
}
