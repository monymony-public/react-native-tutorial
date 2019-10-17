import {observable} from 'mobx';
class CounterStore {
  @observable counter = [{counterNum: 0}];

  // Add counter
  handleAddCounter = () => {
    this.counter.push({counterNum: 0});
  };

  // Remove counter
  handleRemoveCounter = () => {
    this.counter.pop();
  };

  // Increment counterNum
  handleIncrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum + 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };

  // Decrement counterNum
  handleDecrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum - 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };
}

export default new CounterStore();
