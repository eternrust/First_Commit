# 스택
# https://www.acmicpc.net/problem/10828
import sys

cnt = int(input())
stack = []
data = [sys.stdin.readline().split() for _ in range(cnt)]

for v in data:
    if v[0] == 'push':
        stack.append(v[1])
    elif v[0] == 'pop':
        print([stack.pop() if len(stack) else -1][0])
    elif v[0] == 'size':
        print(len(stack))
    elif v[0] == 'empty':
        print([0 if len(stack) else 1][0])
    elif v[0] == 'top':
        print([stack[len(stack) - 1] if len(stack) else -1][0])