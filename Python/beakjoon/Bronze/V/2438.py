# 별 찍기 - 1
# https://www.acmicpc.net/problem/2438

count = int(input())

for i in range(0, count):
    for i in range(0, i + 1):
        print('*', end="")
    print("")