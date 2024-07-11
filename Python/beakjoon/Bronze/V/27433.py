import sys
num = int(sys.stdin.readline())

def factorial(x):
    if x <= 1: return 1
    return factorial(x - 1) * x

print(factorial(num))