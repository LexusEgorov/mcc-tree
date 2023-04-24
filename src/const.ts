export enum NameSpace {
  App = 'APP',
};

export enum Action {
  Add = 'ADD',
  Remove = 'REMOVE',
  Edit = 'Edit',
  Reset = 'Reset',
};

export enum ModalType {
  Input = 'INPUT',
  Accept = 'ACCEPT',
}

const node_2 = {
  id: 2,
  value: '2',
  childNodes: [],
}

const node_4 = {
  id: 4,
  value: '4',
  childNodes: [],
}

const node_5 = {
  id: 5,
  value: '5',
  childNodes: [],
}

const node_6 = {
  id: 6,
  value: '6',
  childNodes: [],
}

const node_3 = {
  id: 3,
  value: '3',
  childNodes: [node_5, node_6],
}

export const node_1 = {
  id: 1,
  value: '1',
  childNodes: [node_2, node_3, node_4],
}