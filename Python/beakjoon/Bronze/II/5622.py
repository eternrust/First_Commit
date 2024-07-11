# 다이얼
# https://www.acmicpc.net/problem/5622

l = list(map(ord, input()));
Sum = 0

for i in l:
    tmp = int((i - 65) / 3)
    if tmp == 8 or (tmp >= 6 and (i - 65) % 3 == 0):
        Sum += tmp + 2
    else:
        Sum += tmp + 3

print(Sum)