n = int(input())
arr = [1, 1]

def result(x):
    global arr
    if len(arr) - 1 >= x:
        return arr[x]
    else:
        arr.append(result(x - 2) + result(x - 1))
        return arr[x]

print(result(n) % 10007)