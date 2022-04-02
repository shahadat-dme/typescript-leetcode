var reverseString = function(s: string []): void {
    let left: number = 0;
    let right: number = s.length - 1;
    while (left <= right) {
        [s[left],s[right]] = [s[right],s[left]]
        left++;
        right--;
    }
};