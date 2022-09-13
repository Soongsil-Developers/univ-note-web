// import { useState } from "react";

/**
 * 직접 사용하기 위한 undo, redo 클래스입니다.
 * ++ 결국 사용 안하기로 했습니다.
 * 이유 : react quill의 모든 모듈의 함수들을 탐색해서 만들어진 undo redo 기능을 버튼에 바인딩하는데 성공했습니다.
 * 라이브러리와 충돌이 생겨 react quill의 history 스택이 망가집니다. 이유는 모르겠습니다. 때문에 ctrl+z를 눌러 되돌릴 때 이상해집니다.
 */
export class UndoRedoManager {
    // 사용자가 입력한 것 들을 담을 변수들
    // undoList는 뭔가 이름이 부적절한듯..? redo함수 쓸 때 좀 헷갈릴 거 같다.
    // 이 클래스에서 단 한번 사용하는 거니까 일단은 두자.
    public undoList : string [];
    public redoList : string [];

    constructor() {
        this.undoList = [];
        this.undoList = [];
    }

    inputData(data: string) {
        console.log(data);
        this.undoList.push(data);
        this.redoList = [];
    }

    /**
     * 텍스트를 뒤로가기(undo) 시킵니다.
     * @returns string | 해당 값은 setText를 이용해 text값을 업데이트 해주기 위한 것입니다.
     */
    undo() : string {
        console.log(this.undoList);
        if(this.undoList.length > 0){
            const undoData : string | undefined = this.undoList.pop();
            console.log(undoData);
            if(undoData) {
                this.redoList.push(undoData);
                // return this.undoList.join('');
                return this.undoList[this.undoList.length - 1];
            }
        }
    }

    /**
     * 텍스트를 되돌리기(redo) 시킵니다.
     * @returns string | 해당 값은 setText를 이용해 text값을 업데이트 해주기 위한 것입니다.
     */
    redo() : string {
        if(this.redoList.length > 0){
            const redoData : string | undefined = this.redoList.pop();

            if(redoData){
                this.undoList.push(redoData);

                return this.undoList[this.undoList.length - 1];
            }
        }
    }
}