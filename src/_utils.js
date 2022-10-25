const toFirstUpperCase = (sentence) => {

    const SENTENCE = sentence.toLowerCase();
    const newSENTENCE = SENTENCE.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

    return newSENTENCE
}

const formatPrice = (value) => {
    
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value );
  }

export { toFirstUpperCase, formatPrice}