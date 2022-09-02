export type DrawerWorkRefType = {
  initOpen: () => void
};
export type ModalRefType = {
  initOpen: () => void
};
export type ProgramListPropsType = {
  programDetail: ProgramDetailType
};


export type ProgramDetailType = {
  title: string,
  detail: string,
  proportion: string,
  reason: string
}
export type DrawerPropsType = {
  onchangeOpen: () => void,
  onOverrule: () => void
};

export type ModalPropsType = {
  onchangeOpen: () => void
};
export type CardWorkPropsType = {
  handleOrder: () => void
};
