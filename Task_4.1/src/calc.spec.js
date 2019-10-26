import { calc } from '../src/calc';

describe('Calculator object', () => {
  describe('Initial display value', () => {
    it('should show only 0 on startup', () => {
      expect(calc.currentInput).to.equal('0');
      expect(calc.memoryField).to.equal('');
    });
  });
  
  describe('.onInput method', () => {
    it('should change currentInput to 1', () => {
      calc.onInput('1');
      expect(calc.currentInput).to.equal('1');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 12', () => {
      calc.onInput('2');
      expect(calc.currentInput).to.equal('12');
      expect(calc.memoryField).to.equal('');
    });
  
    it('should change currentInput to 123', () => {
      calc.onInput('3');
      expect(calc.currentInput).to.equal('123');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 1234', () => {
      calc.onInput('4');
      expect(calc.currentInput).to.equal('1234');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 12345', () => {
      calc.onInput('5');
      expect(calc.currentInput).to.equal('12345');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 123456', () => {
      calc.onInput('6');
      expect(calc.currentInput).to.equal('123456');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 1234567', () => {
      calc.onInput('7');
      expect(calc.currentInput).to.equal('1234567');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 12345678', () => {
      calc.onInput('8');
      expect(calc.currentInput).to.equal('12345678');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 123456789', () => {
      calc.onInput('9');
      expect(calc.currentInput).to.equal('123456789');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 1234567890', () => {
      calc.onInput('0');
      expect(calc.currentInput).to.equal('1234567890');
      expect(calc.memoryField).to.equal('');
    });

    it('should change currentInput to 1234567890+', () => {
      calc.onInput('+');
      expect(calc.currentInput).to.equal('1234567890');
      expect(calc.memoryField).to.equal('1234567890+');
    });

    it('should change currentInput to 1234567890-', () => {
      calc.onInput('-');
      expect(calc.currentInput).to.equal('1234567890');
      expect(calc.memoryField).to.equal('1234567890-');
    });

    it('should change currentInput to 1234567890*', () => {
      calc.onInput('*');
      expect(calc.currentInput).to.equal('1234567890');
      expect(calc.memoryField).to.equal('1234567890*');
    });

    it('should change currentInput to 1234567890/', () => {
      calc.onInput('/');
      expect(calc.currentInput).to.equal('1234567890');
      expect(calc.memoryField).to.equal('1234567890/');
    });

    it('should change currentInput to 0. if there is no decimal point in it', () => {
      calc.onInput('.');
      expect(calc.currentInput).to.equal('0.');
      expect(calc.memoryField).to.equal('1234567890/');
    });

    it('should change currentInput to 0.5', () => {
      calc.onInput('5');
      expect(calc.currentInput).to.equal('0.5');
      expect(calc.memoryField).to.equal('1234567890/');
    });

    it('should not change the currentInput if there is already a decimal point in it', () => {
      calc.onInput('.');
      expect(calc.currentInput).to.equal('0.5');
      expect(calc.memoryField).to.equal('1234567890/');
    });
  });

  describe('.onDelete method', () => {
    it('should delete the last symbol from the currentInput', () => {
      calc.onDelete();
      expect(calc.currentInput).to.equal('0.');
      expect(calc.memoryField).to.equal('1234567890/');
    });
    
    it('should not delete the last symbol from the currentInput after pressing an operator', () => {
      calc.onInput('+');
      calc.onDelete();
      expect(calc.currentInput).to.equal('0.');
      expect(calc.memoryField).to.equal('1234567890/0.+');
    });
  });

  describe('.onClean method', () => {
    it('should reset currentInput and memoryField', () => {
      calc.onClean();
      expect(calc.currentInput).to.equal('0');
      expect(calc.memoryField).to.equal('');
    });
  });

  describe('.onEquals method', () => {
    it('should calculate and change the currentInput and memoryField values', () => {
      calc.onInput('5');
      calc.onInput('+');
      calc.onInput('6');
      calc.onEquals();
      expect(calc.currentInput).to.equal(11);
      expect(calc.memoryField).to.equal('');
    });
    
    it('should make the next input reset the currentInput', () => {
      calc.onInput('5');
      expect(calc.currentInput).to.equal('5');
      expect(calc.memoryField).to.equal('');
    });

    it('should make .onDelete method not delete the currentInput after the calculation', () => {
      calc.onEquals()
      calc.onDelete();
      expect(calc.currentInput).to.equal(5);
      expect(calc.memoryField).to.equal('');
    });
  });
});
  


  
 
  