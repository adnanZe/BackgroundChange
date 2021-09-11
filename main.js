const spanDisplay = document.querySelector('.display');
const angleNumber = angle => {
  return Math.floor(Math.random() * angle);
};

const backgroundRGBA = {
  name: 'RedGreenBlueAlpha',
  changeIntensity: () => {
    return Math.floor(Math.random() * 256);
  },
  changeTransparency: () => {
    return Math.random().toFixed(2);
  },
  magicHappen: () => {
    let x = [];
    for(i = 0; i < 3; i++){
      x += backgroundRGBA.changeIntensity() + ', ';
    };
    let color = 'rgba(' + x + backgroundRGBA.changeTransparency() + ')';
    return [document.body.style.background = color, spanDisplay.innerHTML = color];
  },
};

const backgroundHEX = {
  name: 'Hexadecimal',
  hex: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
  getHexValue: function() {
    return this.hex[Math.floor(Math.random() * this.hex.length)];
  },
  magicHappen: () =>{
    let color = '#';
    for(i = 0; i < 6; i++){
      color += backgroundHEX.getHexValue();
    }
    return [document.body.style.background = color, spanDisplay.innerHTML = color]
  },
};

const backgroundHSL = {
  name: 'HueSaturationLightness',
  randomValue: (number) =>{
    return Math.floor(Math.random() * number);
  },
  concat: function(){
    return 'hsl(' + this.randomValue(360) + ', ' + this.randomValue(101) + '%, ' + this.randomValue(101) + '%)';
  },
  addHSLwithDOM: function(){
    return [document.body.style.background = this.concat(), spanDisplay.innerHTML = this.concat()];
  }
};
