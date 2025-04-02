function isPalindrome(str: string): boolean {
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}

function printReverseArray(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
