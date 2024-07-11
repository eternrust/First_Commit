n, k = map(int, input().split())
arr = []
l = list(map(int, input().split()))[:n]

for _ in range(k):
    m = max(l)
    arr.append(m)
    l.remove(m)

print(min(arr))

# 5 2
# 100 76 85 93 98

# answer: 98