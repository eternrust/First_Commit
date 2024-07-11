# 암람 시계
# https://www.acmicpc.net/problem/2884

data = list(map(int, input().split()))

data[0] = (data[0] + 23) % 24 if data[1] < 45 else data[0]
data[1] = (data[1] + 15) % 60

print(data[0], data[1])