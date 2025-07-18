import { Inventory } from './inventory';

export type State = {
  leftInventory: Inventory;
  rightInventory: Inventory;
  clothesInventory: Inventory;
  itemAmount: number;
  shiftPressed: boolean;
  isBusy: boolean;
  additionalMetadata: Array<{ metadata: string; value: string }>;
  history?: {
    leftInventory: Inventory;
    rightInventory: Inventory;
    clothesInventory: Inventory;
  };
};
