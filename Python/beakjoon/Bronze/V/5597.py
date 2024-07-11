# 과제 안 내신 분..?
# https://www.acmicpc.net/problem/5597

num = [int(input()) for _ in range(28)]
arr = [i for i in range(1, 31)]

result = list(set(arr) - set(num))
result.sort()

print(result[0])
print(result[1])