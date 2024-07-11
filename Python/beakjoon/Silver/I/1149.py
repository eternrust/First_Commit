# RGB거리
# https://www.acmicpc.net/problem/1149

import sys
count = int(input())
arr = []
for i in range(count):
    value = sys.stdin.readline().split()
    for i in range(len(value)):
        value[i] = int(value[i])
    arr.append(value)

result = min(arr[0])
before = arr[0].index(result)
print(result)
for i in range(1, count):
    m = 1001
    tmp = before
    for j in range(0, 3):
        if (arr[i][j] < int(m)) and before != j:
            m = arr[i][j]
            tmp = j
    result += int(m)
    before = tmp
    print(m)

print(result)


# 8
# 71 39 44
# 32 83 55
# 51 37 63
# 89 29 100
# 83 58 11
# 65 13 15
# 47 25 29
# 60 66 19


# count = int(input())
# num = []
# result = []
# numSum = 0

# def minNum(num):
#     global result
#     Min = [1001, 0]
#     cnt = -1
#     if len(result) != 0: cnt = result[len(result) - 1]
#     for i in range(3):
#         if i == cnt: continue
#         if Min[0] > num[i]:
#             Min = [num[i], i]
#     result.append(Min[1])
#     return Min[0]

# for i in range(count):
#     numLine = list(map(int, input().split()))
#     num.append(numLine)
#     numSum += minNum(numLine)

# # del numLine[num[i - 1].index(result[i - 1])]
# print(numSum)