type BackAction = () => void;

export class BackHistory {
  histories: BackAction[];
  constructor() {
    this.histories = [];
  }

  push(backAction: BackAction): void {
    this.histories.push(backAction);
  }
  pop(): BackAction | null {
    return this.histories.pop() ?? null;
  }
  back(): void {
    const backAction = this.pop();
    if (!backAction) return;
    return backAction();
  }
}

const backhistory = new BackHistory();
export default backhistory;
