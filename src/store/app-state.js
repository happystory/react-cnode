import {
  observable, computed, autorun, action,
} from 'mobx';

export class AppState {
  @observable count = 0

  @observable name = 'Jokcy'

  @computed get msg() {
    return `${this.name}: ${this.count}`;
  }

  @action add() {
    this.count += 1;
  }

  @action changeName(name) {
    this.name = name;
  }
}

const appState = new AppState();

autorun(() => {
  console.log(appState.msg);
});

setInterval(() => {
  appState.add();
}, 3000);

export default appState;
