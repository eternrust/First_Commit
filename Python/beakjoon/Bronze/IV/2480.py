# 주사위 세개
# https://www.acmicpc.net/problem/2480

data = list(map(int, input().split()))

if data[0] == data[1] and data[0] == data[2]:
    print(10000 + data[0] * 1000)
elif data.count(data[0]) == 2:
    print(1000 + data[0] * 100)
elif data.count(data[1]) == 2:
    print(1000 + data[1] * 100)
else:
    print(max(data) * 100)