enum TYPES {
  'handler', 'custom', 'action', 'mail'
}

interface Step {
  name: string;
  type: TYPES;
  action: string;
  order: Number;
  callback: string;
}

interface Playbook {
  name: string;
  createdAt: Date;
  createdBy: string;
  steps: Array<Step>;
}

export { Step, Playbook };