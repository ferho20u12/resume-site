export type QuickActionItem = {
  key: string;
  label: string;
  icon: string;
  onClick: () => void;
};

export type QuickActionMenuProps = {
  icon: string;
  label?: string;
  actions: QuickActionItem[];
  open: boolean;
  setOpen: (value: boolean) => void;
};