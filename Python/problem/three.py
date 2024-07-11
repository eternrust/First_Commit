def search(keymap, x):
    result = 101
    for value in keymap:
        tmp = value.find(x)
        if tmp != -1 and tmp < result:
            result = tmp
    return [-1 if result == 101 else result][0]

def solution(keymap, targets):
    answer = []
    for value in targets:
        tmp = 0
        for i in range(len(value)):
            data = search(keymap, value[i])
            if data == -1:
                tmp = -1
                break
            else:
                tmp += data + 1
        answer.append(tmp)
    return answer

a = solution(["AGZ", "BSSS"], ["ASA","BGZ"])
print(a)
# print("ABCD".find('C'))

# ["ABACD", "BCEFD"], ["ABCD","AABB"]
# answer : [9, 4]
# ["AA"], ["B"]
# answer : [-1]
# ["AGZ", "BSSS"], ["ASA","BGZ"]
# answer : [4, 6]

