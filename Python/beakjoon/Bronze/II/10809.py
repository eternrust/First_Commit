# 알파벳 찾기
# https://www.acmicpc.net/problem/10809

arr = list(map(ord, input()))
l = ["-1"] * 26

for i in range(len(arr)):
    if l[arr[i] - 97] != "-1": continue
    l[arr[i] - 97] = str(i)

print(" ".join(l))