export class ValueWatcher {
    private resolveFn?: (value: number) => void;
    public targetValue: number;
    
    constructor(targetValue: number) {
        this.targetValue = targetValue;
    }

    //watchForValueChangeを再使用する前に呼び出す。
    public IncrementTargetValue(): void {
        this.targetValue += 1;
    }
    
    // Promiseを返す
    public watchForValueChange(): Promise<number> {
        return new Promise((resolve) => {
            this.resolveFn = resolve; // resolve関数を保持
        });
    }

    // 外部から値をセットする
    public setValue(newValue: number) {
        if (!this.resolveFn) {
            throw new Error("resolveFn is not set. Call watchForValueChange first.");
        }

        if (newValue === this.targetValue) {
            this.resolveFn(newValue); // ターゲット値に達したらresolveを呼び出す
        } else {
            console.log("ターゲット値に達していません");
        }
    }
}
