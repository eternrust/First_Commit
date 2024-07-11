# 영수증
# https://www.acmicpc.net/problem/25304

money = int(input())
count = int(input())
data = [list(map(int, input().split())) for _ in range(count)]
result = 0

for i in data:
    result += i[0] * i[1]

if money == result:
    print('Yes')
else:
    print('No')