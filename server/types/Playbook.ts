enum TYPES {
  'handler', 'custom', 'action', 'mail'
}

export interface StepInterface {
  name: string;
  type: TYPES;
  action: string;
  order: Number;
  callback: string;
}

export interface PlaybookInterface {
  name: string;
  createdAt: Date;
  createdBy: string;
  steps: Array<StepInterface>;
}