# 최댓값
# https://www.acmicpc.net/problem/2562

num = [int(input()) for _ in range(9)]

maxNum = max(num)
print(maxNum)
print(num.index(maxNum) + 1)