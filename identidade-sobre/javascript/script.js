function lerTexto(elemento) {
    const texto = elemento.innerText;
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(texto);
    synth.speak(utterance);
  }