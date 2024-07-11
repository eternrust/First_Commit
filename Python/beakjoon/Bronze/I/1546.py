# 평균
# https://www.acmicpc.net/problem/1546

count = int(input())
num = list(map(int, input().split()))
maxNum = max(num)
average = 0.0

for i in num:
    average += i / maxNum * 100

print(average / count)