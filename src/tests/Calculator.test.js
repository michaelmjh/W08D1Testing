import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';
import cypress from 'cypress';

describe('Calculator', () => {
  
  let container;
  
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should perform addition', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(operatorAdd);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('should perform subtraction', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should perform multiplication', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('should perform division', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatorDivide = container.getByTestId('operator-divide');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatorDivide);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  });

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(operatorAdd);
    fireEvent.click(button4);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('10');
  });

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorEquals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorEquals);
    fireEvent.click(clear);
    fireEvent.click(operatorAdd);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('10');
  });
})

