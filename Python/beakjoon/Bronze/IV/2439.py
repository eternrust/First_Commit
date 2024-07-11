# 별 찍기 - 2
# https://www.acmicpc.net/problem/2439

count = int(input())

for i in range(0, count):
    for j in range(0, count - i - 1):
        print(" ", end="")
    for j in range(0, i + 1):
        print('*', end="")
    print("")