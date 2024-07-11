# 숫자의 합
# https://www.acmicpc.net/problem/11720

n = int(input())
l = list(map(int, input()))
Sum = 0

for i in range(n):
    Sum += l[i]

print(Sum)