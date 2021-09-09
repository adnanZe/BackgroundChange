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
    return Math.random();
  },
  concat: function() {
    return 'rgba(' + this.changeIntensity() + ', ' + this.changeIntensity() + ', ' + this.changeIntensity() + ', ' + this.changeTransparency() + ')';
  },
  addRGBAwithDOM: function(){
    return [document.body.style.background = this.concat(), spanDisplay.innerHTML = this.concat()];
  }
};

const backgroundHEX = {
  name: 'Hexadecimal',
  hex: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
  getHexValue: function() {
    return this.hex[Math.floor(Math.random() * this.hex.length)];
  },
  concat: function(){
    return '#' + this.getHexValue() + this.getHexValue() + this.getHexValue() + this.getHexValue() + this.getHexValue() + this.getHexValue();
  },
  addHEXwithDOM: function(){
    return [document.body.style.background = this.concat(), spanDisplay.innerHTML = this.concat()];
  }
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
